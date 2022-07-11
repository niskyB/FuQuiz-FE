import { ChevronRightIcon, HomeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useTimeout from '../../../../core/common/hooks/useTimeout';
import { LessonTypeEnum } from '../../../../core/models/lesson';
import { UserRole } from '../../../../core/models/role';
import { routes } from '../../../../core/routes';
import { RootState } from '../../../../core/store';
import { UserState } from '../../../../core/store/user';
import { getYoutubeCode } from '../../../../core/util';
import { useGetRegistrationUserList } from '../../../course/hooks/useGetRegistrationListUser';
import { useGetLessonById } from '../../common/hooks/useGetLessonById';

interface LessonViewProps {
    lessonId: string;
    subjectId: string;
}

export const LessonView: React.FunctionComponent<LessonViewProps> = ({ lessonId, subjectId }) => {
    const router = useRouter();
    const userState = useSelector<RootState, UserState>((state) => state.user);

    const { lesson } = useGetLessonById(lessonId);
    const { registrationList } = useGetRegistrationUserList({});
    const isAccess = React.useMemo(() => {
        for (let i = 0; i < registrationList.length; i++) {
            const registration = registrationList[i];
            if (registration.pricePackage.subject?.id === subjectId) {
                return true;
            }
        }
        return false;
    }, [registrationList]);

    useTimeout(() => {
        if (!lesson) {
            router.back();
            toast.warn('you might not have permission to see this lesson, please buy this course first to view the content!');
        }
    }, 1000);

    React.useEffect(() => {
        if (userState.id && userState.role.description === UserRole.ADMIN) {
            router.back();
            toast.warn('This content only show for customer, please try another account!');
        }
        return () => {};
    }, []);

    const _renderContent = () => {
        switch (lesson?.type.description) {
            case LessonTypeEnum.LESSON_DETAIL:
                return (
                    <>
                        {lesson.lessonDetail?.videoLink && (
                            <div className="flex flex-col space-y-3">
                                <div className="">Video :</div>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${getYoutubeCode(lesson.lessonDetail?.videoLink)}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        )}
                        <div
                            className="mt-2 space-y-4 text-base text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: lesson.lessonDetail?.htmlContent || '',
                            }}
                        />
                    </>
                );
            case LessonTypeEnum.LESSON_QUIZ:
                return (
                    <>
                        <div
                            className="mt-2 space-y-4 text-base text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: lesson.lessonQuiz?.htmlContent || '',
                            }}
                        />
                        <div className="flex flex-col space-y-5">
                            {lesson.lessonQuiz?.quizzes.map((quiz) => (
                                <Link key={quiz.id} href={isAccess ? `${routes.simulationListUrl}/${quiz.id}` : '#'}>
                                    <div className={`block rounded-lg bg-gray-100 ${isAccess && 'cursor-pointer hover:bg-gray-50'}`}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col space-y-3">
                                                    <div className="text-sm font-medium text-indigo-600 truncate">{quiz.name}</div>
                                                    <div className="flex space-x-2">
                                                        <div className="px-2 text-xs font-semibold leading-5 text-white capitalize bg-green-500 rounded-full w-fit">
                                                            {quiz.type.description}
                                                        </div>
                                                        {quiz.level.name === 'Hard' && (
                                                            <div className="px-2 text-xs font-semibold leading-5 text-white capitalize bg-red-500 rounded-full w-fit">
                                                                Hard
                                                            </div>
                                                        )}
                                                        {quiz.level.name === 'Medium' && (
                                                            <div className="px-2 text-xs font-semibold leading-5 text-white capitalize bg-yellow-500 rounded-full w-fit">
                                                                Medium
                                                            </div>
                                                        )}
                                                        {quiz.level.name === 'Easy' && (
                                                            <div className="px-2 text-xs font-semibold leading-5 text-white capitalize bg-green-500 rounded-full w-fit">
                                                                Easy
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center flex-shrink-0 ml-2">
                                                    <div className="flex">{quiz.numberOfQuestion} questions</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                );
            case LessonTypeEnum.SUBJECT_TOPIC:
                return <></>;
        }
    };
    if (lesson)
        return (
            <div className="flex flex-col space-y-10">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <div className="text-gray-500 cursor-pointer w-7 h-7 hover:text-gray-800">
                            <HomeIcon />
                        </div>
                    </Link>
                    <div className="w-7 h-7">
                        <ChevronRightIcon />
                    </div>

                    <Link href={`/course/${lesson?.subject.id}`}>
                        <div className="text-gray-500 cursor-pointer hover:text-gray-800">{lesson?.subject.name}</div>
                    </Link>

                    <div className="w-7 h-7">
                        <ChevronRightIcon />
                    </div>

                    <div>
                        <div className="text-gray-800 cursor-pointer">{lesson && lesson.name}</div>
                    </div>
                </div>
                <div className="space-y-5">{_renderContent()}</div>
            </div>
        );

    return <div className="text-3xl font-bold text-center text-black"></div>;
};

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { LessonTypeEnum } from '../../../../core/models/lesson';
import { getYoutubeCode } from '../../../../core/util';
import { useGetLessonById } from '../../common/hooks/useGetLessonById';

interface LessonViewProps {
    id: string;
}

const LessonView: React.FunctionComponent<LessonViewProps> = ({ id }) => {
    const { lesson } = useGetLessonById(id);

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
                return <></>;
            case LessonTypeEnum.SUBJECT_TOPIC:
                return <></>;
        }
    };

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
            <div className="">{_renderContent()}</div>
        </div>
    );
};

export default LessonView;

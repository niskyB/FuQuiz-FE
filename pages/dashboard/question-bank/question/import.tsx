import { PhotographIcon, PlayIcon, VolumeUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useDownloader from 'react-use-downloader';
import * as XLSX from 'xlsx';
import { FormWrapper } from '../../../../src/core/components/form';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { Answer } from '../../../../src/core/models/answer';
import { UserRole } from '../../../../src/core/models/role';
import { routes } from '../../../../src/core/routes';
import { getYoutubeCode } from '../../../../src/core/util';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { useGetQuestionLevelList } from '../../../../src/packages/question';
import { addQuestion } from '../../../../src/packages/question/containers/addQuestion/action';

interface ImportQuestionPageProps {}

export interface ImportedQuestion {
    index: number;
    subject: string;
    dimension: string;
    lesson: string;
    level: string;
    status: string;
    imageUrl: string;
    videoUrl: string;
    audioUrl: string;
    content: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correctAnswer: number;
    explanation: string;
}
export interface ImportQuestionOnExcel {
    Index: number;
    Subject: string;
    Dimension: string;
    Lesson: string;
    Level: string;
    Status: string;
    ImageUrl: string;
    VideoUrl: string;
    AudioUrl: string;
    Content: string;
    Answer1: string;
    Answer2: string;
    Answer3: string;
    Answer4: string;
    CorrectAnswer: number;
    Explanation: string;
}

const mappingQuestionFunction = (data: ImportQuestionOnExcel[]): ImportedQuestion[] => {
    return data.map((item) => {
        const {
            Answer1,
            Answer2,
            Answer3,
            Answer4,
            AudioUrl,
            Content,
            CorrectAnswer,
            Dimension,
            Explanation,
            ImageUrl,
            Index,
            Lesson,
            Level,
            Status,
            Subject,
            VideoUrl,
        } = item;

        return {
            answer1: Answer1,
            answer2: Answer2,
            answer3: Answer3,
            answer4: Answer4,
            audioUrl: AudioUrl,
            content: Content,
            correctAnswer: CorrectAnswer,
            dimension: Dimension,
            explanation: Explanation,
            imageUrl: ImageUrl,
            index: Index,
            lesson: Lesson,
            level: Level,
            status: Status,
            subject: Subject,
            videoUrl: VideoUrl,
        };
    });
};

export interface ImportFormDataDTO {
    check: boolean[];
}

export interface QuestionAnswer extends Omit<Answer, 'id'> {}

const ImportQuestionPage: React.FunctionComponent<ImportQuestionPageProps> = () => {
    const router = useRouter();

    const methods = useForm<ImportFormDataDTO>();
    const [file, setFile] = React.useState<File | null>();
    const [data, setData] = React.useState<ImportedQuestion[]>([]);

    const selectWatcher = methods.watch('check');
    const { download } = useDownloader();
    const { levels } = useGetQuestionLevelList();

    const _handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFile(file);
        }
    };

    const _readExcel = async (file: File) => {
        try {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                if (e.target && e.target.result) {
                    const bufferArray = e.target.result;

                    const wb = XLSX.read(bufferArray, { type: 'buffer' });

                    // get the sheet name
                    const wsname = wb.SheetNames[0];

                    //read the sheet
                    const ws = wb.Sheets[wsname];

                    const data = XLSX.utils.sheet_to_json(ws) as ImportQuestionOnExcel[];

                    setData(mappingQuestionFunction(data));
                }
            };
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        if (file) _readExcel(file);

        return () => {};
    }, [file]);

    const _handleOnSubmit = async (formData: ImportFormDataDTO) => {
        const promiseList: Array<Promise<any>> = [];
        for (let i = 0; i < formData.check.length; i++) {
            const isCheck = formData.check[i];
            const currentData = data[i];

            if (isCheck) {
                let answers: QuestionAnswer[] = [
                    { detail: data[i][`answer1`], isCorrect: currentData.correctAnswer === 1 },
                    { detail: data[i][`answer2`], isCorrect: currentData.correctAnswer === 2 },
                    { detail: data[i][`answer3`], isCorrect: currentData.correctAnswer === 3 },
                    { detail: data[i][`answer4`], isCorrect: currentData.correctAnswer === 4 },
                ];
                const isActive = data[i].status.toLowerCase() === 'active' ? true : false;

                const selectedLevel = levels.filter((level) => level.description.toLocaleLowerCase() === data[i].level.toLocaleLowerCase());
                let levelId = '';
                if (selectedLevel && selectedLevel.length > 0) {
                    levelId = selectedLevel[0].id;
                }

                promiseList.push(
                    new Promise((resolve, reject) => {
                        addQuestion({
                            answers,
                            audioLink: currentData.audioUrl,
                            content: currentData.content,
                            dimensions: currentData.dimension,
                            explanation: currentData.explanation,
                            imageUrl: currentData.imageUrl,
                            isActive,
                            isMultipleChoice: false,
                            lesson: currentData.lesson,
                            questionLevel: levelId,
                            videoLink: currentData.videoUrl,
                        })
                            .then((res) => {
                                resolve(res);
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    })
                );
            }
        }
        Promise.allSettled(promiseList).then((res) => {
            for (let i = 0; i < res.length; i++) {
                const singleRes = res[i];
                switch (singleRes.status) {
                    case 'fulfilled':
                        methods.setValue(`check.${i}`, false);
                        toast.success(`Success add question`);
                        break;
                    case 'rejected':
                        toast.error(`Failed to add question, please make sure all information are correct!`);
                        break;
                    default:
                        break;
                }
            }
        });
    };

    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <FormWrapper methods={methods}>
                    <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                            <div className="flex flex-col space-y-10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Import Question</h3>
                                        <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new question for current quiz</p>
                                    </div>
                                    <div className="flex items-center space-x-10">
                                        <div
                                            onClick={() => download('/asset/file/importTestFile.xlsx', 'example.xlsx')}
                                            className="inline-flex items-center py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer h-fit px-7 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Download example file
                                        </div>

                                        <label
                                            htmlFor="file"
                                            className="inline-flex items-center py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer h-fit px-7 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Import
                                        </label>
                                        <input onChange={(e) => _handleChangeFile(e)} className="hidden" type="file" name="file" id="file" />
                                    </div>
                                </div>
                                <div className="font-semibold text-red-500">
                                    <h1>Notes :</h1>
                                    <ol className="ml-10 list-decimal">
                                        <li>On subject, dimension, lesson please input correct ID</li>
                                        <li>
                                            On case a question have more than 2 dimension, please put &quot;,&quot; between them <br />
                                            Example : dimension_id_a,dimension_id_b
                                        </li>
                                        <li>Type correctly the level text</li>
                                        <li>The CorrectAnswer is the answer number that correct</li>
                                        <li>Use example form to edit to make sure you have good experience</li>
                                    </ol>
                                </div>
                                {/* <Table>
                                    <TableHead
                                        fields={[
                                            '',
                                            'Subject',
                                            'Dimension',
                                            'lesson',
                                            'Level',
                                            'Status',
                                            'Image Url',
                                            'Video Url',
                                            'Audio Url',
                                            'Content',
                                            'Answers',
                                            'Correct Answer',
                                            'Explanation ',
                                            '',
                                        ]}
                                    />
                                    <TableBody>
                                        {data.map((item, index) => (
                                            <TableRow key={item.content + '-row-' + index}>
                                                <TableDescription>{index + 1}</TableDescription>
                                                <TableDescription>{item.subject}</TableDescription>
                                                <TableDescription>{item.dimension}</TableDescription>
                                                <TableDescription>{item.lesson}</TableDescription>
                                                <TableDescription>{item.level}</TableDescription>
                                                <TableDescription>{item.status}</TableDescription>
                                                <TableDescription>{item.imageUrl}</TableDescription>
                                                <TableDescription>{item.videoUrl}</TableDescription>
                                                <TableDescription>{item.audioUrl}</TableDescription>
                                                <TableDescription>{item.content}</TableDescription>
                                                <TableDescription>
                                                    <ol className="list-decimal">
                                                        <li>{item.answer1}</li>
                                                        <li>{item.answer2}</li>
                                                        <li>{item.answer3}</li>
                                                        <li>{item.answer4}</li>
                                                    </ol>
                                                </TableDescription>
                                                <TableDescription>{item.correctAnswer}</TableDescription>
                                                <TableDescription>{item.explanation}</TableDescription>
                                                <TableDescription>
                                                    <input key={item.index} type="checkbox" {...methods.register(`check.${index}`)} />
                                                </TableDescription>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table> */}
                                {data.map((item, index) => (
                                    <div
                                        key={item.content + '-row-' + index}
                                        className={`px-5 py-5 space-y-5 text-base bg-white rounded-md ${
                                            selectWatcher && selectWatcher[index] && 'outline-double outline-2  outline-indigo-600'
                                        }`}
                                    >
                                        <div className="flex flex-col space-y-3">
                                            <div className="flex justify-between">
                                                <h1 className="font-bold">Question {index + 1}</h1>
                                                <input type="checkbox" {...methods.register(`check.${index}`)} />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex space-x-3">
                                                    <label className="font-semibold">Subject ID:</label>
                                                    <p>{item.subject}</p>
                                                </div>
                                                <div className="flex space-x-3">
                                                    <label className="font-semibold">Lesson ID:</label>
                                                    <p>{item.lesson}</p>
                                                </div>
                                                <div className="flex space-x-3">
                                                    <label className="font-semibold">SubjectID:</label>
                                                    <p>{item.subject}</p>
                                                </div>
                                                <div className="flex space-x-3">
                                                    <label className="font-semibold">Level:</label>
                                                    <p>{item.level}</p>
                                                </div>
                                                <div className="flex space-x-3">
                                                    <label className="font-semibold">Status:</label>
                                                    <p>{item.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <p className="font-semibold">{item.content}</p>
                                            <fieldset className="space-y-5">
                                                {[item.answer1, item.answer2, item.answer3, item.answer4].map((answer, index1) => {
                                                    return (
                                                        <div
                                                            key={item.content + { index1 }}
                                                            className={`relative flex items-start ${
                                                                index1 + 1 == item.correctAnswer && 'text-green-600'
                                                            }`}
                                                        >
                                                            <div className="flex items-center h-5">{index1 + 1}.</div>
                                                            <div className="ml-2 text-sm">
                                                                <label className={`font-medium  cursor-pointer `}>{answer}</label>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </fieldset>
                                        </div>
                                        <div className="flex flex-col space-y-10 ">
                                            <h1 className="font-bold">Material</h1>
                                            {item.imageUrl && (
                                                <div className="flex flex-col space-y-3">
                                                    <div className="flex items-center space-x-1 font-semibold">
                                                        <div className="w-6 h-6">
                                                            <PhotographIcon />
                                                        </div>

                                                        <div className="">Image :</div>
                                                    </div>
                                                    <img className="max-w-xl" src={item.imageUrl} alt={item.imageUrl} />
                                                </div>
                                            )}
                                            {item.videoUrl && (
                                                <div className="flex flex-col space-y-3 ">
                                                    <div className="flex items-center space-x-1 font-semibold">
                                                        <div className="w-6 h-6">
                                                            <PlayIcon />
                                                        </div>

                                                        <div className="">Video :</div>
                                                    </div>
                                                    <iframe
                                                        width="560"
                                                        height="315"
                                                        src={`https://www.youtube.com/embed/${getYoutubeCode(item.videoUrl)}`}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    ></iframe>
                                                </div>
                                            )}

                                            {item.audioUrl && (
                                                <div className="flex flex-col space-y-3">
                                                    <div className="flex items-center space-x-1 font-semibold">
                                                        <div className="w-6 h-6">
                                                            <VolumeUpIcon />
                                                        </div>
                                                        <div className="">Audio :</div>
                                                    </div>
                                                    <iframe
                                                        width="560"
                                                        height="315"
                                                        src={`https://www.youtube.com/embed/${getYoutubeCode(item.audioUrl)}`}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-5">
                            <div className="flex justify-end">
                                <Link href={routes.adminQuestionListUrl} passHref>
                                    <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cancel
                                    </p>
                                </Link>

                                <button
                                    type="submit"
                                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add as new question
                                </button>
                            </div>
                        </div>
                    </form>
                </FormWrapper>
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default ImportQuestionPage;

import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { allFieldData } from '../../../../core/common/dataField';
import { PracticeType, PracticeTypeFieldData } from '../../../../core/common/dataField/practiceType';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { SelectionFieldValues } from '../../../../core/common/interface';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Dimension } from '../../../../core/models/dimension';
import { LessonTypeEnum } from '../../../../core/models/lesson';
import { RegistrationStatus } from '../../../../core/models/registration';
import { Subject } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';
import { dataParser } from '../../../../core/util/data';
import { useGetRegistrationUserList } from '../../../course/hooks/useGetRegistrationListUser';
import { useGetDimensionListById } from '../../../dimension';
import { LessonList } from '../../../lesson';
import { useGetLessonList } from '../../../lesson/common/hooks/useGetLessonList';
import { AddPracticeAction } from './action';
import { AddPracticeDTO, FormAddPracticeDTO } from './interface';

interface AddPracticeProps {}

const defaultValues: FormAddPracticeDTO = {
    subject: '',
    numberOfQuestion: 0,
    practiceType: '',
    selectedGroup: '',
};

export const AddPractice: React.FunctionComponent<AddPracticeProps> = () => {
    const router = useRouter();
    const methods = useForm<FormAddPracticeDTO>({ defaultValues });
    const [practiceType, setPracticeType] = React.useState<PracticeType | string>('');
    const [groupData, setGroupData] = React.useState<SelectionFieldValues<any>[]>([]);

    const [subjectId, setSubjectId] = React.useState<string>('');

    const _onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubjectId(e.target.value);
    };

    const { registrationList } = useGetRegistrationUserList({ currentPage: 1, pageSize: 999, status: RegistrationStatus.PAID });

    const subjects = React.useMemo<Subject[]>(() => {
        let subjects: Subject[] = [];
        registrationList.map((registration) => {
            registration.pricePackage.subject && subjects.push(registration.pricePackage.subject);
        });
        return subjects;
    }, [registrationList]);

    const { dimensionList: dimensions } = useGetDimensionListById(subjectId);
    const { lessonList: subjectTopics } = useGetLessonList({ id: subjectId, type: LessonTypeEnum.SUBJECT_TOPIC });

    const _onChangeQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value as PracticeType;
        methods.resetField('selectedGroup');
        setPracticeType(type);
    };

    React.useEffect(() => {
        if (practiceType === PracticeType.DIMENSION) {
            setGroupData(dataParser(dimensions, 'name', 'id'));
        }
        if (practiceType === PracticeType.SUBJECT_TOPIC) {
            setGroupData(dataParser(subjectTopics, 'name', 'id'));
        }
    }, [practiceType]);

    const _handleOnSubmit = (data: FormAddPracticeDTO) => {
        const addData: AddPracticeDTO = {
            subject: data.subject,
            numberOfQuestion: data.numberOfQuestion,
            dimension: '',
            subjectTopic: '',
        };

        if (practiceType === PracticeType.DIMENSION) {
            addData.dimension = data.selectedGroup;
        }

        if (practiceType === PracticeType.SUBJECT_TOPIC) {
            addData.subjectTopic = data.selectedGroup;
        }
        console.log(addData);
        AddPracticeAction(addData).then((res) => {
            toast('Add Practice success');
            router.push(`${routes.quizUrl}/${res}`);
        });
    };

    return (
        <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <SelectField
                                name="subject"
                                label="Subject"
                                onChange={(e) => _onChangeSubject(e)}
                                values={[unsetFieldData, ...dataParser(subjects, 'name', 'id')]}
                            />
                            <TextField label="Number of practicing questions" name="numberOfQuestion" type="number" />
                            <SelectField
                                name="practiceType"
                                label="Question are selected by topic(s) or a dimension?"
                                onChange={(e) => _onChangeQuestionType(e)}
                                values={[unsetFieldData, ...PracticeTypeFieldData]}
                            />
                            <SelectField
                                name="selectedGroup"
                                label="Question group (choose one or all topic/dimension(s))"
                                values={[allFieldData, ...groupData]}
                            />
                            <div className="flex space-x-2">
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Practice
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { statusFieldData } from '../../../../core/common/dataField';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import useTimeout from '../../../../core/common/hooks/useTimeout';
import { FileField, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { UserRole } from '../../../../core/models/role';
import { SubjectCategory } from '../../../../core/models/subject';
import { User } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { useStoreUser } from '../../../../core/store';
import { checkFileType } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { RedStar } from '../../../store';
import { useAdminGetUserList } from '../../../users';
import { useGetSubject } from '../../common/hooks/useGetSubject';
import { useGetSubjectCategory } from '../../common/hooks/useGetSubjectCategory';
import { adminUpdateSubject, expertUpdateSubject } from './action';
import { EditSubjectDTO } from './interface';

interface EditSubjectProps {
    id: string;
}

const mapFields = [
    { label: 'Name', name: 'name' },
    { label: 'Tag Line', name: 'tagLine' },
];

const defaultValues: EditSubjectDTO = {
    description: '',
    image: null,
    name: '',
    tagLine: '',
    assignTo: '',
    category: '',
    isActive: true,
    isFeature: true,
};

export const EditSubject: React.FunctionComponent<EditSubjectProps> = ({ id }) => {
    const userState = useStoreUser();

    const [previewUrl, setPreviewUrl] = React.useState<string>('');
    const [file, setFile] = React.useState<File | null>(null);
    const { subject, imageUrl, setImageUrl } = useGetSubject(id);
    const router = useRouter();

    const methods = useForm<EditSubjectDTO>({ defaultValues });

    const options = React.useMemo(() => ({ role: UserRole.EXPERT }), []);

    const { categories } = useGetSubjectCategory();
    const { userList: expertList } = useAdminGetUserList(options);

    React.useEffect(() => {
        if (subject) {
            // if user go in there are not admin or the owner of the slider, push them to sliderList page
            methods.setValue('name', subject.name);
            methods.setValue('tagLine', subject.tagLine);
            methods.setValue('description', subject.description);

            setPreviewUrl(imageUrl);
        }
    }, [methods, subject, router, categories]);

    useTimeout(() => {
        if (subject) {
            methods.setValue('category', subject.category.id);
            methods.setValue('assignTo', subject.assignTo.user.id);
            methods.setValue('isFeature', subject.isFeature);
            methods.setValue('isActive', subject.isActive);
        }
    }, 1000);

    const _onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            checkFileType(file, () => {
                setFile(file);
            });
        }
    };

    const _handleOnSubmit = async (data: EditSubjectDTO) => {
        if (file) data.image = file;
        else data.image = new File([], '');

        const { assignTo, isActive, ...expertUpdateField } = data;
        //
        let res1, res2;
        if (userState.role.description === UserRole.ADMIN) res1 = await adminUpdateSubject(id, { assignTo, isActive });

        res2 = await expertUpdateSubject(id, expertUpdateField);

        if (res1 && res2) {
            toast.success('Update success!');
        }
    };
    const _renderField = () => {
        if (userState.role.description === UserRole.ADMIN) {
            return (
                <>
                    <SelectField
                        label="Owner"
                        direction="row"
                        values={[{ label: 'Unset', value: '' }, ...dataParser<User>(expertList, 'fullName', 'id')]}
                        name="assignTo"
                    />

                    <SelectField label="Feature" direction="row" values={[unsetFieldData, ...statusFieldData]} name="isFeature" />

                    <SelectField label="Active" direction="row" values={[unsetFieldData, ...statusFieldData]} name="isActive" />
                </>
            );
        }
    };
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200 " onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Subject</h3>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be edit old subject</p>
                            </div>
                            <div className="flex flex-col items-end mt-4 space-y-2 sm:mt-0 sm:ml-16">
                                <div className="space-x-2">
                                    <Link href={routes.adminSubjectListUrl} passHref>
                                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto">
                                            Back to subject list
                                        </p>
                                    </Link>
                                    <Link href={router.asPath.replace('/edit', '') + routes.adminLessonListUrl} passHref>
                                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                            Lessons
                                        </p>
                                    </Link>
                                </div>
                                <div className="space-x-2">
                                    <Link href={router.asPath.replace('/edit', '') + routes.adminDimensionListUrl} passHref>
                                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                            Dimension
                                        </p>
                                    </Link>
                                    <Link href={router.asPath.replace('/edit', '') + routes.adminPackageListUrl} passHref>
                                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                            Price package
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-3xl mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            {mapFields.map((item) => (
                                <TextField key={item.name} label={item.label} name={item.name} type="text" direction="row" />
                            ))}

                            <SelectField
                                label="Category"
                                values={[...dataParser<SubjectCategory>(categories, 'description', 'id')]}
                                name="category"
                                direction="row"
                            />
                            {_renderField()}

                            <TextareaField label="Description" name="description" direction="row" />

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Thumbnail <RedStar />
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <FileField
                                        file={file}
                                        label=""
                                        name="image"
                                        previewUrl={previewUrl}
                                        setFile={setFile}
                                        setPreviewUrl={setPreviewUrl}
                                        onChange={(e) => _onChangeImage(e)}
                                    />
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex justify-end">
                                    <Link href={routes.adminSubjectListUrl} passHref>
                                        <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Cancel
                                        </p>
                                    </Link>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};

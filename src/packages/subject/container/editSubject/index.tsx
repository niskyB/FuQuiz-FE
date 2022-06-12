import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { statusFieldData } from '../../../../core/common/dataField';
import { FileField, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { UserRole } from '../../../../core/models/role';
import { SubjectCategory } from '../../../../core/models/subject';
import { User } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { useStoreUser } from '../../../../core/store';
import { checkFileType } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { useGetSubject } from '../../../slider/common/hooks/useGetSubject';
import { useAdminGetUserList } from '../../../users';
import { useGetSubjectCategory } from '../../common/hooks/useGetSubjectCategory';
import { adminUpdateSubject, expertUpdateSubject } from './action';
import { EditSubjectDTO } from './interface';

interface EditSubjectProps {
    id: string;
}

const mapFields = [
    { label: 'Title', name: 'name' },
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
            methods.setValue('assignTo', subject.assignTo.user.id);
            methods.setValue('category', subject.category.id);
            methods.setValue('isFeature', subject.isFeature);
            methods.setValue('isActive', subject.isActive);

            setPreviewUrl(imageUrl);
        }
    }, [methods, subject, router, categories]);

    React.useEffect(() => {
        if (file) setImageUrl(URL.createObjectURL(file));
        return () => {
            URL.revokeObjectURL(imageUrl);
        };
    }, [file]);

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
        if (userState.role.name === UserRole.ADMIN) res1 = await adminUpdateSubject(id, { assignTo, isActive });

        res2 = await expertUpdateSubject(id, expertUpdateField);

        if (res1 && res2) {
            toast.success('Update success!');
        }
    };
    const _renderField = () => {
        if (userState.role.name === UserRole.ADMIN) {
            return (
                <>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="assignTo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Owner
                        </label>
                        <SelectField label="" values={[...dataParser<User>(expertList, 'fullName', 'id')]} name="assignTo" />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="assignTo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Feature
                        </label>
                        <SelectField label="" values={statusFieldData} name="isFeature" />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="isActive" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Active
                        </label>
                        <SelectField label="" values={statusFieldData} name="isActive" />
                    </div>
                </>
            );
        }
    };
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Subject</h3>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be edit old subject</p>
                            </div>
                            <div className="space-x-2">
                                <Link href={routes.adminSubjectListUrl + `/${id}` + routes.adminDimensionListUrl} passHref>
                                    <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                        Dimension
                                    </p>
                                </Link>
                                <Link href={routes.adminSubjectListUrl + `/${id}` + routes.adminPackageListUrl} passHref>
                                    <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                        Package
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            {mapFields.map((item) => (
                                <div
                                    key={item.name}
                                    className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                                >
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        {item.label}
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name={item.name} type="text" />
                                    </div>
                                </div>
                            ))}
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Category
                                </label>
                                <SelectField label="" values={[...dataParser<SubjectCategory>(categories, 'name', 'id')]} name="category" />
                            </div>
                            {_renderField()}
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Description
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea
                                        {...methods.register('description')}
                                        rows={7}
                                        id="description"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Thumbnail
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
                        </div>
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
            </form>
        </FormWrapper>
    );
};

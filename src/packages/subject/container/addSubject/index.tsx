import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FileField, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { UserRole } from '../../../../core/models/role';
import { SubjectCategory } from '../../../../core/models/subject';
import { User } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { dataParser } from '../../../../core/util/data';
import { useAdminGetUserList } from '../../../users';
import { useGetSubjectCategory } from '../../';
import { AddSubjectFormDTO } from './interface';
import { addSubject } from './action';
import { toast } from 'react-toastify';
import { statusFieldData } from '../../../../core/common/dataField';
import { store } from '../../../../core/store';
import { apiActions } from '../../../../core/store/api';
import { RedStar } from '../../../store';
import { unsetFieldData } from '../../../../core/common/dataField/unset';

interface AddSubjectProps {}

const defaultValues: AddSubjectFormDTO = {
    assignTo: '',
    category: '',
    description: '',
    image: null,
    name: '',
    tagLine: '',
    isFeature: true,
    isActive: '',
};

export const AddSubject: React.FunctionComponent<AddSubjectProps> = () => {
    const [file, setFile] = React.useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string>('');

    const options = React.useMemo(() => ({ role: UserRole.EXPERT }), []);

    const { categories } = useGetSubjectCategory();
    const { userList: expertList } = useAdminGetUserList(options);

    const methods = useForm<AddSubjectFormDTO>({
        defaultValues,
    });

    const _handleOnSubmit = async (data: AddSubjectFormDTO) => {
        if (file) data.image = file;
        addSubject(data).then((res) => {
            if (res) {
                setPreviewUrl('');
                setFile(null);
                methods.reset();
                store.dispatch(apiActions.resetState());
                toast.success('Add subject success!');
            }
        });
    };

    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Adding Subject</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new subject</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                            <TextField label="Name" direction="row" name="name" type="text" />

                            <TextField label="Tag line" direction="row" name="tagLine" type="text" />

                            <SelectField
                                label="Category"
                                direction="row"
                                values={[{ label: 'Unset', value: '' }, ...dataParser<SubjectCategory>(categories, 'description', 'id')]}
                                name="category"
                            />

                            <SelectField
                                label="Owner"
                                direction="row"
                                values={[{ label: 'Unset', value: '' }, ...dataParser<User>(expertList, 'fullName', 'id')]}
                                name="assignTo"
                            />

                            <SelectField
                                label="Active"
                                direction="row"
                                values={[{ label: 'Unset', value: '' }, ...statusFieldData]}
                                name="isActive"
                            />

                            <SelectField label="Feature" direction="row" values={[unsetFieldData, ...statusFieldData]} name="isFeature" />

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
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};

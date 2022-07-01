import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField, SelectField } from '../../../../core/components/form';
import { Gender, User } from '../../../../core/models/user';
import { useStoreUser } from '../../../../core/store';
import { updateUser } from './action';
import Link from 'next/link';
import { routes } from '../../../../core/routes';
import { toast } from 'react-toastify';
import { UpdateUserDto } from './interface';
import { checkFileType } from '../../../../core/util/file';
import { genderFieldData } from '../../../../core/common/dataField';

interface UpdateUserProps {}

export interface UpdateUserFieldDto extends Pick<User, 'fullName' | 'gender' | 'mobile' | 'email'> {}

const defaultValues: UpdateUserFieldDto = {
    fullName: '',
    gender: Gender.MALE,
    mobile: '',
    email: '',
};
const PROFILE_FIELD = [
    { label: 'Email address', name: 'email', readonly: true },
    { label: 'Full name', name: 'fullName', readonly: false },
    { label: 'Phone number', name: 'mobile', readonly: false },
];

export const UpdateUser: React.FC<UpdateUserProps> = () => {
    const [previewAvatarUrl, setPreviewAvatarUrl] = React.useState<string>('');
    const [avatarFile, setAvatarFile] = React.useState<File | null>(null);

    const methods = useForm<UpdateUserDto>({
        defaultValues,
    });

    const userState = useStoreUser();

    const _handleOnSubmit = async (data: UpdateUserDto) => {
        if (avatarFile) data.image = avatarFile;
        const res = await updateUser(data);

        if (res.status === 200) {
            window.location.reload();
        }
    };

    React.useEffect(() => {
        if (avatarFile) setPreviewAvatarUrl(URL.createObjectURL(avatarFile));
        return () => {
            URL.revokeObjectURL(previewAvatarUrl);
        };
    }, [avatarFile]);

    const _onChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            checkFileType(file, () => {
                setAvatarFile(file);
            });
        }
    };

    React.useEffect(() => {
        if (userState.id) {
            methods.setValue('fullName', userState.fullName);
            methods.setValue('gender', userState.gender);
            methods.setValue('mobile', userState.mobile);
            methods.setValue('email', userState.email);
            setPreviewAvatarUrl(userState.imageUrl);
        }
    }, [userState, methods]);

    return (
        <FormWrapper methods={methods}>
            <form className="flex flex-col mt-10 space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 space-y-5">
                        <div className="px-4 py-5 overflow-hidden bg-white shadow sm:px-6 sm:rounded-lg">
                            <div className="py-5 ">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and application.</p>
                            </div>
                            <div className="py-5 border-t border-gray-200 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    {PROFILE_FIELD.map((item) => (
                                        <div key={item.name} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
                                            <dt className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                                <p>{item.label}</p>
                                                <p className="inline-flex text-red-500" id="require">
                                                    *
                                                </p>
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <TextField label="" name={item.name} type="text" readOnly={item.readonly} isRequire={false} />
                                            </dd>
                                        </div>
                                    ))}

                                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                        <dt className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <p>Gender</p>
                                            <p className="inline-flex text-red-500" id="require">
                                                *
                                            </p>
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <SelectField
                                                label=""
                                                name="gender"
                                                values={genderFieldData}
                                                defaultValue={userState.gender}
                                                isRequire={false}
                                            />
                                        </dd>
                                    </div>
                                    <FormErrorMessage />
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between px-5 pt-5 space-y-4 cursor-pointer w-96">
                        <div className="relative">
                            <input type="file" id="image" hidden {...methods.register('image')} onChange={(e) => _onChangeAvatar(e)} />
                            <label
                                htmlFor="image"
                                className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-gray-200 rounded-full opacity-0 cursor-pointer hover:bg-gray-900/50 hover:opacity-100"
                            >
                                Choose image
                            </label>
                            <img
                                className="rounded-full w-72 h-72"
                                src={previewAvatarUrl || 'https://tophinhanhdep.com/wp-content/uploads/2021/10/HD-Landscape-Wallpapers.jpg'}
                            />
                        </div>
                        <div className="flex flex-col justify-between w-full space-y-2">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-10 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                            <Link href={routes.changePasswordUrl} passHref>
                                <p className="inline-flex items-center justify-center px-10 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Change Password
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};

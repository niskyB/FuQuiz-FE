import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { config } from '../../../../core/config';
import { Gender, User } from '../../../../core/models/user';
import { useStoreUser } from '../../../../core/store';
import { updateUser, UpdateUserDto } from './action';

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
    { label: 'Gender', name: 'gender', readonly: false },
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
            setAvatarFile(file);
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
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and application.</p>
                            </div>
                            <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    {PROFILE_FIELD.map((item) => (
                                        <div key={item.name} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="flex items-center text-sm font-medium text-gray-500">{item.label}</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <TextField label="" name={item.name} type="text" readOnly={item.readonly} />
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <FormErrorMessage />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between px-5 pt-5 space-y-4 cursor-pointer w-96">
                        <div className="relative">
                            <input type="file" id="image" hidden {...methods.register('image')} onChange={_onChangeAvatar} />
                            <label
                                htmlFor="image"
                                className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-gray-200 rounded-full opacity-0 cursor-pointer hover:bg-gray-900/50 hover:opacity-100"
                            >
                                Choose image
                            </label>
                            <img
                                className="rounded-full w-72 h-72"
                                src={
                                    previewAvatarUrl
                                        ? `${config.SERVER_URL}/${previewAvatarUrl}`
                                        : 'https://tophinhanhdep.com/wp-content/uploads/2021/10/HD-Landscape-Wallpapers.jpg'
                                }
                            />
                        </div>
                        <div className="flex flex-col justify-between w-full space-y-2">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-10 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-10 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-end space-x-5">
                    <button
                        type="submit"
                        className="inline-flex items-center px-10 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="inline-flex items-center px-10 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div> */}
            </form>
        </FormWrapper>
    );
};

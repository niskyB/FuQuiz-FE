import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { UserRole } from '../../../../core/models/role';
import { Slider } from '../../../../core/models/slider';
import { routes } from '../../../../core/routes';
import { useStoreUser } from '../../../../core/store';
import { getSliderById, updateSlider } from './action';
import { UpdateSliderDTO, UpdateSliderInput } from './interface';

interface EditSliderProps {
    id: string;
}

const defaultValues: UpdateSliderInput = {
    backLink: '',
    title: '',
    isShow: false,
};

const mapFields = [
    { label: 'Title', name: 'title' },
    { label: 'Back link', name: 'backLink' },
];

const SHOWING_FIELDS = [
    {
        label: 'Showing',
        value: true,
    },
    {
        label: 'Not showing',
        value: false,
    },
];

export const EditSlider: React.FunctionComponent<EditSliderProps> = ({ id }) => {
    const userState = useStoreUser();
    const [slider, setSlider] = React.useState<Slider>();
    const [imageFile, setImageFile] = React.useState<File | null>();
    const [imageUrl, setImageUrl] = React.useState<string>('');

    const methods = useForm<UpdateSliderDTO>({ defaultValues });
    const router = useRouter();

    const _handleOnSubmit = async (data: UpdateSliderDTO) => {
        if (imageFile) data.image = imageFile;
        else data.image = new File([], '');

        try {
            const res = await updateSlider(id, data);

            if (res) {
                toast.success('Update slider success');
                router.push(routes.sliderUrl);
            }
        } catch {
            toast.error('Update slider failed');
        }
    };

    const getSlider = async () => {
        const slider = await getSliderById(id);
        setImageUrl(slider.imageUrl);
        setSlider(slider);
    };

    React.useEffect(() => {
        if (slider) {
            if (userState.role.name != UserRole.ADMIN && slider.marketing.id && slider.marketing.id !== userState.typeId) {
                router.push(routes.sliderUrl);
                return;
            }

            methods.setValue('title', slider.title);
            methods.setValue('backLink', slider.backLink);
            methods.setValue('isShow', slider.isShow);
            setImageUrl(slider.imageUrl);
        }
    }, [methods, slider, router, userState]);

    // React.useEffect(() => {
    //     console.log('Url:' + imageUrl);
    // }, [imageUrl]);

    React.useEffect(() => {
        getSlider();
    }, []);

    React.useEffect(() => {
        if (imageFile) setImageUrl(URL.createObjectURL(imageFile));
        return () => {
            URL.revokeObjectURL(imageUrl);
        };
    }, [imageFile]);

    const _onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') setImageFile(file);
            else toast.warning('Invalid file, file type should be png/jpg/jpeg');
        }
    };
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Editing Slider</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be edit old slider</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            {mapFields.map((item) => (
                                <div
                                    key={item.name}
                                    className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                                >
                                    <label htmlFor={item.name} className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        {item.label}
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name={item.name} type="text" />
                                    </div>
                                </div>
                            ))}
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Showing
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <SelectField label="" values={SHOWING_FIELDS} name="isShow" defaultValue={slider?.isShow} />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Cover photo
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input id="image" name="image" type="file" className="sr-only" onChange={_onChangeImage} />
                                    {Boolean(!imageUrl || !imageUrl.length) ? (
                                        <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg
                                                    className="w-12 h-12 mx-auto text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="image"
                                                        className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <p>Upload a file</p>
                                                    </label>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG up to 10MB</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full max-w-2xl h-96 max-h-96">
                                            <div className="relative">
                                                <img src={imageUrl} alt="" className="max-w-full max-h-full" />
                                                <label
                                                    htmlFor="image"
                                                    className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg opacity-0 cursor-pointer bg-gray-900/50 text-gray-50 hover:opacity-100"
                                                >
                                                    Click to change image
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={routes.sliderUrl} passHref>
                            <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </p>
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};

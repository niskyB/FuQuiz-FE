import { XIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useStoreApi } from '../../store';
import { checkFileType } from '../../util/file';

interface FileFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    previewUrl: string;
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    confirmMessage?: string;
    file: File | null;
}
// 'Do you really want to remove this thumbnail?';
export const FileField: React.FC<FileFieldProps> = ({
    name,
    label,
    previewUrl,
    setPreviewUrl,
    setFile,
    confirmMessage = 'do you really want to remove this image?',
    file,
    ...rest
}) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();
    const _onRemovePreview = () => {
        if (confirm(confirmMessage)) {
            setPreviewUrl('');
            setFile(null);
        }
    };

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            checkFileType(file, () => {
                setFile(file);
            });
        }
    };
    React.useEffect(() => {
        if (file) setPreviewUrl(URL.createObjectURL(file));
        return () => {};
    }, [file]);

    React.useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            {previewUrl ? (
                <div onClick={_onRemovePreview} className="relative cursor-pointer w-80">
                    <img src={previewUrl} className="w-full" />
                    <div className="absolute p-1 text-white bg-red-500 rounded-full -top-3 -right-3 w-7 h-7">
                        <XIcon />
                    </div>
                </div>
            ) : (
                <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg className="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="sr-only"
                                    {...register(name)}
                                    onChange={(e) => _onChange(e)}
                                    {...rest}
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            )}
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </>
    );
};

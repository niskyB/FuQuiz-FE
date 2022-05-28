import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useStoreApi } from '../../store';

interface TextareaFieldProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ name, label, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div className="flex flex-col w-full space-y-1">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                {label}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                    {...register(name)}
                    {...rest}
                    rows={6}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
            </div>
        </div>
    );
};

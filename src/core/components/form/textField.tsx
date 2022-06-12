import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { RedStar } from '../../../packages/store';
import { useStoreApi } from '../../store';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    require?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, require = true, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div className="w-full">
            {label ? (
                <div className="flex justify-start space-x-2">
                    <label htmlFor={name} className="block text-sm font-medium text-gray-700 capitalize">
                        {label}
                    </label>
                    {require ? <RedStar /> : ''}
                </div>
            ) : (
                ''
            )}

            <div className="mt-1">
                <input
                    {...register(name)}
                    {...rest}
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
            </div>
        </div>
    );
};

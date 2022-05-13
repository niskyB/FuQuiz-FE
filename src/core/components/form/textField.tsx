import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, ...rest }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 capitalize">
                {label}
            </label>
            <div className="mt-1">
                <input
                    {...register(name)}
                    {...rest}
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {Boolean(errors[name]?.message) && (
                    <div className="text-red-500">
                        {label} {errors[name]?.message}
                    </div>
                )}
            </div>
        </div>
    );
};

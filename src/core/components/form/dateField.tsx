import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useStoreApi } from '../../store';
interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const DateField: React.FC<DateFieldProps> = ({ name, label, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div className="flex flex-col w-full">
            <label className="block text-sm font-medium text-gray-700 capitalize" htmlFor={name}>
                {label}
            </label>
            <input
                {...register(name)}
                {...rest}
                type="date"
                className="py-2 mt-1 border-gray-300 rounded-md outline-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </div>
    );
};

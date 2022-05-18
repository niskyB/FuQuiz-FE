import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface SelectFieldProps {
    name: string;
    label: string;
    values: Array<{ label: string; value: any }>;
    defaultValue?: any;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, values, defaultValue }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                id={name}
                {...register(name)}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={defaultValue}
            >
                {values.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            {Boolean(errors[name]?.message) && (
                <div>
                    {label} {errors[name]?.message}
                </div>
            )}
        </div>
    );
};

import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useStoreApi } from '../../store';

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    values: Array<{ label: string; value: any }>;
    defaultValue?: any;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, values, defaultValue, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                {...register(name)}
                {...rest}
                id={name}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={defaultValue}
            >
                {values.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </div>
    );
};

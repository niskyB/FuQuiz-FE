import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface RadioFieldProps {
    name: string;
    label: string;
    values: Array<{ label: string; value: any }>;
}

export const RadioField: React.FC<RadioFieldProps> = ({ name, label, values }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 capitalize">
                {label}
            </label>
            <div className="flex mt-1 space-x-5">
                {values.map((item) => (
                    <div className="flex items-center space-x-2" key={item.value}>
                        <input type="radio" id={`${name}.${item.value}`} {...register(name)} value={item.value} />
                        <label htmlFor={`${name}.${item.value}`}>{item.label}</label>
                    </div>
                ))}
            </div>

            {Boolean(errors[name]?.message) && (
                <div className="text-red-500">
                    {label} {errors[name]?.message}
                </div>
            )}
        </div>
    );
};

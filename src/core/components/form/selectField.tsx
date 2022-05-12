import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface SelectFieldProps {
    name: string;
    label: string;
    values: Array<{ label: string; value: any }>;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, values }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select id={name} {...register(name)}>
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

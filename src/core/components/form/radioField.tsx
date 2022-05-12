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
            <span>{label}</span>
            <div>
                {values.map((item) => (
                    <div key={item.value}>
                        <input type="radio" id={`${name}.${item.value}`} {...register(name)} value={item.value} />
                        <label htmlFor={`${name}.${item.value}`}>{item.label}</label>
                    </div>
                ))}
            </div>

            {Boolean(errors[name]?.message) && (
                <div>
                    {label} {errors[name]?.message}
                </div>
            )}
        </div>
    );
};

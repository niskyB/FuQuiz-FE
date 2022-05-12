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
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...register(name)} {...rest} />
            {Boolean(errors[name]?.message) && (
                <div>
                    {label} {errors[name]?.message}
                </div>
            )}
        </div>
    );
};

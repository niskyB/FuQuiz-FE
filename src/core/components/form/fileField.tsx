import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface FileFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const FileField: React.FC<FileFieldProps> = ({ name, label, ...rest }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...register(name)} {...rest} type="file" />
            {Boolean(errors[name]?.message) && (
                <div>
                    {label} {errors[name]?.message}
                </div>
            )}
        </div>
    );
};

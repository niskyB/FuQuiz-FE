import * as React from 'react';
import { useFormContext } from 'react-hook-form';
interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const DateField: React.FC<DateFieldProps> = ({ name, label, ...rest }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...register(name)} {...rest} type="date" />
            {Boolean(errors[name]?.message) && <div>{errors[name]?.message}</div>}
        </div>
    );
};

import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormSuccessMessageProps {}

export const FormSuccessMessage: React.FC<FormSuccessMessageProps> = () => {
    const {
        formState: { errors },
    } = useFormContext();

    return <>{Boolean(errors.message?.message) && <div>{errors.message.message}</div>}</>;
};

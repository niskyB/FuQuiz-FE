import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormErrorMessageProps {}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = () => {
    const {
        formState: { errors },
    } = useFormContext();

    return <>{Boolean(errors.errorMessage?.message) && <div className="text-red-500">{errors.errorMessage.message}</div>}</>;
};

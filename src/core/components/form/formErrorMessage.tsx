import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormErrorMessageProps {}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = () => {
    const {
        formState: { errors },
    } = useFormContext();

    return <>{Boolean(errors.errorMessage?.message) && <div>{errors.errorMessage.message}</div>}</>;
};

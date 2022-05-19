import * as React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormWrapperProps {
    methods: UseFormReturn<any, any>;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ children, methods }) => {
    return <FormProvider {...methods}>{children}</FormProvider>;
};

import * as React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

import { useStoreApi } from '../../store';

interface FormWrapperProps {
    methods: UseFormReturn<any, any>;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ children, methods }) => {
    const apiState = useStoreApi();

    React.useEffect(() => {
        Object.keys(apiState.errorDetails).map((item) => {
            methods.setError(item, { message: apiState.errorDetails[item] });
        });
    }, [apiState, methods]);

    return <FormProvider {...methods}>{children}</FormProvider>;
};

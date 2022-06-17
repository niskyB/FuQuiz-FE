import { useForm } from 'react-hook-form';
import { genderFieldData } from '../../../../core/common/dataField';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { PricePackage } from '../../../../core/models/pricePackage';
import { store, useStoreForm, useStoreUser } from '../../../../core/store';
import { formActions } from '../../../../core/store/form';
import { dataParser } from '../../../../core/util/data';
import * as React from 'react';
import { RegistrationFormDTO } from './interface';
import { RedStar } from '../../components/errorStar';

interface RegistrationFormProps {}

export const RegistrationForm: React.FunctionComponent<RegistrationFormProps> = () => {
    const formState = useStoreForm();
    const userState = useStoreUser();
    const methods = useForm<RegistrationFormDTO>();

    React.useEffect(() => {
        console.log(formState.registrationForm);
        methods.setValue('subject', formState.registrationForm.subjectName);
        methods.setValue('pricePackage', formState.registrationForm.defaultPackage);
        return () => {};
    }, [formState.registrationForm]);

    const _handleOnSubmit = (data: RegistrationFormDTO) => {};
    if (formState.isOpening)
        return (
            <div className="fixed inset-0 z-20 flex items-center justify-center w-screen h-screen">
                <div className="fixed w-screen h-screen cursor-pointer bg-black/80" onClick={() => store.dispatch(formActions.resetState())}></div>
                <div className="z-20 flex flex-col w-full max-w-2xl px-10 py-8 space-y-10 bg-white rounded-lg shadow">
                    <h1 className="text-3xl font-bold text-center">Registration form</h1>
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="w-full space-y-5">
                            <div className="w-full">
                                <div className="flex justify-start space-x-2">
                                    <label className="block text-sm font-medium text-gray-700 capitalize">
                                        Course name <RedStar />
                                    </label>
                                </div>

                                <div className="py-2 mt-1 text-sm ">{formState.registrationForm.subjectName}</div>
                            </div>
                            <SelectField
                                name="Package"
                                label="Price Package"
                                values={dataParser<PricePackage>(formState.registrationForm.pricePackage, 'name', 'id')}
                            />
                            {!userState.id && (
                                <>
                                    <TextField label="Full name" name="fullName" type="text" />
                                    <TextField label="Email" name="Email" type="email" />
                                    <TextField label="Phone number" name="mobile" type="text" />
                                    <SelectField name="gender" label="Gender" values={genderFieldData} />
                                </>
                            )}
                            <div className="flex items-center space-x-5">
                                <button
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    onClick={() => store.dispatch(formActions.resetState())}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Register Subject
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        );
    return <></>;
};

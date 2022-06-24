import moment from 'moment';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { genderFieldData, statusFieldData } from '../../../../core/common/dataField';
import { registrationDataField } from '../../../../core/common/dataField/registrationStatus';
import { DateField, FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { PricePackage } from '../../../../core/models/pricePackage';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { dataParser } from '../../../../core/util/data';
import { dateParser } from '../../../../core/util/date';
import { useGetPricePackageListBySubjectId } from '../../../package';
import { useGetRegistrationById } from '../../common/hooks/useGetRegistrationById';
import { editRegistration } from './action';
import { EditRegistrationDTO, EditRegistrationFormDTO } from './interface';

interface EditRegistrationProps {
    id: string;
}

const EditRegistration: React.FunctionComponent<EditRegistrationProps> = ({ id }) => {
    const methods = useForm<EditRegistrationDTO>({});
    const router = useRouter();

    const { registration } = useGetRegistrationById(id);
    const { pricePackageList } = useGetPricePackageListBySubjectId(registration?.pricePackage.subject?.id || '');

    React.useEffect(() => {
        if (registration) {
            methods.setValue('fullName', registration.customer.user.fullName);
            methods.setValue('email', registration.customer.user.email);
            methods.setValue('mobile', registration.customer.user.mobile);
            methods.setValue('gender', registration.customer.user.gender);
            methods.setValue('status', registration.status);
            methods.setValue('note', registration.notes);
            methods.setValue('pricePackage', registration.pricePackage.id);
            methods.setValue('subject', registration.pricePackage.subject?.id || '');

            methods.setValue('registrationTime', dateParser(registration.registrationTime));
            methods.setValue('validFrom', dateParser(registration.validFrom));
            methods.setValue('validTo', dateParser(registration.validTo));
        }
    }, [registration]);

    const _handleOnSubmit = async (data: EditRegistrationDTO) => {
        const { subject, ...other } = data;
        const res = await editRegistration(id, other);
        if (res) {
            router.push(routes.adminRegistrationUrl);
            toast.success('Update success!');
        }
    };

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Edit Registration</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <SelectField
                                label="Subject"
                                name="subject"
                                values={[{ label: registration?.pricePackage.subject?.name, value: registration?.pricePackage.subject?.id }]}
                            />
                            <SelectField
                                label="Package"
                                name="pricePackage"
                                values={pricePackageList ? dataParser<PricePackage>(pricePackageList, 'name', 'id') : []}
                            />
                            <TextField label="Full name" name="fullName" type="fullName" />
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="phone number" name="mobile" type="text" />

                            <RadioField label="sex" name="gender" values={genderFieldData} />

                            <DateField label="Registration Time" name="registrationTime" />

                            <SelectField label="Status" name="status" values={registrationDataField} />
                            <DateField label="Valid From" name="validFrom" />
                            <DateField label="Valid To" name="validTo" />
                            <TextareaField name="note" label="Note" />

                            <FormErrorMessage />
                            <div className="flex space-x-2">
                                <Link href={routes.adminRegistrationUrl} passHref>
                                    <div className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default EditRegistration;

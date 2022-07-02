import moment from 'moment';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { genderFieldData } from '../../../../core/common/dataField';
import { registrationDataField } from '../../../../core/common/dataField/registrationStatus';
import { DateField, FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { PricePackage } from '../../../../core/models/pricePackage';
import { RegistrationStatus } from '../../../../core/models/registration';
import { UserRole } from '../../../../core/models/role';
import { routes } from '../../../../core/routes';
import { useStoreUser } from '../../../../core/store';
import { dataParser } from '../../../../core/util/data';
import { calculateValidTo, dateParser, getDateValueString } from '../../../../core/util/date';
import { useGetPricePackageListBySubjectId } from '../../../package';
import { useGetRegistrationById } from '../../common/hooks/useGetRegistrationById';
import { editGeneralRegistration, editRegistration, editSpecificRegistration } from './action';
import { EditRegistrationDTO } from './interface';

interface EditRegistrationProps {
    id: string;
}

const EditRegistration: React.FunctionComponent<EditRegistrationProps> = ({ id }) => {
    const methods = useForm<EditRegistrationDTO>({});
    const userState = useStoreUser();
    const router = useRouter();

    const { registration } = useGetRegistrationById(id);
    const { pricePackageList } = useGetPricePackageListBySubjectId(registration?.pricePackage.subject?.id || '');

    const isOwner = React.useMemo<boolean>(() => {
        if (userState.role.description === UserRole.ADMIN) {
            return false;
        }

        if (registration && registration.sale?.user.id === userState.id) {
            return true;
        }
        return false;
    }, [registration]);

    React.useEffect(() => {
        if (registration) {
            methods.setValue('fullName', registration.customer.user.fullName);
            methods.setValue('email', registration.customer.user.email);
            methods.setValue('mobile', registration.customer.user.mobile);
            methods.setValue('gender', registration.customer.user.gender);
            methods.setValue('status', registration.status);
            methods.setValue('notes', registration.notes);
            methods.setValue('pricePackage', registration.pricePackage.id);
            methods.setValue('subject', registration.pricePackage.subject?.id || '');

            methods.setValue('registrationTime', dateParser(registration.registrationTime));
            // methods.setValue('validFrom', dateParser(registration.validFrom));
            // methods.setValue('validTo', dateParser(registration.validTo));
        }
    }, [registration]);

    const _handleOnSubmit = async (data: EditRegistrationDTO) => {
        try {
            if (isOwner && registration?.status !== RegistrationStatus.PAID) {
                await editSpecificRegistration(id, {
                    email: data.email,
                    fullName: data.fullName,
                    gender: data.gender,
                    mobile: data.mobile,
                    pricePackage: data.pricePackage,
                    registrationTime: data.registrationTime,
                });
            }
            await editGeneralRegistration(id, {
                notes: data.notes,
                status: data.status,
                // validFrom: getDateValueString(data.validFrom),
                // validTo: getDateValueString(data.validTo),
            });

            router.push(routes.adminRegistrationUrl);
            toast.success('Update success!');
        } catch (error) {
            toast.warn('Something went wrong, please try again later!!');
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
                                disabled={
                                    !isOwner ||
                                    registration?.status === RegistrationStatus.PAID ||
                                    registration?.status === RegistrationStatus.INACTIVE
                                }
                                label="Subject"
                                name="subject"
                                values={[{ label: registration?.pricePackage.subject?.name, value: registration?.pricePackage.subject?.id }]}
                            />
                            <SelectField
                                disabled={
                                    !isOwner ||
                                    registration?.status === RegistrationStatus.PAID ||
                                    registration?.status === RegistrationStatus.INACTIVE
                                }
                                label="Package"
                                name="pricePackage"
                                values={pricePackageList ? dataParser<PricePackage>(pricePackageList, 'name', 'id') : []}
                            />
                            <TextField
                                disabled={
                                    !isOwner ||
                                    registration?.status === RegistrationStatus.PAID ||
                                    registration?.status === RegistrationStatus.INACTIVE
                                }
                                label="Full name"
                                name="fullName"
                                type="fullName"
                            />
                            <TextField
                                disabled={
                                    !isOwner ||
                                    registration?.status === RegistrationStatus.PAID ||
                                    registration?.status === RegistrationStatus.INACTIVE
                                }
                                label="Email address"
                                name="email"
                                type="email"
                            />
                            <TextField
                                disabled={
                                    !isOwner ||
                                    registration?.status === RegistrationStatus.PAID ||
                                    registration?.status === RegistrationStatus.INACTIVE
                                }
                                label="phone number"
                                name="mobile"
                                type="text"
                            />

                            <RadioField
                                disabled={
                                    !isOwner ||
                                    registration?.status === RegistrationStatus.PAID ||
                                    registration?.status === RegistrationStatus.INACTIVE
                                }
                                label="sex"
                                name="gender"
                                values={genderFieldData}
                            />

                            <DateField
                                disabled={
                                    !isOwner ||
                                    registration?.status === RegistrationStatus.PAID ||
                                    registration?.status === RegistrationStatus.INACTIVE
                                }
                                label="Registration Time"
                                name="registrationTime"
                            />

                            <SelectField
                                disabled={registration?.status === RegistrationStatus.PAID || registration?.status === RegistrationStatus.INACTIVE}
                                label="Status"
                                name="status"
                                values={registrationDataField.filter((item) => item.value !== RegistrationStatus.PAID)}
                            />
                            {/* <DateField
                                disabled={registration?.status === RegistrationStatus.PAID || registration?.status === RegistrationStatus.INACTIVE}
                                onChange={(e) => {
                                    methods.setValue(
                                        'validTo',
                                        dateParser(
                                            calculateValidTo(new Date(e.target.value).toISOString(), registration?.pricePackage?.duration || 0)
                                        )
                                    );
                                }}
                                label="Valid From"
                                name="validFrom"
                            />
                            <DateField readOnly label="Valid To" name="validTo" /> */}
                            <TextareaField name="notes" label="Note" />

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

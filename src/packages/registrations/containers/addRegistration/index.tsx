import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { PricePackage } from '../../../../core/models/pricePackage';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { dataParser } from '../../../../core/util/data';
import { useGetPricePackageListBySubjectId } from '../../../package/common/hooks/useGetPricePackageListBySubjectId';
import { useGetSubjectList } from '../../../subject';
import { SubjectFilterDTO } from '../../../subject/container/subjectList/interface';

interface AddRegistrationProps {}

const AddRegistration: React.FunctionComponent<AddRegistrationProps> = () => {
    const methods = useForm({});
    const [selectedSubject, setSelectedSubject] = React.useState<string | null>(null);
    const options = React.useMemo<Partial<SubjectFilterDTO>>(() => ({ pageSize: 99, currentPage: 0 }), []);
    const { subjects } = useGetSubjectList(options);
    const { pricePackageList } = useGetPricePackageListBySubjectId(selectedSubject || '');
    const _handleOnSubmit = async () => {};

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Add Registration</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <SelectField
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                label="Subject"
                                name="subject"
                                values={[unsetFieldData, ...dataParser(subjects, 'name', 'id')]}
                            />
                            <SelectField
                                disabled={!selectedSubject && true}
                                label="Package"
                                name="package"
                                values={[unsetFieldData, ...((pricePackageList && dataParser<PricePackage>(pricePackageList, 'name', 'id')) || [])]}
                            />
                            <TextField label="Full name" name="fullName" type="fullName" />
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="phone number" name="mobile" type="text" />

                            <RadioField
                                label="sex"
                                name="gender"
                                values={[
                                    { label: 'Male', value: Gender.MALE },
                                    { label: 'Female', value: Gender.FEMALE },
                                ]}
                            />

                            <TextField label="Registration Time" name="registrationTime" type="date" defaultValue={'12/5/2022'} />
                            <TextField label="Sale" name="sale" type="number" />
                            <SelectField
                                label="Status"
                                name="status"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                            />
                            <TextField label="Valid From" name="validFrom" type="date" defaultValue={'12/5/2022'} />
                            <TextField label="Valid To" name="validTo" type="date" defaultValue={'12/5/2022'} />

                            <TextareaField name="Note" label="Note" />

                            <FormErrorMessage />
                            <div className="flex space-x-2">
                                <Link href={routes.adminRegistrationUrl}>
                                    <div className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default AddRegistration;

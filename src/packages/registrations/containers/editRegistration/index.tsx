import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { Registration } from '../../../../core/models/registration';
import { UserRole } from '../../../../core/models/role';
import { Gender, User } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';

interface EditRegistrationProps {}

const EditRegistration: React.FunctionComponent<EditRegistrationProps> = () => {
    const methods = useForm({});
    const [registration, setRegistration] = React.useState<Registration>({
        id: '1asdasd-asdzv-azsde4',
        email: 'hoanglocst900@gmail.com',
        registrationTime: '23/5/2022',
        subject: {
            id: 'asdasd-123as-123aasd',
            title: 'Subject 1',
            tagLine: 'Tag Line',
            description: 'Description 1',
            subjectCategory: {
                id: 'asdasd-asda1-123',
                name: 'Category 1',
            },
            thumbnailUrl: '',
            createAt: '14/5/2022',
            updateAt: '14/5/2022',
            assignTo: {
                id: 'asdasd-aczxzx-zcbv',
                typeId: '123',
                fullName: 'Nguyen Hoang Loc',
                password: '',
                email: 'locnhse1500572fpt.edu.vn',
                gender: Gender.MALE,
                mobile: '08312311223',
                token: '',
                isActive: true,
                createAt: '11/5/2022',
                updateAt: '11/5/2022',
                role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                imageUrl: '',
            },
        },
        package: {
            id: '123-123-123',
            originalPrice: 600000,
            lesson: {
                id: '123-432-323',
                name: 'Lesson 1',
                createAt: '13/5/2022',
                lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                updateAt: '13/5/2022',
                isActive: true,
            },
            name: 'Package 1',
            duration: 3,
            isActive: true,
            updateAt: '13/5/2022',
            createAt: '13/5/2022',
            salePrice: 500000,
        },
        totalCost: 500000,
        status: true,
        validForm: '23/5/2022',
        validTo: '23/8/2022',
    });

    React.useEffect(() => {
        methods.setValue('subject', '1');
        methods.setValue('package', '2');
        methods.setValue('mobile', '0912312321');
        methods.setValue('email', 'hoanglocst900@gmail.com');
        methods.setValue('fullName', 'Trinh Van Quyet');
        methods.setValue('gender', 'male');
    }, []);

    const _handleOnSubmit = async () => {};

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
                                values={[
                                    { label: 'Javascript', value: '1' },
                                    { label: 'Java', value: '' },
                                    { label: 'C#', value: '' },
                                    { label: 'Marketing', value: '' },
                                ]}
                            />
                            <SelectField
                                label="Package"
                                name="package"
                                values={[
                                    { label: 'Package 1 - 500,000 - 350,000', value: '' },
                                    { label: 'Package 2 - 800,000 - 700,000', value: '2' },
                                    { label: 'Package 3 - 1,000,000 - 900,000', value: '' },
                                    { label: 'Package 4 - 3,000,000 - 2,800,000', value: '' },
                                ]}
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

                            <FormErrorMessage />
                            <div className="flex space-x-2">
                                <Link href={routes.registrationUrl} passHref>
                                    <div className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Edit Registration
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

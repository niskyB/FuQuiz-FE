import Link from 'next/link';
import { routes } from '../../../../core/routes';

interface ResetPasswordSuccessProps {}

export const ResetPasswordSuccess: React.FunctionComponent<ResetPasswordSuccessProps> = () => {
    return (
        <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Reset password</h2>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex flex-col items-center px-4 py-8 space-y-5 bg-white shadow sm:rounded-lg sm:px-10">
                    <p className="text-base text-gray-500 w-fit">Reset Password successfully</p>
                    <Link href={routes.loginUrl} passHref>
                        <p className="px-2 py-1 text-gray-100 bg-indigo-600 rounded w-fit hover:text-gray-50">Return to login</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

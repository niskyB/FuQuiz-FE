interface NotificationProps {
    title: string;
    detail: string;
}

export const Notification: React.FunctionComponent<NotificationProps> = ({ title, detail }) => {
    return (
        <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 capitalize">{title}</h2>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 space-y-5 bg-white shadow sm:rounded-lg sm:px-10">
                    <p className="text-base text-center text-gray-500">{detail}</p>
                </div>
            </div>
        </div>
    );
};

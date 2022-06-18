import { useFormContext } from 'react-hook-form';
import { RedStar } from '../../../packages/store';
import { useStoreApi } from '../../store';

interface CommonFieldWrapperProps {
    label?: string;
    name: string;
    isRequire?: boolean;
}

const CommonFieldWrapper: React.FunctionComponent<CommonFieldWrapperProps> = ({ children, label, name, isRequire }) => {
    const { errorDetails } = useStoreApi();
    return (
        <div className="w-full">
            <div className="flex justify-start space-x-2">
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 capitalize">
                    {label}
                </label>
                {isRequire && <RedStar />}
            </div>

            <div className="mt-1">
                {children}
                {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
            </div>
        </div>
    );
};

export default CommonFieldWrapper;

import { RedStar } from '../../../packages/store';
import { useStoreApi } from '../../store';

interface CommonFieldWrapperProps {
    label?: string;
    name: string;
    isRequire?: boolean;
    direction?: 'row' | 'column';
}

const CommonFieldWrapper: React.FunctionComponent<CommonFieldWrapperProps> = ({ children, label, name, isRequire, direction = 'column' }) => {
    const { errorDetails } = useStoreApi();
    return (
        <div
            className={`w-full ${direction === 'column' && 'flex flex-col'} ${direction === 'row' && 'flex items-start justify-between space-x-20'} `}
        >
            <div className={`flex justify-start  space-x-2 ${direction === 'row' && 'w-1/5'}`}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 capitalize sm:mt-px sm:pt-2">
                    {label}
                </label>
                {isRequire && <RedStar />}
            </div>

            <div className="flex-1 mt-1">
                {children}
                {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
            </div>
        </div>
    );
};

export default CommonFieldWrapper;

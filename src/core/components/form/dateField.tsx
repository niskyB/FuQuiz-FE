import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useStoreApi } from '../../store';
import CommonFieldWrapper from './commonFieldWrapper';
interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    require?: boolean;
    isRequire?: boolean;
    direction?: 'row' | 'column';
}

export const DateField: React.FC<DateFieldProps> = ({ name, label, direction, isRequire = true, require, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <CommonFieldWrapper name={name} label={label} isRequire={isRequire} direction={direction}>
            <input
                {...register(name)}
                {...rest}
                type="date"
                className="w-full py-2 border-gray-300 rounded-md outline-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </CommonFieldWrapper>
    );
};

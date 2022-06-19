import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { RedStar } from '../../../packages/store';
import { SelectionFieldValues } from '../../common/interface';
import { useStoreApi } from '../../store';
import CommonFieldWrapper from './commonFieldWrapper';

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label?: string;
    values: Array<SelectionFieldValues<any>>;
    defaultValue?: any;
    isRequire?: boolean;
    direction?: 'row' | 'column';
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, values, defaultValue, direction, isRequire = true, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <CommonFieldWrapper name={name} label={label} isRequire={isRequire} direction={direction}>
            <select
                {...register(name)}
                {...rest}
                id={name}
                className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {values.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </CommonFieldWrapper>
    );
};

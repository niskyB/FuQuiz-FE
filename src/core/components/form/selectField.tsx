import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { RedStar } from '../../../packages/store';
import { SelectionFieldValues } from '../../common/interface';
import { useStoreApi } from '../../store';

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label?: string;
    values: Array<SelectionFieldValues<any>>;
    defaultValue?: any;
    require?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, values, defaultValue, require = true, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div className="w-full">
            {label ? (
                <div className="flex justify-start space-x-2">
                    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                        {label}
                    </label>

                    {require ? <RedStar /> : ''}
                </div>
            ) : (
                ''
            )}

            <select
                {...register(name)}
                {...rest}
                id={name}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={defaultValue}
            >
                {values.map((item) => (
                    <option key={item.value} value={item.value} selected={item.isSelect ? item.isSelect : false}>
                        {item.label}
                    </option>
                ))}
            </select>
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </div>
    );
};

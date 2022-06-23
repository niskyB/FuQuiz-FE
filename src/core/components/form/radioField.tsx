import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { RedStar } from '../../../packages/store';
import { Gender } from '../../models/user';
import { useStoreApi } from '../../store';

interface RadioFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    values: Array<{ label: string; value: Gender }>;
    require?: boolean;
}

export const RadioField: React.FC<RadioFieldProps> = ({ name, label, values, require = true, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 capitalize">
                {label} {require ? <RedStar /> : ''}
            </label>
            <div className="flex mt-1 space-x-5">
                {values.map((item) => (
                    <div className="flex items-center space-x-2" key={item.value}>
                        <input {...rest} type="radio" id={`${name}.${item.value}`} {...register(name)} value={item.value} />
                        <label htmlFor={`${name}.${item.value}`}>{item.label}</label>
                    </div>
                ))}
            </div>

            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </div>
    );
};

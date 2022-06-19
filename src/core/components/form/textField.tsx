import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import CommonFieldWrapper from './commonFieldWrapper';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    isRequire?: boolean;
    direction?: 'row' | 'column';
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, direction, isRequire = true, ...rest }) => {
    const { register } = useFormContext();

    return (
        <CommonFieldWrapper name={name} label={label} isRequire={isRequire} direction={direction}>
            <input
                {...register(name)}
                {...rest}
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </CommonFieldWrapper>
    );
};

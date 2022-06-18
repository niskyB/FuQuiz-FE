import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { RedStar } from '../../../packages/store';
import { useStoreApi } from '../../store';
import CommonFieldWrapper from './commonFieldWrapper';

interface TextareaFieldProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label?: string;
    isRequire?: boolean;
    direction?: 'row' | 'column';
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ name, label, isRequire = true, direction, ...rest }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <CommonFieldWrapper name={name} label={label} isRequire={isRequire} direction={direction}>
            <textarea
                {...register(name)}
                {...rest}
                rows={6}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </CommonFieldWrapper>
    );
};

import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { RedStar } from '../../../packages/store';
import { BlogCategory } from '../../models/blog';
import { useStoreApi } from '../../store';

interface SelectBlogCategoryProps {
    name: string;
    label: string;
    values: Array<BlogCategory>;
    require?: boolean;
}

export const SelectBlogCategory: React.FC<SelectBlogCategoryProps> = ({ name, label, values, require = true }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label} {require ? <RedStar /> : ''}
            </label>
            <select
                id={name}
                {...register(name)}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {values.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.description}
                    </option>
                ))}
            </select>
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </div>
    );
};

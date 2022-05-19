import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { BlogCategory } from '../../models/blog';
import { useStoreApi } from '../../store';

interface SelectBlogCategoryProps {
    name: string;
    label: string;
    values: Array<BlogCategory>;
    defaultValue?: any;
}

export const SelectBlogCategory: React.FC<SelectBlogCategoryProps> = ({ name, label, values, defaultValue }) => {
    const { errorDetails } = useStoreApi();
    const { register } = useFormContext();

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                id={name}
                {...register(name)}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={defaultValue}
            >
                {values.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
        </div>
    );
};

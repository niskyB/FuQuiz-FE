import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon, XIcon } from '@heroicons/react/solid';
import React from 'react';
import { SelectionFieldValues } from '../../common/interface';
import { RedStar } from '../../../packages/store';
import CommonFieldWrapper from './commonFieldWrapper';
interface MultiSelectBoxProps {
    name: string;
    label?: string;
    values: SelectionFieldValues<any>[];
    isRequire?: boolean;
    selected: SelectionFieldValues<any>;
    setSelected: React.Dispatch<React.SetStateAction<SelectionFieldValues<any>>>;
    selectedList: SelectionFieldValues<any>[];
    setSelectedList: React.Dispatch<React.SetStateAction<SelectionFieldValues<any>[]>>;
    direction?: 'row' | 'column';
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}
export const MultiSelectBox: React.FunctionComponent<MultiSelectBoxProps> = ({
    values,
    label,
    name,
    isRequire = true,
    selected,
    direction,
    selectedList,
    setSelected,
    setSelectedList,
}) => {
    return (
        <CommonFieldWrapper name={name} label={label} isRequire={isRequire} direction={direction}>
            <Listbox
                value={selected}
                onChange={(data: SelectionFieldValues<any>) => {
                    const newSelectedList = selectedList.concat(
                        [data].filter((dataItem) => selectedList.every((item) => item.value !== dataItem.value))
                    );
                    setSelected(data);
                    setSelectedList(newSelectedList);
                }}
            >
                {({ open }) => (
                    <div className="relative">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="block truncate">{selected.label}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {values.map((item) => (
                                    <Listbox.Option
                                        key={item.value}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {item.label}
                                                </span>
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
            <div className="flex pt-2 space-x-3">
                {selectedList.map((item) => (
                    <div key={`select-${item.value}`} className="relative flex items-center pr-5 space-x-3 bg-white rounded-md w-fit">
                        <div className="px-3 py-1 text-sm text-black">{item.label}</div>
                        <div
                            onClick={() => {
                                if (confirm(`Do you really want to remove ${item.label}?`)) {
                                    const newSelectedList = selectedList.filter((selectedItem) => selectedItem.value !== item.value);
                                    setSelectedList(newSelectedList);
                                }
                            }}
                            className="absolute w-4 h-4 -translate-y-1/2 cursor-pointer right-2 top-1/2"
                        >
                            <XIcon />
                        </div>
                    </div>
                ))}
            </div>
        </CommonFieldWrapper>
    );
};

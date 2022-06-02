interface TableHeadProps {
    fields: string[];
}

export const TableHead: React.FunctionComponent<TableHeadProps> = ({ fields }) => {
    return (
        <thead className="bg-gray-50">
            {fields.map((item, index) => (
                <th key={item + index} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    {item}
                </th>
            ))}
        </thead>
    );
};

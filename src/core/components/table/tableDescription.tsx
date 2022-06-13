interface TableDescriptionProps {}

export const TableDescription: React.FunctionComponent<TableDescriptionProps> = ({ children }) => {
    return <td className="px-3 py-4 text-sm text-gray-500 ">{children}</td>;
};

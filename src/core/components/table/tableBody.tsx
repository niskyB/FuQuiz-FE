interface TableBodyProps {}

export const TableBody: React.FunctionComponent<TableBodyProps> = ({ children }) => {
    return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
};

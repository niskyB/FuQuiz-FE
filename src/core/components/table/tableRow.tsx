interface TableRowProps {}

export const TableRow: React.FunctionComponent<TableRowProps> = ({ children }) => {
    return <tr>{children}</tr>;
};

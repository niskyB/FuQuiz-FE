interface TableProps {}

export const Table: React.FunctionComponent<TableProps> = ({ children }) => {
    return <table className="w-full min-w-full divide-y divide-gray-300 table-fixed">{children}</table>;
};

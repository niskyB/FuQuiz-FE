interface TableProps {}

export const Table: React.FunctionComponent<TableProps> = ({ children }) => {
    return <table className="min-w-full divide-y divide-gray-300">{children}</table>;
};

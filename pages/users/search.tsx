import { NextPage, NextPageContext } from 'next';
import * as React from 'react';

interface SearchPageProps {
    currentPage: number;
    pageSize: number;
    name: string;
    orderBy: string;
    order: 'ASC' | 'DESC';
}

const SearchPage: NextPage<SearchPageProps> = ({ currentPage, pageSize, name, orderBy, order }) => {
    return (
        <>
            <div className="p-10">
                {/* <Search currentPage={currentPage} pageSize={pageSize} name={name} orderBy={orderBy as keyof User} order={order} /> */}
            </div>
        </>
    );
};
SearchPage.getInitialProps = async (ctx: NextPageContext): Promise<SearchPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        name: ctx.query?.name || '',
        orderBy: ctx.query?.orderBy || 'createDate',
        order: ctx.query?.order || 'ASC',
    };
    return props as SearchPageProps;
};

export default SearchPage;

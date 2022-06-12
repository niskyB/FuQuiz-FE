import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { StoreLayout } from '../../src/packages/store';
import { SubjectDetail } from '../../src/packages/subject';
import { SubjectFilterDTO } from '../../src/packages/subject/container/subjectList/interface';

interface EditSliderPageProps extends SubjectFilterDTO {
    id: string;
}

const EditSliderPage: NextPage<EditSliderPageProps> = ({ id, category, createdAt, currentPage, isActive, isFeature, name, pageSize }) => {
    return (
        <StoreLayout>
            <SubjectDetail
                category={category}
                createdAt={createdAt}
                currentPage={currentPage}
                id={id}
                isActive={isActive}
                isFeature={isFeature}
                name={name}
                pageSize={pageSize}
            />
        </StoreLayout>
    );
};

EditSliderPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSliderPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditSliderPageProps;
};

export default EditSliderPage;

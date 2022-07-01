import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import LessonView from '../../../../src/packages/lesson/containers/lessonView';
import { StoreLayout } from '../../../../src/packages/store';

interface EditSliderPageProps {
    id: string;
}

const EditSliderPage: NextPage<EditSliderPageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <LessonView id={id} />
        </StoreLayout>
    );
};

EditSliderPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSliderPageProps> => {
    let props = { id: ctx.query?.lessonId || '' };

    return props as EditSliderPageProps;
};

export default EditSliderPage;

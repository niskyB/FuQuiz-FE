import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import LessonView from '../../../../src/packages/lesson/containers/lessonView';
import { StoreLayout } from '../../../../src/packages/store';

interface EditSliderPageProps {
    lessonId: string;
    subjectId: string;
}

const EditSliderPage: NextPage<EditSliderPageProps> = ({ lessonId, subjectId }) => {
    return (
        <StoreLayout>
            <LessonView lessonId={lessonId} subjectId={subjectId} />
        </StoreLayout>
    );
};

EditSliderPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSliderPageProps> => {
    let props = { lessonId: ctx.query?.lessonId || '', subjectId: ctx.query?.id || '' };

    return props as EditSliderPageProps;
};

export default EditSliderPage;

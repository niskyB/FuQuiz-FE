import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { AllRole } from '../../../../src/core/models/user';
import LessonView from '../../../../src/packages/lesson/containers/lessonView';
import { StoreLayout } from '../../../../src/packages/store';

interface LessonDetailProps {
    lessonId: string;
    subjectId: string;
}

const LessonDetail: NextPage<LessonDetailProps> = ({ lessonId, subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <LessonView lessonId={lessonId} subjectId={subjectId} />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

LessonDetail.getInitialProps = async (ctx: NextPageContext): Promise<LessonDetailProps> => {
    let props = { lessonId: ctx.query?.lessonId || '', subjectId: ctx.query?.id || '' };

    return props as LessonDetailProps;
};

export default LessonDetail;

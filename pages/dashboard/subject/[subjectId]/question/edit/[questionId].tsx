import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../../src/packages/dashboard';
import { AddQuestion } from '../../../../../../src/packages/question';

interface EditQuestionProps {}

const EditQuestion: React.FunctionComponent<EditQuestionProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <AddQuestion />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default EditQuestion;

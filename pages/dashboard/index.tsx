import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/role';
import { NewCustomerStatistics, NewRegistrationStatistics, NewSubjectStatistic, TotalRevenuesStatistics } from '../../src/packages/chart';
import { TrendingStatistics } from '../../src/packages/chart/containers/trendingChart';
import { DashBoardLayout } from '../../src/packages/dashboard';

interface DashboardPageProps {}

const DashboardPage: React.FunctionComponent<DashboardPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING, UserRole.SALE, UserRole.EXPERT]}>
            <DashBoardLayout>
                <div className="flex flex-wrap items-start justify-start">
                    <div className="flex flex-col items-start justify-center w-1/2 space-y-5">
                        <NewSubjectStatistic />
                    </div>
                    <div className="flex flex-col items-start justify-center w-1/2 space-y-5">
                        <TotalRevenuesStatistics />
                    </div>
                    <div className="flex flex-col items-start justify-start w-1/2 mt-5 space-y-5">
                        <NewCustomerStatistics />
                    </div>

                    <div className="flex flex-col items-start justify-start w-1/2 mt-5 space-y-5">
                        <NewRegistrationStatistics />
                    </div>

                    <div className="flex flex-col items-start justify-start w-1/2 mt-5 space-y-5">
                        <TrendingStatistics />
                    </div>
                </div>
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default DashboardPage;

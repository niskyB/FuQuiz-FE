import * as React from 'react';
import { ApiListRoutes } from '../../../../../core/common/enum';
import { useGetListWithCount } from '../../../../../core/common/hooks';
import { Quiz } from '../../../../../core/models/quiz';
import { SimulationListProps } from '../../simulationList';

export const useGetSimulationList = (options: Partial<SimulationListProps>) => {
    const { name, subject, currentPage, pageSize } = options;
    const option = React.useMemo<SimulationListProps>(
        () => ({ name: name || '', subject: subject || '', currentPage: currentPage || 0, pageSize: pageSize || 12 }),
        [name, subject, currentPage, pageSize]
    );

    const { list: quizList, count } = useGetListWithCount<Quiz, Partial<SimulationListProps>>(ApiListRoutes.QUIZZES_SIMULATIONS, option);
    return { quizList, count };
};

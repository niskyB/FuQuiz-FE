import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Lesson } from '../../../../core/models/lesson';
import { PricePackage } from '../../../../core/models/pricePackage';
import { Subject } from '../../../../core/models/subject';
import { SubjectFilterDTO } from '../../container/subjectList/interface';
import * as React from 'react';
import { Order } from '../../../../core/common/dataField';

export interface SubjectResDTO extends Subject {
    lessons: Lesson[];
    pricePackages: PricePackage[];
}

export const useGetSubjectList = (options: Partial<SubjectFilterDTO>) => {
    const { category, createdAt, currentPage, isActive, isFeature, name, pageSize, order } = options;

    const option = React.useMemo<SubjectFilterDTO>(
        () => ({
            category: category || '',
            createdAt: createdAt || '',
            currentPage: currentPage || 0,
            isActive: isActive || '',
            isFeature: isFeature || '',
            name: name || '',
            pageSize: pageSize || 10,
            order: order || Order.DESC,
        }),
        [category, createdAt, currentPage, isActive, isFeature, name, pageSize, order]
    );
    const { list: subjects, count } = useGetListWithCount<SubjectResDTO, Partial<SubjectFilterDTO>>(ApiListRoutes.SUBJECTS, option);

    return { subjects, count };
};

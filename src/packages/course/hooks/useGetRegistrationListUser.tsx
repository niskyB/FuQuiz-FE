import * as React from 'react';
import { Order } from '../../../core/common/dataField';
import { ApiListRoutes } from '../../../core/common/enum';
import { useGetListWithCount } from '../../../core/common/hooks';
import { Registration, RegistrationStatus } from '../../../core/models/registration';
import { UserCoursesProps } from '../userCourses';

export const useGetRegistrationUserList = ({ currentPage, pageSize, order, category, isFeature, name, status }: Partial<UserCoursesProps>) => {
    const options = React.useMemo<UserCoursesProps>(
        () => ({
            category: category || '',
            isFeature: isFeature || '',
            name: name || '',
            currentPage: currentPage || 1,
            pageSize: pageSize || 12,
            order: order || Order.DESC,
            status: status || '',
        }),
        [currentPage, pageSize, order, category, isFeature, name]
    );

    const { count, list: registrationList } = useGetListWithCount<Registration, UserCoursesProps>(ApiListRoutes.REGISTRATIONS_ME, options);

    return { count, registrationList };
};

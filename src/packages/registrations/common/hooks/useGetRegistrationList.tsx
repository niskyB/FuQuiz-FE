import * as React from 'react';
import { Order } from '../../../../core/common/dataField';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Registration, RegistrationStatus } from '../../../../core/models/registration';

export interface RegistrationFilterDTO extends Pick<Registration, 'validFrom' | 'validTo'> {
    subject: string;
    email: string;
    pageSize: number;
    currentPage: number;
    order: Order;
    orderBy: keyof Registration;
    status: RegistrationStatus | '';
}

export interface RegistrationFilterFormDTO extends Omit<RegistrationFilterDTO, 'pageSize' | 'currentPage'> {}

export const useGetRegistrationList = ({
    subject,
    email,
    status,
    validFrom,
    validTo,
    currentPage,
    pageSize,
    order,
    orderBy,
}: Partial<RegistrationFilterDTO>) => {
    const options = React.useMemo<RegistrationFilterDTO>(
        () => ({
            subject: subject || '',
            email: email || '',
            status: status || '',
            validFrom: validFrom || '',
            validTo: validTo || '',
            currentPage: currentPage || 1,
            pageSize: pageSize || 12,
            order: order || Order.DESC,
            orderBy: orderBy || 'validFrom',
        }),
        [subject, email, status, validFrom, validTo, currentPage, pageSize, orderBy, order]
    );

    const { count, list: registrationList } = useGetListWithCount<Registration, RegistrationFilterDTO>(ApiListRoutes.REGISTRATIONS, options);

    return { count, registrationList };
};

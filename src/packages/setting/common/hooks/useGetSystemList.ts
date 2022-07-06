import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import * as React from 'react';
import { SettingListProps } from '../../containers/settingList';
import { Order } from '../../../../core/common/dataField';
import { SettingEnum } from '../../../../core/models/setting';
import { SystemType } from '../../../../core/common/interface';
import { SettingFilterDTO } from '../../containers/settingList/interface';

export const useGetSystemList = (options: Partial<SettingFilterDTO>, settingType: SettingEnum) => {
    const { order, orderBy, isActive, value, currentPage, pageSize } = options;
    const option = React.useMemo<SettingFilterDTO>(
        () => ({
            order: order || Order.DESC,
            value: value || '',
            orderBy: orderBy || '',
            isActive: isActive !== undefined ? isActive : true,
            currentPage: currentPage || 0,
            pageSize: pageSize || 10,
        }),
        [order, value, orderBy, isActive, currentPage, pageSize, settingType]
    );

    const switchRouteList = () => {
        switch (settingType) {
            case SettingEnum.ROLE:
                return ApiListRoutes.ROLES_ADMIN;
            case SettingEnum.SYSTEM_MENUS:
                return ApiListRoutes.SYSTEM_MENUS_ADMIN;
            case SettingEnum.POST_CATEGORIES:
                return ApiListRoutes.POST_CATEGORIES_ADMIN;
            case SettingEnum.SUBJECT_CATEGORIES:
                return ApiListRoutes.SUBJECT_CATEGORIES_ADMIN;
            case SettingEnum.LESSON_TYPES:
                return ApiListRoutes.LESSON_TYPES_ADMIN;
            case SettingEnum.SUBJECT_DIMENSION:
                return ApiListRoutes.DIMENSION_TYPES_ADMIN;
            case SettingEnum.QUESTION_LEVELS:
                return ApiListRoutes.QUESTION_LEVELS_ADMIN;
            default:
                return ApiListRoutes.ROLES_ADMIN;
        }
    };

    const { list, count } = useGetListWithCount<SystemType<any>, Partial<SettingFilterDTO>>(switchRouteList(), option);
    return { list, count };
};

import * as React from 'react';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList, useGetListWithCount } from '../../../../core/common/hooks';
import { SubjectCategory } from '../../../../core/models/subject';
import { User } from '../../../../core/models/user';

export const useGetSubjectCategory = () => {
    const { list } = useGetList<SubjectCategory, null>(ApiListRoutes.SUBJECT_CATEGORIES, null);
    return { list };
};

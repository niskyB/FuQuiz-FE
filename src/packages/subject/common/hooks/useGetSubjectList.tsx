import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Lesson } from '../../../../core/models/lesson';
import { PricePackage } from '../../../../core/models/pricePackage';
import { Subject } from '../../../../core/models/subject';
import { SubjectFilterDTO } from '../../container/subjectList/interface';

export interface SubjectResDTO extends Subject {
    lessons: Lesson[];
    pricePackages: PricePackage[];
}

export const useGetSubjectList = (options: Partial<SubjectFilterDTO>) => {
    const { list: subjects, count } = useGetListWithCount<SubjectResDTO, Partial<SubjectFilterDTO>>(ApiListRoutes.SUBJECTS, options);

    return { subjects, count };
};

import * as React from 'react';
import { Slider } from '../../../../core/models/slider';
import { Subject } from '../../../../core/models/subject';
import { getSubjectById } from '../../../subject/container/editSubject/action';

interface useSubjectProps {
    id: string;
}

export const useGetSubject = ({ id }: useSubjectProps) => {
    const [subject, setSubject] = React.useState<Subject>();
    const [imageUrl, setImageUrl] = React.useState<string>('');

    React.useEffect(() => {
        getSubjectById(id).then((data) => {
            setImageUrl(data.thumbnailUrl);
            setSubject(data);
        });
    }, [id]);

    return { subject, imageUrl, setImageUrl };
};

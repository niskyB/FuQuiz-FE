import { AttributeType } from '../common/interface';
import { Marketing } from './marketing';

export interface BlogCategory extends AttributeType {}

export interface Blog {
    id: string;
    details: string;
    updateAt: string;
    briefInfo: string;
    createdAt: string;
    marketing: Marketing | null;
    title: string;
    thumbnailUrl: string;
    category: BlogCategory;
    isShow: boolean;
    isFeature: boolean;
}

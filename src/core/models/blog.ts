import { AttributeType } from '../common/interface';
import { User } from './user';

export interface BlogCategory extends AttributeType {}

export interface Blog {
    id: string;
    details: string;
    updateAt: string;
    briefInfo: string;
    createAt: string;
    user: User;
    title: string;
    thumbnailUrl: string;
    blogCategory: BlogCategory;
}

import { User } from './user';

export interface BlogCategory {
    id: string;
    name: string;
}

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

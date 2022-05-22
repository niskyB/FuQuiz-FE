import { Blog } from '../../../../core/models/blog';

export interface EditBlogDTO extends Pick<Blog, 'details' | 'briefInfo' | 'title'> {
    blogCategoryId: string;
    thumbnail: File | null;
}

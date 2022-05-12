import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, TextField } from '../../../../core/components/form';
import { User } from '../../../../core/models/user';
import { FilterFieldDto, getFilterUsers } from './action';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import PaginationBar from '../../components/paginationBar';

enum SortType {
    ASC = 'ASC',
    DESC = 'DESC',
}

export interface SearchProps {
    currentPage?: number;
    pageSize?: number;
    name?: string;
    orderBy?: keyof User;
    order?: SortType;
}

const Search: React.FunctionComponent<SearchProps> = ({ currentPage, pageSize, name, orderBy, order }) => {
    const router = useRouter();
    // Users list
    const [users, setUsers] = React.useState<Array<User>>([]);
    const [count, setCount] = React.useState<number>(0);

    //Params url
    const [filterUrl, setFilterUrl] = React.useState<string>(``);

    //Default searching
    React.useEffect(() => {
        router.push({ pathname: '/users/search', query: { currentPage, pageSize, name, orderBy, order } });
    }, []);

    // Filter field by name input
    const methods = useForm<FilterFieldDto>();
    const _handleOnSubmit = async (data: FilterFieldDto) => {
        router.push({ pathname: '/users/search', query: { currentPage: 1, pageSize, name: data.name, orderBy: 'name', order } });
    };

    // Filter process
    React.useEffect(() => {
        const fetchData = async () => {
            const filterUrlServer = filterUrl.replace(`currentPage=${Number(currentPage)}`, `currentPage=${Number(currentPage) - 1}`);
            const data = await getFilterUsers(filterUrlServer);
            setUsers(data.data);
            setCount(data.count);
        };
        fetchData();
    }, [filterUrl]);

    // Filter by clicking field
    const handleChangeFilterField = (paramFilter: SearchProps) => {
        const params = router.query as SearchProps;

        var newOrder: SortType = SortType.ASC;
        if (params.orderBy && params.orderBy === paramFilter.orderBy) {
            newOrder = params.order && params.order === SortType.ASC ? SortType.DESC : SortType.ASC;
        } else {
            newOrder = SortType.ASC;
        }

        let mergeParams = { ...params, ...paramFilter };
        mergeParams = { ...mergeParams, order: newOrder };

        router.push({
            pathname: '/users/search',
            query: mergeParams as ParsedUrlQueryInput,
        });
    };

    // Reload filter url
    React.useEffect(() => {
        setFilterUrl(router.asPath.replace('/users/search?', ''));
    }, [_handleOnSubmit, handleChangeFilterField]);

    // Min max pagination

    return (
        <>
            <FormWrapper methods={methods}>
                <p>Filter Field Input</p>
                <form onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <TextField name="name" label="Name" />
                    <button>Submit</button>
                </form>
            </FormWrapper>
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'id' })}
                        >
                            ID
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'name' })}
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'username' })}
                        >
                            Username
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'email' })}
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'googleId' })}
                        >
                            Google ID
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'createDate' })}
                        >
                            Create Date
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'updateDate' })}
                        >
                            Update Date
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'status' })}
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            onClick={() => handleChangeFilterField({ orderBy: 'role' })}
                        >
                            Role
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users &&
                        users.map((user) => (
                            <tr key={user.username}>
                                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{user.id}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.name}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.username}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.email}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.googleId}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.createDate}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.updateDate}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.status}</td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{user.role}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <PaginationBar
                currentPage={Number(currentPage)}
                numberOfItem={count}
                pageSize={Number(pageSize)}
                routeUrl={filterUrl}
                handleChangeFilterField={handleChangeFilterField}
            />
        </>
    );
};

export default Search;

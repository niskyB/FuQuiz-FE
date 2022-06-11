import Link from 'next/link';

interface SideBoxProps {
    href: string;
    image: string;
    title: string;
    category?: string;
}

export const SideBox: React.FunctionComponent<SideBoxProps> = ({ href, image, title, category }) => {
    return (
        <Link href={href} passHref>
            <div className="flex p-3 space-x-3 transition-all duration-300 bg-white rounded-md cursor-pointer h-36 hover:scale-110">
                <img className="object-cover w-1/2 min-w-[50%]" src={image} />
                <div className="flex flex-col space-y-1">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-sm font-medium text-indigo-600">{category}</p>
                </div>
            </div>
        </Link>
    );
};

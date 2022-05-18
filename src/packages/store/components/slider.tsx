import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { SliderWithoutAuthDTO } from '../../../core/models/slider';
import * as React from 'react';

interface SlideProps {
    slideList: SliderWithoutAuthDTO[];
}

export const Slide: React.FunctionComponent<SlideProps> = ({ slideList }) => {
    const slide = React.useRef<HTMLDivElement | null>(null);

    const [scrollDeg, setScrollDeg] = React.useState<number>(0);
    React.useEffect(() => {
        const slideBox = slide.current?.childNodes[0] as HTMLDivElement;
        return () => {};
    }, []);

    React.useEffect(() => {
        if (slide.current) {
            slide.current.scrollTo({ left: scrollDeg, behavior: 'smooth' });
        }
        return () => {};
    }, [scrollDeg]);

    const _onScrollLeft = () => {
        if (slide.current && scrollDeg > 0) {
            const scrollWith = slide.current.scrollWidth;
            setScrollDeg((prev) => prev - scrollWith / slideList.length);
        }
    };
    const _onScrollRight = () => {
        if (slide.current) {
            const scrollWith = slide.current.scrollWidth;
            const maxScrollWith = scrollWith - slide.current.clientWidth;

            if (scrollDeg < maxScrollWith) {
                setScrollDeg((prev) => prev + scrollWith / slideList.length);
            }
        }
    };
    return (
        <div className="flex slide-box">
            <div className="flex items-center visible md:invisible slider-pointer">
                <div onClick={_onScrollLeft} className="w-10 h-10 text-black/50 hover:text-black cursor-pointer   ">
                    <ChevronLeftIcon />
                </div>
            </div>

            <div ref={slide} className="snap-x duration-700 relative flex snap-mandatory overflow-x-auto flex-1 slider-content">
                {slideList.map((item) => (
                    <Link key={item.id} href={item.backLink} passHref>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 snap-center cursor-pointer shrink-0 space-y-2">
                            <img className="w-full shrink-0" src={item.imageUrl} />
                            <div className="text-base font-semibold text-center capitalize">{item.title}</div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex items-center visible md:invisible  slider-pointer">
                <div onClick={_onScrollRight} className="w-10 h-10 text-black/50 hover:text-black cursor-pointer ">
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

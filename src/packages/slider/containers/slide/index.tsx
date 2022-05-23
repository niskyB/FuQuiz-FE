import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { SliderWithoutAuthDTO } from '../../../../core/models/slider';
import * as React from 'react';

interface SlideProps {
    slideList: SliderWithoutAuthDTO[];
}

export const Slide: React.FunctionComponent<SlideProps> = ({ slideList }) => {
    const slide = React.useRef<HTMLDivElement | null>(null);
    const slideLength = React.useMemo(
        () =>
            slideList.reduce((prev, current) => {
                if (current.isShow) return prev + 1;
                else return prev;
            }, 0),
        [slideList]
    );
    React.useEffect(() => {
        console.log(slideLength);
        return () => {};
    }, [slideLength]);

    const [scrollDeg, setScrollDeg] = React.useState<number>(0);

    React.useEffect(() => {
        if (slide.current) {
            slide.current.scrollTo({ left: scrollDeg, behavior: 'smooth' });
        }
        return () => {};
    }, [scrollDeg]);

    const _onScrollLeft = () => {
        if (slide.current && scrollDeg > 0) {
            const scrollWith = slide.current.scrollWidth;
            setScrollDeg((prev) => prev - scrollWith / slideLength);
        }
    };
    const _onScrollRight = () => {
        if (slide.current) {
            const scrollWith = slide.current.scrollWidth;
            const maxScrollWith = scrollWith - slide.current.clientWidth;

            if (scrollDeg < maxScrollWith) {
                setScrollDeg((prev) => prev + scrollWith / slideLength);
            }
        }
    };
    return (
        <div className="flex slide-box">
            <div className="flex items-center visible md:invisible slider-pointer">
                <div onClick={_onScrollLeft} className="w-10 h-10 cursor-pointer text-black/50 hover:text-black ">
                    <ChevronLeftIcon />
                </div>
            </div>

            <div ref={slide} className="relative flex flex-1 overflow-x-auto duration-700 snap-x snap-mandatory slider-content">
                {slideList.map((item) => {
                    if (item.isShow)
                        return (
                            <Link key={item.id} href={item.backLink} passHref>
                                <div className="w-full px-3 space-y-2 cursor-pointer md:w-1/2 lg:w-1/3 snap-center shrink-0">
                                    <img className="w-full shrink-0" src={item.imageUrl} />
                                    <div className="text-base font-semibold text-center capitalize">{item.title}</div>
                                </div>
                            </Link>
                        );
                })}
            </div>

            <div className="flex items-center visible md:invisible slider-pointer">
                <div onClick={_onScrollRight} className="w-10 h-10 cursor-pointer text-black/50 hover:text-black ">
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

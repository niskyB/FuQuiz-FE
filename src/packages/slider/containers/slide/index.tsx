import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { SliderWithoutAuthDTO } from '../../../../core/models/slider';
import * as React from 'react';
import { useInterval } from '../../../../core/common/hooks';

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

    const [scrollDeg, setScrollDeg] = React.useState<number>(0);

    React.useEffect(() => {
        if (slide.current) {
            slide.current.scrollTo({ left: scrollDeg, behavior: 'smooth' });
        }
        return () => {};
    }, [scrollDeg]);

    const clearInterval = useInterval(() => {
        _onScrollRight(false);
    }, 5000);

    const _onScrollLeft = (isSwagger: boolean) => {
        if (isSwagger) clearInterval();

        if (slide.current && scrollDeg > 0) {
            const scrollWith = slide.current.scrollWidth;
            setScrollDeg((prev) => prev - scrollWith / slideLength);
        }
    };
    const _onScrollRight = (isSwagger: boolean) => {
        if (isSwagger) clearInterval();

        if (slide.current) {
            const scrollWith = slide.current.scrollWidth;
            const maxScrollWith = scrollWith - slide.current.clientWidth;

            if (scrollDeg < maxScrollWith) {
                setScrollDeg((prev) => prev + scrollWith / slideLength);
            } else {
                setScrollDeg(0);
            }
        }
    };
    return (
        <div className="relative flex slide-box">
            {/* <div className="flex items-center visible md:invisible slider-pointer">
                <div onClick={_onScrollLeft} className="w-10 h-10 cursor-pointer text-black/50 hover:text-black ">
                    <ChevronLeftIcon />
                </div>
            </div> */}

            <div ref={slide} className="flex flex-1 overflow-x-auto duration-700 snap-x snap-mandatory slider-content">
                <div className="absolute z-10 items-center visible -translate-y-1/2 fl ex top-1/2 left-2 slider-pointer">
                    <div onClick={() => _onScrollLeft(true)} className="w-10 h-10 cursor-pointer text-gray/80 hover:text-gray ">
                        <ChevronLeftIcon />
                    </div>
                </div>
                {slideList.map((item) => {
                    if (item.isShow)
                        return (
                            <div key={item.id} className="w-full h-auto px-3 mx-auto space-y-5 cursor-pointer snap-center shrink-0">
                                <a className="relative w-full" href={item.backLink}>
                                    <p className="absolute left-0 px-2 text-2xl font-semibold text-center text-gray-100 capitalize bg-gray-900/70 bottom-6">
                                        {item.title}
                                    </p>
                                    <img className="object-cover w-full mx-auto max-h-72 shrink-0" src={item.imageUrl} />
                                </a>
                            </div>
                        );
                })}
                <div className="absolute -translate-y-1/2 top-1/2 right-2">
                    <div className="sticky flex items-center visible slider-pointer">
                        <div onClick={() => _onScrollRight(true)} className="w-10 h-10 cursor-pointer text-gray/80 hover:text-gray " id="button-left">
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex items-center visible md:invisible slider-pointer">
                <div onClick={_onScrollRight} className="w-10 h-10 cursor-pointer text-black/50 hover:text-black ">
                    <ChevronRightIcon />
                </div>
            </div> */}
        </div>
    );
};

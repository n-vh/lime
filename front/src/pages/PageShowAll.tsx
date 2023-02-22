import { ButtonTypes } from '~/components/ButtonTypes';
import { Carousel } from '~/components/CarouselComp';
import { Divider } from '~/components/DividerComp';
import { Navbar } from '~/components/Navbar';

export function PageShowAll() {
  return (
    <>
      <Navbar />
      <div className="absolute top-0 z-0 h-2/6 w-full rounded-b-2xl bg-gray-200">
        <div className="right-0 left-0 h-3/6 rounded-lg ">
          <div className="h4/6 w-full bg-slate-300"></div>
        </div>
      </div>

      <div className="ml-4 mt-[285px] md:mt-[395px] lg:mt-[365px]"></div>

      <Divider />

      <Carousel />
      <Divider />

      <Carousel />
    </>
  );
}

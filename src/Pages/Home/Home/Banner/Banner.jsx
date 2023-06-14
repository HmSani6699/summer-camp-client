import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from '../../../../assets/logo.png';
import banner from '../../../../assets/banner.png';
import banner1 from '../../../../assets/banner3.png';
import banner2 from '../../../../assets/banner2.png'

const Banner = () => {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="lg:flex lg:items-center text-center lg:text-start lg:justify-center bg-slate-800 px-4 lg:px-20 lg:pt-40 pt-32 pb-20">
                    <div className="">
                        <div className="flex items-center mb-6">
                            <img className="h-16 w-16" src={logo} alt="" />
                            <h2 className="text-white  text-2xl">We Will Teach You How To Learn</h2>
                        </div>
                        <h2 className="text-white text-5xl font-bold">BEST SCHOOL & ANYTHING </h2><h2 className="text-white text-5xl font-bold mt-3"> TO <span className="text-amber-400">LEARN</span> SMART WAY</h2>
                        <p className="text-white mt-8">A Theme for summer camp  Learning & Course etc.</p>
                        <input type="submit" className="btn bg-[#fbbc24e3] mr-5 border-0 mt-8" value="Get start" />
                        <input type="submit" className="btn btn-outline btn-warning" value="Contact us" />
                    </div>
                    <div className="border rounded-tl-[50%] border-white lg:ml-12 lg:mt-0 mt-20">
                        <div className="avatar inline">
                            <div className="bg-amber-400 w-full lg:w-[430px] rounded-full border-8">
                                <span className="border-4 border-white">
                                    <img className="" src={banner} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex lg:flex-row flex-col-reverse lg:text-start text-center lg:items-center lg:justify-center gap-10 bg-slate-800 lg:px-20 px-4 lg:pt-40 pt-32 pb-20">
                    <div className="border rounded-tr-[50%] border-white lg:mt-0 mt-10">
                        <div className="avatar inline">
                            <div className="bg-amber-400 w-full lg:w-[430px] rounded-full border-8">
                                <span className="border-4  border-white">
                                    <img src={banner1} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pl-2">
                        <div className="flex items-center mb-6">
                            <img className="h-16 w-16" src={logo} alt="" />
                            <h2 className="text-white  text-2xl">We Will Teach You How To Learn</h2>
                        </div>
                        <h2 className="text-white text-5xl font-bold">BEST SCHOOL & ANYTHING </h2><h2 className="text-white text-5xl font-bold mt-3"> TO <span className="text-amber-400">LEARN</span> SMART WAY</h2>
                       <p className="text-white mt-8">A Theme for summer camp  Learning & Course etc.</p>
                        <input type="submit" className="btn bg-[#fbbc24e3] mr-5 border-0 mt-8" value="Get start" />
                        <input type="submit" className="btn btn-outline btn-warning" value="Contact us" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="lg:flex lg:items-center text-center lg:text-start lg:justify-center bg-slate-800 px-4 lg:px-20 lg:pt-40 pt-32 pb-20">
                    <div className="">
                        <div className="flex items-center mb-6">
                            <img className="h-16 w-16" src={logo} alt="" />
                            <h2 className="text-white  text-2xl">We Will Teach You How To Learn</h2>
                        </div>
                        <h2 className="text-white text-5xl font-bold">BEST SCHOOL & ANYTHING </h2><h2 className="text-white text-5xl font-bold mt-3"> TO <span className="text-amber-400">LEARN</span> SMART WAY</h2>
                        <p className="text-white mt-8">A Theme for summer camp  Learning & Course etc.</p>
                        <input type="submit" className="btn bg-[#fbbc24e3] mr-5 border-0 mt-8" value="Get start" />
                        <input type="submit" className="btn btn-outline btn-warning" value="Contact us" />
                    </div>
                    <div className="border rounded-tl-[50%] border-white lg:ml-12 lg:mt-0 mt-20">
                        <div className="avatar inline">
                            <div className="bg-amber-400 w-full lg:w-[430px] rounded-full border-8">
                                <span className="border-4 border-white">
                                    <img className="" src={banner2} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;
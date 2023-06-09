import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from '../../../../assets/logo.png'

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
                <div className="bg-slate-800 px-20 py-20">
                    <div className="flex items-center mb-6">
                        <img className="h-16 w-16" src={logo} alt="" />
                        <h2 className="text-white  text-2xl">We Will Teach You How To Learn</h2>
                    </div>
                    <h2 className="text-white text-5xl font-bold">BEST SCHOOL & ANYTHING </h2><h2 className="text-white text-5xl font-bold mt-3"> TO <span className="text-amber-500">LEARN</span> SMART WAY</h2>
                    <p className="text-white mt-8">A Theme for Kids , Learning & Course etc.</p>
                    <input type="submit" className="btn bg-[#fbbc24e3] mr-5 border-0 mt-8" value="Get start" />
                    <input type="submit" className="btn btn-outline btn-warning" value="Contact us" />
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;
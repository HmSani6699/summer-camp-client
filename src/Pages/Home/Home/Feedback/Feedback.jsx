import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Feedback.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import SectionTitle from "../../../../Component/SectioneTitle/SectionTitle";
import axios from "axios";
import { useState } from "react";



const Feedback = () => {
  const [reviews, setReviews] = useState();

  axios.get('http://localhost:5000/review')
    .then(data => {
      setReviews(data.data)
    })


  return (
    <div className="max-w-6xl mx-auto bg-[#f8f9fa] py-10 mt-24">
      <h2 className="text-4xl font-bold text-center ">Our Client <span className="text-amber-400">Review</span></h2>
      <SectionTitle subHeadding={`We understand the importance of providing comprehensive instructions and guidance to your students. This section is designed specifically for PopularInstructors, offering additional resources and tips to enhance the learning experience.`}></SectionTitle>
      <div className=" mb-24 mt-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >


          {
            reviews?.map(review => <SwiperSlide key={review._id}>
              <div className="bg-white p-4">
                <div className="avatar flex justify-center">
                  <div className="w-24 border-4 rounded-full">
                    <img src={review.image} />
                  </div>
                </div>
                <p>{review?.details}</p>
                <h2 className="text-center mt-4 text-2xl font-bold">{review.name}</h2>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
import { Helmet } from "react-helmet";
import ShearBanner from "../../Component/ShearBanner/ShearBanner";
import SectionTitle from "../../Component/SectioneTitle/SectionTitle";
import { useState } from "react";
import axios from "axios";
import PopularInstructor from "../Home/Home/PopularInstructors/PopularInstructor";

import banner from '../../assets/sheareBanner.avif'

const Instructors = () => {
    const [instructors, setInstructors] = useState();

    axios.get('http://localhost:5000/instructors')
        .then(res => {
            setInstructors(res.data);
        })

    return (
        <div className="">
            <Helmet><title>Sadiq | instructores</title></Helmet>
        <ShearBanner image={banner} title={'Our instructores'} subtitle='All instructires page'></ShearBanner>
            <h2 className="text-4xl font-bold text-center mt-24">All <span className="text-amber-400">Instructors</span></h2>
            <SectionTitle subHeadding={''}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 mb-28">
                {
                    instructors?.map(instructor =><PopularInstructor
                         key={instructor._id}
                         instructor={instructor}
                    ></PopularInstructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;


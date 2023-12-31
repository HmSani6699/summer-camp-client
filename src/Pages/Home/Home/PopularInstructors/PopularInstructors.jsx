import { useState } from "react";
import SectionTitle from "../../../../Component/SectioneTitle/SectionTitle";
import axios from "axios";
import PopularInstructor from "./PopularInstructor";


const PopularInstructors = () => {
    const [PopularInstructors, setPopularInstructors] = useState();

    axios.get('https://assignment-12-server-hmsani6699.vercel.app/instructors')
        .then(res => {
            setPopularInstructors(res.data.slice(0,6));
        })

    // console.log(PopularInstructors);
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-24">Our Popular <span className="text-amber-400">Instructors</span></h2>
            <SectionTitle subHeadding={`We understand the importance of providing comprehensive instructions and guidance to your students. This section is designed specifically for PopularInstructors, offering additional resources and tips to enhance the learning experience.`}></SectionTitle>

            <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    PopularInstructors?.map(instructor =><PopularInstructor
                         key={instructor._id}
                         instructor={instructor}
                    ></PopularInstructor>)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;
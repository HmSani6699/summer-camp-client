import { useState } from "react";
import SectionTitle from "../../../../Component/SectioneTitle/SectionTitle";
import axios from "axios";
import Instructor from "./instructor";

const Instructors = () => {
    const [instructors, setInstructors] = useState();

    axios.get('http://localhost:5000/instructors')
        .then(res => {
            setInstructors(res.data);
        })

    // console.log(instructors);
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-24">Our Popular <span className="text-amber-400">Instructors</span></h2>
            <SectionTitle subHeadding={`We understand the importance of providing comprehensive instructions and guidance to your students. This section is designed specifically for instructors, offering additional resources and tips to enhance the learning experience.`}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    instructors?.map(instructor => <Instructor
                        key={instructor._id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>

        </div>
    );
};

export default Instructors;
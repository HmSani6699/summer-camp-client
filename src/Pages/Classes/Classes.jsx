import { Helmet } from "react-helmet";
import ShearBanner from "../../Component/ShearBanner/ShearBanner";
import SectionTitle from "../../Component/SectioneTitle/SectionTitle";
import banner from '../../assets/shearBanner.jpg';
import { useState } from "react";
import axios from "axios";
import PopularClass from "../Home/Home/PopularClasses/PopularClass";


const Classes = () => {
    const [classes, setClasses] = useState();

    axios.get('http://localhost:5000/classes')
        .then(res => {
            setClasses(res.data);
        })

    return (
        <div>
            <Helmet><title>Sadiq | instructores</title></Helmet>
            <ShearBanner image={banner} title={'Our Classes'} subtitle='All Classes page'></ShearBanner>
            <h2 className="text-4xl font-bold text-center mt-24">All <span className="text-amber-400">Classes</span></h2>
            <SectionTitle subHeadding={''}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto mb-28">
                {
                    classes?.map(classe=><PopularClass 
                    key={classe._id}
                    classe={classe}
                    ></PopularClass>)
                }
            </div>
        </div>
    );
};

export default Classes;
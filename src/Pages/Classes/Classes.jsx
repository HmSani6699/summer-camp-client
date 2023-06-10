import { Helmet } from "react-helmet";
import ShearBanner from "../../Component/ShearBanner/ShearBanner";
import SectionTitle from "../../Component/SectioneTitle/SectionTitle";

import banner from '../../assets/shearBanner.jpg'

const Classes = () => {
    return (
        <div>
            <Helmet><title>Sadiq | instructores</title></Helmet>
            <ShearBanner image={banner} title={'Our Classes'} subtitle='All Classes page'></ShearBanner>
            <h2 className="text-4xl font-bold text-center mt-24">All <span className="text-amber-400">Instructors</span></h2>
            <SectionTitle subHeadding={''}></SectionTitle>
        </div>
    );
};

export default Classes;
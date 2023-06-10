import { Helmet } from "react-helmet";
import ShearBanner from "../../Component/ShearBanner/ShearBanner";
import SectionTitle from "../../Component/SectioneTitle/SectionTitle";

const Instructors = () => {
    return (
        <div>
             <Helmet><title>Sadiq | instructores</title></Helmet>
            <ShearBanner title={'Our instructores'} subtitle='All instructires page'></ShearBanner>
            <h2 className="text-4xl font-bold text-center mt-24">All <span className="text-amber-400">Instructors</span></h2>
            <SectionTitle subHeadding={''}></SectionTitle>
        </div>
    );
};

export default Instructors;

  
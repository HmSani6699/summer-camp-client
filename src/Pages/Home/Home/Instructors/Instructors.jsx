import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Component/SectioneTitle/SectionTitle";

const Instructors = () => {
    return (
        <div>
            <Helmet><title>Sadiq | Instructors</title></Helmet>
            <h2 className="text-4xl font-bold text-center mt-24">Our Popular <span className="text-amber-400">Instructors</span></h2>
            <SectionTitle></SectionTitle>
            
        </div>
    );
};

export default Instructors;
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Sadiq | Home</title></Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;
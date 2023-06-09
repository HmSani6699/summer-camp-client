import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Sadiq | Home</title></Helmet>
            <Banner></Banner>
           <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;
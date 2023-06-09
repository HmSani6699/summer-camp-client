import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Instructors from "./Instructors/Instructors";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Sadiq | Home</title></Helmet>
            <Banner></Banner>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;
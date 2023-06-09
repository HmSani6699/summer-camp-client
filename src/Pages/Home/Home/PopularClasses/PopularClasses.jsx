import axios from "axios";
import SectionTitle from "../../../../Component/SectioneTitle/SectionTitle";

const PopularClasses = () => {

    axios.get('http://localhost:5000/classes')
    .then(data=>{
        console.log(data.data);
    })

    return (
        <div>
             <h2 className="text-4xl font-bold text-center mt-24">Our Popular <span className="text-amber-400">Classes</span></h2>
            <SectionTitle subHeadding={`We understand the importance of providing comprehensive instructions and guidance to your students. This section is designed specifically for PopularInstructors, offering additional resources and tips to enhance the learning experience.`}></SectionTitle>
            
        </div>
    );
};

export default PopularClasses;


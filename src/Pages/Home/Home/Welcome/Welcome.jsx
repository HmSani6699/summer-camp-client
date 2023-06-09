import SectionTitle from "../../../../Component/SectioneTitle/SectionTitle";
import WelcomeCart from "./WelcomeCart";
import image1 from "../../../../assets/certificate.png";
import image2 from "../../../../assets/program.png";
import image3 from "../../../../assets/student.jpg";
import image4 from "../../../../assets/techer.jpg";

const Welcome = () => {


    return (
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-4xl font-bold text-center mt-24">Welcome to <span className="text-amber-400">Sadiq</span></h2>
            <SectionTitle subHeadding={`We understand the importance of providing comprehensive instructions and guidance to your students. This section is designed specifically for PopularInstructors, offering additional resources and tips to enhance the learning experience.`}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
                
                    <WelcomeCart image={image4} name='Best Teacher' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>
                    
                    <WelcomeCart image={image1} name='Certificate to World' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>
                    <WelcomeCart image={image2} name='Good Program' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>
                    <WelcomeCart image={image3} name='Student Service' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>
                   
                
            </div>
        </div>
    );
};

export default Welcome;
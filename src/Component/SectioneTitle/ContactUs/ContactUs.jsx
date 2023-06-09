import contact from '../../../assets/contact2.jpg'


const ContactUs = () => {
    return (
        <div className="hero mt-10 min-h-screen mb-20  bg-fixed" style={{ backgroundImage: `url(${contact})` }}>
            <div className="hero-content text-center py-20 text-neutral-content  bg-[#00000030] w-5/6">
                <div className=" text-black">
                    <h1 className="mb-5 text-5xl font-bold text-amber-400">Contact us</h1>
                    <h2 className='text-5xl font-bold text-white'>00932949 / 49234729</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
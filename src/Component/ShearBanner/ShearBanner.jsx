import banner from '../../assets/shearBanner.jpg'



const ShearBanner = ({title}) => {
    return (
        <div className="hero mt-10 min-h-screen mb-20  bg-fixed" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content text-center py-20 text-neutral-content  bg-[#00000030] w-5/6">
                <div className=" text-black">
                    <h1 className="mb-5 text-5xl font-bold text-amber-400">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default ShearBanner;
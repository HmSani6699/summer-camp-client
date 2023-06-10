import banner from '../../assets/sheareBanner.avif'



const ShearBanner = ({title}) => {
    return (
        <div className="hero h-[600px] mb-20  " style={{ backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`}}>
            <div className="hero-content text-center mt-10 py-20 text-neutral-content  bg-[#00000052] w-5/6">
                <div className=" text-black">
                    <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default ShearBanner;

const WelcomeCart = ({ image, name, details }) => {
    return (
        <div className="card w-full text-black ">
            <div className="card-body items-center text-center">
                <img className="h-20 w-20" src={image} alt="" />
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="">
                    <button className="btn btn-primary">Accept</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCart;
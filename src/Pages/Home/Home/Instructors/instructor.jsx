
const Instructor = ({ instructor }) => {
    // console.log(instructor);
    const { name, email, image } = instructor;
    return (
        <div className="card  w-full border bg-base-100 shadow-xl">
            <div className="bg-amber-400 rounded-t-lg">
                <figure><img className="h-[300px]"  src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span>Email:</span>{email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
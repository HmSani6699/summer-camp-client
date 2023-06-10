
const PopularInstructor = ({ instructor }) => {
    // console.log(instructor);
    const { name, email, image } = instructor;
    return (
        <div className="card  w-full border bg-base-100 shadow-xl">
            <div className="bg-slate-800 rounded-t-xl">
                <figure><img className="h-[250px]" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body ">
                <div className="">
                    <div >
                        <h2 className="card-title">{name}</h2>
                        <p><span className="font-bold">Email:</span> {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructor;
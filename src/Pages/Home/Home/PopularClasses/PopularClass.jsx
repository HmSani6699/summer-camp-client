
const PopularClass = ({ classe }) => {
    const { image, name, InstructorName, Price } = classe;

    // console.log(classe);
    return (
        <div className="card  w-full border bg-base-100 shadow-xl">
            <div className="">
                <figure><img className="h-[320px] rounded-t-xl border w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-center ">{name}</h2>
                    <p><span className="font-bold"> Instructor Name:</span> {InstructorName}</p>
                    <p><span className="font-bold">Price : </span><span className="text-amber-400 font-semibold">${Price}</span></p>
                </div>
                <div className="mt-4 ">
                <button className="btn btn-outline btn-warning w-full">Warning</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;
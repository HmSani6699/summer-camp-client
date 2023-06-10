
const PopularClass = ({ classe, set }) => {
    const { image, name, InstructorName, Price, AvailableSeats,_id } = classe;

    // console.log(classe);

    const handleCelectClass =id=>{
        console.log(id);
    }


    return (
        <div className="card  w-full border bg-base-100 shadow-xl">
            <div className="">
                <figure><img className="h-[320px] rounded-t-xl border w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-center ">{name}</h2>
                    <p><span className="font-bold"> Instructor Name:</span> {InstructorName}</p>
                    {
                        set === 'set' && <p><span className="font-bold"> Available seats:</span> {AvailableSeats}</p>
                    }
                    <p><span className="font-bold">Price : </span><span className="text-amber-400 font-semibold">${Price}</span></p>
                </div>
                <div className="mt-4 ">
                    <button onClick={()=>handleCelectClass(_id)} className="btn btn-outline btn-warning w-full">Select class</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;
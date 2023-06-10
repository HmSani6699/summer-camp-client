
const PopularClass = ({ classe }) => {
    const { image,name, } = classe;


    return (
        <div className="card  w-full border bg-base-100 shadow-xl">
            <div className="">
                <figure><img className="h-[320px] rounded-t-xl border w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body ">
                <div className="flex items-center justify-between">
                    <div >
                        <h2 className="card-title">{name}</h2>
                        <p><span className="font-bold">Email:</span></p>
                    </div>
                    <div className="border bg-amber-300 h-8 w-8 rounded-full flex items-center justify-center">
                        <button className="btn">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;
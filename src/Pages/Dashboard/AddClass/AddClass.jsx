import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Component/SectioneTitle/SectionTitle';
import useAuth from '../../../Hooks/useAuth';

const AddClass = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth()

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="w-full px-28">
            <SectionTitle ></SectionTitle>
            <h2 className='text-2xl font-bold text-center '>Add the <span className='text-amber-400'>new</span> Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text font-semibold">Class name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className='flex gap-3'>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name</span>
                        </label>
                        <input type="text" {...register("instructorName", { required: true })} value={user?.displayName} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor email</span>
                        </label>
                        <input type="email" {...register("instructorEmail", { required: true })} value={user?.email} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control  w-full mb-2">
                    <label className="label">
                        <span className="label-text font-semibold">Class image</span>
                    </label>
                    <input type="text" {...register("photo", { required: true })} placeholder="Photo url" className="input input-bordered w-full " />
                </div>
                <div className='flex gap-3'>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true })} placeholder='Available Seats' className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder='price' className="input input-bordered w-full " />
                    </div>
                </div>
                <input className="btn btn-warning w-full  btn-sm mt-4" type="submit" value="Add class" />
            </form>
        </div>
    );
};

export default AddClass;
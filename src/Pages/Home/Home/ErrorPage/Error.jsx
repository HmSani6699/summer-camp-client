import { Link } from 'react-router-dom';
import error from '../../../../assets/error.webp'

const Error = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
                <img src={error} alt="" />
                <div className='flex items-center justify-center '>
                    <Link to='/'><button className="text-white btn px-8 bg-amber-500 ">Go to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
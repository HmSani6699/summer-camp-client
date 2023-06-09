
import logo from '../../assets/logo.png'

const SectionTitle = ({ subHeadding }) => {
    return (
        <div className='flex items-center justify-center'>
            <div>
                <div className='flex items-center justify-center'>
                    <img className='h-24 w-24' src={logo} alt="" />
                </div>
                <p className='w-1/2 mx-auto text-center'>{subHeadding}</p>
            </div>
        </div>
    );
};

export default SectionTitle;
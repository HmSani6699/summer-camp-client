
import logo from '../../assets/logo.png'

const SectionTitle = ({ subHeadding }) => {
    return (
        <div className='flex justify-center'>
            <div>
                <img className='h-24 w-24' src={logo} alt="" />
                <p>{subHeadding}</p>
            </div>
        </div>
    );
};

export default SectionTitle;

import logo from '../../assets/logo.png'

const SectionTitle = ({subHeadding}) => {
    return (
        <div>
           <img src={logo} alt="" />
           <p>{subHeadding}</p>
        </div>
    );
};

export default SectionTitle;
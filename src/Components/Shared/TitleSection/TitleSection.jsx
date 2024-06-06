
import {PropTypes} from "prop-types"


const TitleSection = ({title, subTitle}) => {
    return (
        <div className='flex justify-center items-center flex-col '>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-black mt-4'>{subTitle}</p>
        </div>
    );
};
TitleSection.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default TitleSection;
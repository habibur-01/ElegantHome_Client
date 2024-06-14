import {PropTypes} from "prop-types"

const CustomToast = ({message}) => {
    return (
        <div className="bg-yellow w-full z-10 p-2 text-white">
            {message}
        </div>
    );
};
CustomToast.propTypes={
    message: PropTypes.string
}

export default CustomToast;
import PropTypes  from "prop-types";
 import {AiFillCheckCircle} from "react-icons/ai"

const Features = ({feature}) => {
    return (
        <div className="">
            <p className="flex items-center font-medium text-xl">
                 <AiFillCheckCircle className="text-green-500 mr-2"></AiFillCheckCircle>
                  {feature}</p>
        </div>
    );
};

 Features.propTypes={
    feature:PropTypes.object
 }
export default Features;
import PropTypes  from "prop-types";
import Features from "../Features/Features";

const Priceop = ({option}) => {
   console.log('this is option',option)
    const {name,price_value,features}=option;
    return (
        <div className="bg-blue-500 text-white p-4 flex flex-col  rounded-lg">
            <h2 className="mb-3">
                <span className="text-4xl">{price_value}</span>
                <span className="text-3xl">/mont</span>
            </h2>
            <h3 className="text-3xl">{name}</h3> <br />

           <div className="p-6 flex-grow">
           {
               features.map((feature,index)=><Features key={index} feature={feature}></Features>) 
            }
           </div>
            <button className="bg-green-700 w-full py-2 m-2 text-3xl font-semibold rounded-lg text-center hover:bg-green-900">By now</button>
        </div>
    );
};

Priceop.propTypes={
   option:PropTypes.object,
}

export default Priceop;
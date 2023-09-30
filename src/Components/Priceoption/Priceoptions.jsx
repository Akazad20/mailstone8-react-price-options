import Priceop from "../PriceO/Priceop";


const Priceoptions = () => {
    const Priceoption= [
        {
          "number": 1,
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99 per month",
          "price_value": 29.99,
          "features": [
            "Access to gym facilities",
            "Cardio and strength training equipment",
            "Locker room access"
          ]
        },
        {
          "number": 2,
          "id": 2,
          "name": "Silver Membership",
          "price": "$49.99 per month",
          "price_value": 49.99,
          "features": [
            "All Basic Membership features",
            "Group fitness classes",
            "Personal training session (once a month)"
          ]
        },
        {
          "number": 3,
          "id": 3,
          "name": "Gold Membership",
          "price": "$79.99 per month",
          "price_value": 79.99,
          "features": [
            "All Silver Membership features",
            "Unlimited personal training sessions",
            "Sauna and spa access",
            "Nutritional guidance"
          ]
        },
        {
          "number": 4,
          "id": 4,
          "name": "Family Membership",
          "price": "$99.99 per month",
          "price_value": 99.99,
          "features": [
            "Access for up to 4 family members",
            "All Gold Membership features",
            "Childcare services",
            "Family fitness classes"
          ]
        },
        {
          "number": 5,
          "id": 5,
          "name": "Student Membership",
          "price": "$19.99 per month",
          "price_value": 19.99,
          "features": [
            "Access to gym facilities",
            "Student ID required",
            "Locker room access"
          ]
        }
      ]
      
    return ( 
               
        <div>
           <h3 className="text-3xl">display data price options</h3>
          <div className="grid md:grid-cols-3 gap-3 p-6 text-center m-4">
           
           {
            Priceoption.map(option=><Priceop key={option.id} option={option} ></Priceop>)   
           }
       </div>
        </div>
       
    );
};

export default Priceoptions;
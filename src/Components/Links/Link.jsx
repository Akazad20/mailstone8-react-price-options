import PropTypes from 'prop-types'; 

const Link = ({route}) => {
    return (
        <li className="mr-3 uppercase font-extrabold hover:bg-rose-500" key={route.id}> <a href={route.path}>{route.name}</a> </li>
    );
};

 Link.propTypes={
    route:PropTypes.object.isRequired
 }
export default Link;
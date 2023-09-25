import {
    Card,
    CardHeader,
    CardBody,
    
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Donate = ({ donate }) => {
    const { category, title, image, color, price} = donate;
    const { background_color, category_bg,  text_color} = color;

    
    return (
        
            <Card className="w-full max-w-[48rem] flex-row m-5 rounded-xl" style={{background:background_color}}>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className="ml-5 my-4 " >
                <button className="text-xl font-normal py-1 px-2 rounded-md" 
                style={{background:category_bg,color:text_color }}>{category} </button>
                    <h2 className="text-2xl  mt-2 font-semibold" 
                    style={{color:text_color}}>{title} </h2>
                    <p className="text-xl font-bold my-4" style={{color:text_color}}>{price}.00</p>
                    <Link to={`/donate/${title}`}>
                    <button  className="btn py-3 px-4 rounded-md text-white font-bold "
                     style={{background:text_color}}>View More</button>
                    </Link>
                </CardBody>
            </Card>
        
   
    );
};
Donate.propTypes = {
    donate: PropTypes.object
}
export default Donate;
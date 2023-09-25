import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ donate }) => {

    const { category, title, image, color} = donate;
    const { background_color, category_bg,  text_color} = color;

    

    return (
       
            
        <div  className="m-2 md:flex flex-grow">
        <Link to={`/donate/${title}`}>
            <div className={`card card-compact  bg-base-100 shadow-xl `  }
            style={{background:background_color}}>
                
                    <img className="w-full h-[200px]" src={image} alt="" />
                    <div className="p-2">
                        <button className="text-xl font-normal py-1 px-2 rounded-md" style={{background:category_bg,color:text_color }}>{category} </button>
                        
                        <h2 className="text-2xl h-[60px] mt-2 font-semibold" style={{color:text_color}}>{title} </h2>
                    </div>
               
            </div>
            </Link>
        </div>
        
        
    );
};                      

Category.propTypes = {
    donate: PropTypes.object,
    color:PropTypes.object
}
export default Category;
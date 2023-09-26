
import Category from "../Category/Category";
import PropTypes from 'prop-types'

const Categories = ({data}) => {
    
    return (
        <div >
        
        <div className="grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:max-w-7xl mx-auto my-20">
            {
                data.map(donate => <Category key={donate.title} donate={donate}></Category>)
            }
        </div>

        </div>
    );
};

Categories.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Categories;
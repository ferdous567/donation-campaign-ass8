import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
    const donation = useLoaderData();
    return (
        <div >
        
        <div className="grid grid-flow-row md:grid-cols-4 gap-4 w-full md:max-w-7xl mx-auto my-20">
            {
                donation.map(donate => <Category key={donate.title} donate={donate}></Category>)
            }
        </div>

        </div>
    );
};

export default Categories;
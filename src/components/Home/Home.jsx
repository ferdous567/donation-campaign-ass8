import { useState } from "react";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const donates = useLoaderData();
    const [displayData, setDisplayData] = useState([...donates])
    const [filtersDatas] = useState([...donates])
    
    const handleSearch = (e) => {
        const key = e.target.value.toLowerCase();
        const filter = filtersDatas.filter(donate =>donate.category.toLowerCase().startsWith(key))
        setDisplayData(filter)
    }
    return (
        <div>
            <Header handleSearch={handleSearch}></Header>
            <Categories data={displayData}></Categories>
        </div>
    );
};

export default Home;
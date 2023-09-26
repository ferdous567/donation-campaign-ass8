import {VictoryPie} from 'victory-pie';
import { storedGetDonations } from '../utility/Utility';


const PieChart = () => {
    const getYourDoantion = storedGetDonations();
    const totalStorage = getYourDoantion.length;
    const myData = [
        {x: "Total Donation", y: (12 - totalStorage )},
        {x: "Your Donation", y: totalStorage},
    ];

    return (
        
        <div style={{height: 620}}>
            
            <VictoryPie data={myData}
            colorScale={["blue", "red", "yellow"]}
            radius={100}
            
            ></VictoryPie>
            
        </div>
    );
};

export default PieChart;
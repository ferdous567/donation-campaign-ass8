import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { storedGetDonations } from "../utility/Utility";
import Donate from "../Donate/Donate";

const Donation = () => {
    const donationData = useLoaderData();
    const [donation, setDonation] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const storedDonation = storedGetDonations();
        if(donationData.length){
            const allDonation = donationData.filter(donate => storedDonation.includes(donate.title))
            setDonation(allDonation);
           
        }
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            
            <div className=" max-w-7xl mx-auto md:grid grid-cols-2 gap-4">
                {
                    donation.slice(0, dataLength).map(donate => <Donate key={donate.title} donate={donate}></Donate>)
                }
            </div>
            {
                donation.length > 4 && <div className={`${dataLength == donation.length ? 'hidden' : ''}  text-center my-5  `}>
                    <button onClick={() => setDataLength(donation.length)} 
                    className='btn btn-secondary'>Show All</button>
                </div>
            }
            
        </div>
    );
};

export default Donation;
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from 'sweetalert2';
import { savedDonations } from "../utility/Utility";

const CardDetails = () => {
    const details = useLoaderData();
    const { title } = useParams();
    const cards = details.find(card => card.title === title)
    const color = cards.color;
    const {text_color} = color;
    // console.log(cards)

    const handleButtonDonate = () =>{
        savedDonations(title);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your donation has been successfully received.',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (

        <div>
            <Navbar></Navbar>
            <div className="m-5 p-5 max-w-5xl mx-auto">
                <div className="relative">
                <img className="w-full" src={cards.image} alt="" />
                <div className="absolute bottom-0 right-0 h-[100px] w-full bg-black bg-opacity-30">
                <div className="mt-6 ml-7">
                    <button onClick={handleButtonDonate} className="btn py-3 px-4 rounded-md text-white font-bold "
                     style={{background:text_color}}>Donate  {cards.price}</button>
                </div>
                </div>
                </div>
                
                <h2 className="text-6xl font-bold my-5 ">{cards.title}</h2>
                <p className="font-normal text-justify">{cards.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;
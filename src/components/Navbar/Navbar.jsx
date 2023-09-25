import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className="navbar  max-w-6xl mx-auto">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-xl font-bold "><NavLink  to='/' 
                    >Home</NavLink></li>
                    <li className="text-xl font-bold "><NavLink to='/donation' >Donation</NavLink></li>
                    <li className="text-xl font-bold "><NavLink to='/statistics'>Statistics</NavLink></li>
                   
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="relative">


            <div className="absolute w-full ">
                <Navbar></Navbar>
            </div>
            <div className="hero h-[500px] "
                style={
                    { backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3nZTyJmw6B21o3cIPJyxxd5BtfHOnsytvg&usqp=CAU)' }

                }>

                <div className="hero-overlay bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <p className="text-5xl text-black font-bold mb-10">I Grow By Helping People In Need</p>
                        <div className="flex justify-center">
                        <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mr-4 text-black" />
                        <button className="btn btn-primary">Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
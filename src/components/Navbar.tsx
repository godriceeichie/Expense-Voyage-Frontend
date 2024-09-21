import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        //  className='nav'
        <div className="sticky top-0 z-10 bg-white flex items-center justify-between py-2 px-4 text-base border-b border-gray-200 shadow-sm">
            <Link to={"/"} style={{ fontWeight: "600" }}>
                MUNA
            </Link>
            <ul className="hidden lg:flex items-center gap-4" >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
            <div className='flex gap-4'>
                <button className='text-base'>Log In</button>
                <button className='bg-primary-color text-base text-white px-4 py-2 rounded-full font-medium' >Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;

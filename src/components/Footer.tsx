import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
            <div className='flex gap-96 justify-center items-center bg-primary-color text-white h-[300px] p-10 md:gap-40 sm:gap-20 xs:gap-6'>
                <li className='list-none flex flex-col gap-3'>
                <p>Resources</p>
                    <div className='list-none flex flex-col gap-3'>
                        <p>Cheap Flights</p>
                        <p>Become an Affiliate</p>
                        <p>Cheap Trips</p>
                    </div>
            </li>
    
                <li className='list-none flex flex-col gap-5'>
                <p>Support</p>
                    <div className='list-none flex flex-col gap-3 '>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                </li>
                <li className='list-none flex flex-col items-start justify-start gap-3'>
                <p>Follow Us</p>
                    <div className='list-none flex flex-row gap-3 text-2xl'>
                        <FaFacebookF />
                        <FaInstagram />
                        <BsTwitterX />
                        <p className='h-[100px]'></p>
                    </div>
                </li>
            </div>
    );
}

export default Footer;

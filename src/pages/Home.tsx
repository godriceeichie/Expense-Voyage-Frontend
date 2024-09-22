// import './landingpage.css';
import img from '../assets/view.png'
import img3 from '../assets/blurryexpense.webp'
import img4 from '../assets/currency.webp'
import img5 from '../assets/clock.webp'
import { Navbar } from '../components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'



const Home = () => {
    return (
        <>
            <Navbar />
            {/* className='landing-page-container'  */}
            <div className='flex flex-col gap-6 lg:flex-row justify-around px-10 py-7'>
                {/* className='landing-left' */}
                <div className='flex flex-col items-center lg:justify-center lg:items-start gap-2 text-center lg:text-left lg:w-[60%]'>
                    <h1 className='text-4xl lg:text-6xl font-semibold max-w-[700px] text-primary-color'>Plan your next Travel with ease </h1>
                    <p className='text-[#6e706e] lg:text-xl max-w-xl'>Embark on your dream vacation or tourism effortlessly. Start your journey today with Expense voyage.</p>
                    <Link to={"/explore"} className='bg-primary-color text-white px-4 py-3 rounded-full font-medium lg:mt-4'>Explore More</Link>
                </div>
                <div className=' lg:w-[40%] flex items-center justify-end w-full object-cover'>
                    <img src={img} className='rounded-lg lg:h-[500px] w-full lg:w-[500px]' alt="Nice View" />
                </div>
            </div>
            {/* Trips */}
            <div className='flex flex-col gap-6 lg:flex-row justify-around px-10 py-7'>
                <div className='flex flex-col items-center lg:justify-center lg:items-start gap-2 text-center lg:text-left lg:w-[60%]'>
                    <p className='text-4xl lg:text-4xl font-semibold max-w-[700px] text-primary-color'>Manage Trips and Itineraries</p>
                    <p className='text-[#6e706e] lg:text-xl max-w-xl'>Plan and organize your destinations, activities, and accommodations with ease.</p>
                </div>
                <div className='lg:-order-last md:-order-last'>
                    <img src={img3} className='rounded-lg lg:h-[500px] w-full lg:w-[500px]' alt="Nice View" />
                </div>
            </div>
            {/* Expenses */}
            <div className='flex flex-col gap-6 lg:flex-row justify-around px-10 py-7'>
                <div className='flex flex-col items-center lg:justify-center lg:items-start gap-2 text-center lg:text-left lg:w-[60%]'>
                    <p className='text-4xl lg:text-4xl font-semibold max-w-[700px] text-primary-color'>Track Expenses in Real Time</p>
                    <p className='text-[#6e706e] lg:text-xl max-w-xl'>Stay on top of your budget with real-time expense logging and alerts.</p>
                </div>
                <div className=''>
                    <img src={img3} className='rounded-lg lg:h-[500px] w-full lg:w-[500px]' alt="Nice View" />
                </div>
            </div>
            {/* Currency */}
            <div className='flex flex-col gap-6 md:gap-10 lg:flex-row justify-around px-10 py-7  '>
                <div className='lg:order-first md:-order-first'>
                    <img src={img4} className='rounded-lg lg:h-[500px] lg:w-[500px] w-full' alt="Nice View" />
                </div>
                <div className='flex flex-col items-center lg:justify-center lg:items-start gap-2 text-center lg:text-left lg:w-[60%]'>
                    <p className='text-4xl lg:text-4xl font-semibold max-w-[700px] text-primary-color'>Currency Conversion </p>
                    <p className='text-[#6e706e] lg:text-xl max-w-xl'>Seamless multi-currency support to handle all your travel expenses.</p>
                </div>
            </div>
            {/* Reminders */}
            <div className='flex flex-col gap-6  lg:flex-row justify-around px-10 py-7'>
                <div className='flex flex-col items-center lg:justify-center lg:items-start gap-2 text-center lg:text-left lg:w-[60%]'>
                    <p className='text-4xl lg:text-4xl font-semibold max-w-[700px] lg:w-[700px] text-primary-color'>Reminders and Notifications</p>
                    <p className='text-[#6e706e] lg:text-xl max-w-xl'>Never miss a beat with daily reminders to log expenses and itinerary updates.</p>
                </div>
                <div className=''>
                    <img src={img5} className='rounded-lg lg:h-[500px] lg:w-[500px] w-full' alt="Nice View" />
                </div>
            </div>
            <div className="floating-icon">
                <i className="fas fa-plane"></i>
            </div>

            <div className='flex flex-col gap-10 justify-center items-center bg-primary-color text-white h-[300px] p-10'>
                <p className='text-[36px] text-center'>Sign Up and start planning your trip!</p>
                <button className='bg-white text-primary-color text-[20px] w-[140px] h-[40px] rounded-full'><Link to={"/signup"}> Sign Up</Link></button>
            </div>
            <Footer/>
        </>
    );
}



export default Home;

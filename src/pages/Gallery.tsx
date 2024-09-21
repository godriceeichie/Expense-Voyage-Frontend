import img1 from '../assets/dubai.jpg'
import img2 from '../assets/maldives-islands.webp'
import img3 from '../assets/ontario.jpg'
import img4 from '../assets/paris.jpg'
import img5 from '../assets/rome.jpg'
import img6 from '../assets/maui.jpg'
import img7 from '../assets/london.jpg'
import img8 from '../assets/phuket.jpg'
import img9 from '../assets/costarica.jpg'
import img10 from '../assets/india.jpg'
import { Navbar } from '../components';
import Footer from '../components/Footer';

const Gallery = () => {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                <div className="relative col-span-1 xs:col-span-2 row-span-2 h-64 xs:h-96">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img1})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Dubai, UAE</p>
                </div>

                <div className="relative col-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img2})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">The Maldives</p>
                </div>

                <div className="relative col-span-1 row-span-2 h-64 xs:h-80">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img3})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Ontario, Canada</p>
                </div>

                <div className="relative col-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img4})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Paris, France</p>
                </div>

                <div className="relative col-span-1 xs:col-span-2 row-span-3 h-64 xs:h-96">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img5})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Rome</p>
                </div>

                <div className="relative col-span-1 xs:col-span-2 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img6})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Maui county</p>
                </div>

                <div className="relative col-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img7})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">London, England</p>
                </div>

                <div className="relative col-span-1 row-span-2 h-64 xs:h-80">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img8})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Phuket, Thailand</p>
                </div>

                <div className="relative col-span-1 xs:col-span-2 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img9})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Costa Rica</p>
                </div>

                <div className="relative col-span-1 xs:col-span-2 row-span-2 h-64 xs:h-96">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img10})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Palolem Beach, India</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Gallery;

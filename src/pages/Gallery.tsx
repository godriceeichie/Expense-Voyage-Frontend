import img from '../assets/view.png'
import { Navbar } from '../components';
import Footer from '../components/Footer';

const Gallery = () => {
    return (
        <>
            <Navbar />
            {/* Grid Layout */}
            <div className="grid grid-cols-4 gap-4 p-8">
                <div className="relative col-span-2 row-span-2 h-96">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 1</p>
                </div>
                <div className="relative col-span-1 row-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 2</p>
                </div>
                <div className="relative col-span-1 row-span-2 h-80">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 3</p>
                </div>

                {/* Additional grid items */}
                <div className="relative col-span-1 row-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 4</p>
                </div>
                <div className="relative col-span-1 row-span-3 h-96">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 5</p>
                </div>
                <div className="relative col-span-2 row-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 6</p>
                </div>
                <div className="relative col-span-1 row-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 7</p>
                </div>
                <div className="relative col-span-1 row-span-2 h-80">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 8</p>
                </div>
                <div className="relative col-span-2 row-span-1 h-64">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 9</p>
                </div>
                <div className="relative col-span-2 row-span-2 h-96">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                    <p className="absolute bottom-4 w-full text-center text-white font-semibold text-xl">Location 10</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Gallery;

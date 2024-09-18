import './landingpage.css';
import img from '..//..//assets/view.png'

const Landingpage = () => {
    return (
        <>
            <div className='nav'>
                <div>
                    MUNA
                </div>
                <ol>
                    <li>Muna</li>
                    <li>Solos</li>
                    <li>Bots</li>
                </ol>
                <ol>
                    <li>Muna</li>
                    <li>Solos</li>
                    <li>Bots</li>
                </ol>
            </div>
            <div className='landing-page-container'>
                <div className='landing-left'>
                    <p className='h1'>Plan your next <br /> <strong>Travel</strong> with ease </p>
                    <p className='text2'>Embark on your dream vacation or tourism effortlessly.Start your journey today with Expense voyage.</p>
                    <button>Explore More</button>
                </div>
                <div className='landing-right'>
                    <img src={img} height={'320px'} alt="Nice View" />
                </div>
            </div>
            <div className='bottomBar'>
                <div className=''></div>
            </div>
        </>
    );
}

export default Landingpage;

import { Link } from "react-router-dom"
import logo from '../assets/WhatsApp_Image_2024-09-19_at_00.13.57-removebg-preview.png'

const Logo = () => {
  return (
    <Link to={"/"} className="bg-black">
        <img src={logo} alt="" className="w-20 h-20"/>
    </Link>
  )
}

export default Logo
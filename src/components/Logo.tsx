import { Link } from "react-router-dom"
import logo from '../assets/EXPENSESVOYAGE Logo - Favicon - 32x32.png'

const Logo = () => {
  return (
    <Link to={"/"} className="">
        <img src={logo} alt=""/>
    </Link>
  )
}

export default Logo
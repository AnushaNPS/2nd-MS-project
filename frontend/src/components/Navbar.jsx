import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                {/* <li><Link to='/'>Registration</Link></li> */}
                {/* <li><Link to='/login'>Login</Link></li> */}
                <li><Link to='/home'>Home</Link></li>
                <li><Link to=''>About</Link></li>
                <li><Link to=''>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar

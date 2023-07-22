import './Header.css'
import { Link } from 'react-router-dom';
import { selectCount } from './Redux/Reducer';
import { useDispatch, useSelector } from "react-redux";



function Header() {

    const reduxdata = useSelector(selectCount);
   
    return (
        <div className="Header">
            <h1 className="logo">
                Haalid
            </h1>

            <form>
                <input className='searchbox'/>
                <button className='button'>search</button>
            </form>
           <Link to="/Login/HomePage"> <button className='button'>Home</button></Link>
           <Link to="/Login/HomePage/cart"> <button className='cart button'>Cart{reduxdata}</button></Link>
            <button className='button'>Profile</ button>

        </div>
    )
}

export default Header;
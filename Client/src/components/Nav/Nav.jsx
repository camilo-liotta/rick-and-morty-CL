import './Nav.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import '../Icons.css'

export default function Nav ({onSearch, addRandom, ramlogo}) {
    return (
        <nav className='Nav'>
        
            <div className='imgContainer' >
                <Link to="/home">
                    <img className='logo' src={ramlogo} alt='logo' />
                </Link>
            </div>

            <div className='buttonContainer'>
                <Link to="/home">
                    <button className='botones'>
                        <span className="material-icons" >home</span>
                        <span className='buttonSpan'>Home</span>
                    </button>
                </Link>

                <Link to="/favorites">
                    <button className='botones'>
                        <i className="material-icons" >favorite</i>
                        <span className='buttonSpan'>Favorites</span>
                    </button>
                </Link>

                <Link to="/about">
                    <button className='botones'>
                        <i className="material-icons" >info</i>
                        <span className='buttonSpan'>About</span>
                    </button>
                </Link>

                <Link to="/">
                    <button className='botones'>
                        <i className="material-icons" >logout</i>
                        <span className='buttonSpan'>Logout</span>
                    </button>
                </Link>
            </div>

            <SearchBar onSearch={onSearch} addRandom={addRandom}/>
            

        </nav>
    )

}


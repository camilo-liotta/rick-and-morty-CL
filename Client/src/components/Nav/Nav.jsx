import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import '../Icons.css'

export default function Nav ({onSearch, addRandom, ramlogo, buttonimg}) {
    return (
        <nav className={style.Nav}>
        
            <div className={style.imgContainer} >
                <img className={style.logo} src={ramlogo} alt='logo' />
            </div>

            <div className={style.buttonContainer}>
                <Link to="/home">
                    <button className={style.botones}>
                        <i className="material-icons" >home</i>
                        <span className={style.buttonSpan}>Home</span>
                    </button>
                </Link>

                <Link to="/favorites">
                    <button className={style.botones}>
                        <i className="material-icons" >favorite</i>
                        <span className={style.buttonSpan}>Favorites</span>
                    </button>
                </Link>

                <Link to="/about">
                    <button className={style.botones}>
                        <i className="material-icons" >info</i>
                        <span className={style.buttonSpan}>About</span>
                    </button>
                </Link>

                <Link to="/">
                    <button className={style.botones}>
                        <i className="material-icons" >logout</i>
                        <span className={style.buttonSpan}>Logout</span>
                    </button>
                </Link>
            </div>

            <SearchBar onSearch={onSearch} addRandom={addRandom} ramlogo={ramlogo} buttonimg={buttonimg}/>
            

        </nav>
    )

}


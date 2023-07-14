import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch, addRandom}) {
   
   const [id, setId] = useState('');

   const handleChange = (event) => {

      setId(event.target.value);

   }
   
   const handleKeyPress = (event) => {
      
      if(event.key === 'Enter') {
         onSearch(id);
         setId('')
      }

   }
   
   return (
      <div className={style.SearchBar}>
               <input type='search' className={style.buscar} onChange={handleChange} value={id} onKeyPress={handleKeyPress} placeholder='Search by id'/>
               <button className={style.botones} onClick={() => {onSearch(id); setId('')}}>
                  <i className="material-icons" >search</i>
               </button>
            <button id={style.random} onClick={addRandom}>
               <span>Random</span>
            </button>
      </div>
   );
}

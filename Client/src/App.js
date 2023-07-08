import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import {useEffect, useState} from 'react';
import axios from 'axios';
import ramlogo from './assets/ram-logo.png';
import buttonimg from './assets/buttonimg.jpg';
import About from './components/About/About';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App() {
   
   const [characters, setCharacters] = useState([]); 

   const navigate = useNavigate();

   const [access, setAccess] = useState(false);

   const ingresar = async (userData) => {
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access); //cambie setAccess(data) por lo que esta ahora pero andaba antes
         access && navigate('/home');
         
         
      } catch (error) {
         console.log(error.message);
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {
      const repeated = characters.filter( character =>  character.id === +id );
         
      if (repeated.length !== 0) {
         
         if(characters.length === 826) {
            alert('Ya estan todos los personajes!');
         } else {
            alert('No podés repetir personajes!');
         }

      } else {
         try {
            
            const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            };
         } catch (error) {
            alert('¡No hay personajes con este ID!');
         }

      }

   }

   const addRandom = () => {

      if(characters.length === 826) {
         alert('Ya estan todos los personajes!');
      } else {

         const id = Math.floor(Math.random() * 826);

         let repeated = characters.filter( character =>  character.id === id );
   
         while( repeated.length !== 0 ) {
            
            const id = Math.floor(Math.random() * 826);
   
            repeated = characters.filter( character =>  character.id === id );
      
         }
   
         axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            setCharacters((oldChars) => [...oldChars, data]);
         });

      }

   }

   const onClose = (id) => {

      const charactersFiltered = characters.filter( character =>  character.id !== Number(id) );
         
      setCharacters(charactersFiltered);

   }

   const {pathname} = useLocation()

   return (

      <div className={style.App}>

         {
            pathname === "/" ? null : <Nav onSearch={onSearch} addRandom={addRandom} ramlogo={ramlogo} buttonimg={buttonimg}/> 
         }
         
         <Routes>
            <Route path="/" element={<Login ingresar={ingresar} />} ></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/favorites' element={<Favorites/>}></Route>
            <Route 
               path='/home' 
               element={
                  <Cards 
                     characters={characters} 
                     onClose={onClose}
                  />
               }
            ></Route>
            <Route path="/details/:id" element={<Details/>} ></Route>
            <Route element={<Error/>}></Route>
         </Routes>
      
      </div>
   );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from './Components/Recipes';
import NavBar from './Components/Navbar';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import RecipeDetails from './Components/RecipeDetails';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element= {<><NavBar/><Header headingnames ="Home Section"/><MainSection/></>}/>
    <Route path='/recipes' element= {<><NavBar/><Header headingnames ="Recipes"/><Recipes/></>}/>
    <Route path='/recipesdetails' element= {<><NavBar/><Header headingnames ="Recipes Details"/><RecipeDetails/></>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

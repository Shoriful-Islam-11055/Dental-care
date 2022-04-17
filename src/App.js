import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/services' element = {<Services></Services>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/gallery' element = {<Gallery></Gallery>}></Route>
        <Route path='/blog' element = {<Blog></Blog>}></Route>
        <Route path='/contacts' element = {<Contacts></Contacts>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

 import './App.css';
import { useState,useEffect,  } from 'react';
import ErrorPage from './component/errorpage';
import Navbar from './component/navbar';
import Home from './component/home';
import SearchView from './component/SearchView';
import AboutView from './component/about';
import MovieView from './component/movieview';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchResult,setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  
useEffect(()=> {
  if(searchText){
fetch(`https://api.themoviedb.org/3/search/collection?api_key=2c84e41a746dd292aa60b1f9ed1f4645&query=${searchText}&language=en-US`)
 .then(res => res.json())
 .then(data=>{
  setSearchResult(data.results)
 })
  }
},[searchText]

)

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={<SearchView keyword={searchText} searchResult={searchResult} />} />
          <Route path="/search/movie/:id" element={<MovieView />} />
          <Route path="/search/*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

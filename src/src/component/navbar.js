import { useNavigate,Link } from "react-router-dom";
const Navbar=({searchText,setSearchText})=> {
  const navigate =useNavigate()
  const updateSearchText =(e)=>{
 navigate(`/search?keyword=${encodeURIComponent(searchText)}`);
   setSearchText(e.target.value); 
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="GOTOSOMEWHERE">MOVIE-BROWSER</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="GOTOSOMEWHEREnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="GOTOSOMEWHERE" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={searchText}
            onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
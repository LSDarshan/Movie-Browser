import { useState } from "react";
import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useEffect  } from "react";
const MovieView = ()=>{
        const{id} =useParams()
                const[movieDetails,setMovieDetail] =useState({})
                const [isLoading,setIsLoading]=useState(true)
                useEffect(()=>{
                                        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=2c84e41a746dd292aa60b1f9ed1f4645`)
                    .then(res=>res.json())
                    .then(data => {
                        setMovieDetail(data)
                        setIsLoading(false)
                    })
                },[id] )
                    function renderMovieDetail( ){
                        if(isLoading){
                            return <Hero text="Loading...."/>
                        }
                        if(movieDetails){
                            const posterPath=`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
                            const backdropUrl=`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
                            return(
                            <>
                            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                            <div className="container my-5">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={posterPath} alt=".."  className="img-fluid shadow rounded"/>
                                    </div>
                                    <div className="col-md-9">
                                        <h2>{movieDetails.original_title}
                                        </h2>
                                        <p className="lead">
                                            {movieDetails.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                            </>)
                        }
                    }

                return  renderMovieDetail()
};
    
export default MovieView;
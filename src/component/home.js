import Hero from './hero';
const Home = () => {

   return (
      <>
         <Hero text="HELLOO.." />
         <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>Hello user this is a MOVIE  BROWSER but not a movie player due to no database enjoy the information of the movie u serach</p>
                    </div>
                </div>
            </div>
         
         

      </>
   )

}
export default Home;
import Hero from './hero';
const AboutView = () => {

    return (
        <>
            <Hero text="About" />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>HII.. this my first ever react based project so if any lag or web is not responsive spare me LOL </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutView;
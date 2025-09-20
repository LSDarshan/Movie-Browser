import '../error.css'; 
import SplitText from './splittext';

const ErrorPage = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
 

      <div className="error-page">
        <SplitText
          text="404 - Page Not Found"
          className="split-parent"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="h1"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <p className="subtitle">
          Oops! The page you are looking for does not exist.
        </p>

        <button className="btn-home" onClick={() => window.location.href = '/'}>
          Go Home
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
import logo from './logo.svg';
import './App.css';
import Navi from './Navi';

function Portfolio() {
  console.log ("bruh")
  return (
    <div className="bg-emerald-900 h-screen">
      <Navi/>
      <p className="text-white mt-8 text-center justify-center mx-auto w-fit">
        i pinky promise i do things cross my heart hope to die stick a needle in my eye
      </p>
    </div>
  );
}

export default Portfolio;
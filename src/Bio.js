import logo from './logo.svg';
import './App.css';
import Navi from './Navi';

function Bio() {
  console.log ("bruh")
  return (
    <div className="bg-emerald-900 h-screen">
      <Navi/>
      <p className="text-white mt-8 text-center justify-center mx-auto w-fit">
        i'm just a poor girl i need all of the sympathy it's not easy come or easy go but nothing matters. 
      </p>
    </div>
  );
}

export default Bio;
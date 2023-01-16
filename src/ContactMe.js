import './App.css';
import Navi from './Navi';

function ContactMe() {
  console.log ("bruh")
  return (
    <div className="bg-emerald-900 h-screen">
      <Navi/>
      <p className="text-white mt-8 text-center justify-center mx-auto w-fit">
        my github is in existence here and i exist via email at mftblancaflor@gmail.com
      </p>
    </div>
  );
}

export default ContactMe;
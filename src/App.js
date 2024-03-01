import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Regione from "./component/Regione";

function App() {
  return (
      <div className="container-fluid p-0 d-flex flex-column justify-content-center">
        <NavBar/>
        <Regione/>
        <Footer/>
      </div>
  );
}

export default App;

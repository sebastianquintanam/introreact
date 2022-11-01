import logoCargado from "./logo.svg";
import "./css/App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Ruta2 from "./components/ruta2";
import { Route, Link, Routes } from "react-router-dom";

function RutaX(props) {
    return (
        <div style={props.objCss}>
            <h2>Hola probando OBJETO css</h2>
        </div>
    );
}

function App() {
    //js
    //Crear un objeto CSS
    let objCss = {
        border: "3px dotted red",
    };

    return (
        <div>
            <Navbar />
            <ul>
                <li>
                    <Link to={"/ruta2"}>Ir a ruta 2</Link>
                </li>
                <li>
                    <Link to={"/"}>Ir a Home</Link>
                </li>
                <li>
                    <Link to={"/rutax"}>Ir a Objeto CSS</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home logo={logoCargado} />} />
                <Route path="/rutax" element={<RutaX objCss={objCss} />} />
                <Route path="/ruta2" element={<Ruta2 />} />
            </Routes>
        </div>
    );
}

export default App;

import { Route, Link, Routes } from "react-router-dom";

function CentralMenu() {
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                <Link to={"/"}>
                    <a href="#" className="nav-link px-2 text-secondary">
                        Home
                    </a>
                </Link>
            </li>
            <li>
                <a href="#" className="nav-link px-2 text-white">
                    Features
                </a>
            </li>
            <li>
                <a href="#" className="nav-link px-2 text-white">
                    Pricing
                </a>
            </li>
            <li>
                <a href="#" className="nav-link px-2 text-white">
                    FAQs
                </a>
            </li>
            <li>
                <a href="#" className="nav-link px-2 text-white">
                    About
                </a>
            </li>
        </ul>
    );
}

export default CentralMenu;

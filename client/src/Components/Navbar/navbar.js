import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button type="button" className="btn btn-outline-success">Иконка (всплывающее меню)</button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Услуги</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Цены</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">О нас</a>
                    </li>
                </ul>
                <div className="text-center">
                    <img src="/Users/vaarty/Desktop/dentistry/client/src/IMG/Новый проект-2.png" />
                </div>


                <ul className="navbarText">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Услуги</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Цены</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">О нас</a>
                    </li>
                </ul>

            </div>

        </nav>

    );
}

export default Navbar;
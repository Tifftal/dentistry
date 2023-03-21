import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <table className="NB" witdh="100%" cellspacing="0" cellpadding="5" >
                <tr>
                    <td><button type="button" className="btn btn-outline-success">Иконка (всплывающее меню)</button></td>
                    {/* <td><a className="nav-link active" aria-current="page" href="#">Услуги</a></td>
                <td><a className="nav-link" href="#">Цены</a></td>
                <td><a className="nav-link" href="#">О нас</a></td> */}
                    <td>
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
                    </td>
                    <td>
                        <div className="text-center">
                            <img src="/Users/vaarty/Desktop/dentistry/client/src/IMG/Новый проект-2.png" />
                        </div>
                    </td>
                    <td><h1>Формула улыбки</h1></td>
                    <td className='LeftInf'>
                        <ul>
                            <li> <p> +7 929 123 45 67</p></li>
                            <li> <button type="button" class="btn btn-link">Заказать обратный звонок</button></li>
                        </ul>
                        <ul>
                            <li> <p>Московская, 11</p></li>
                            <li>  <button type="button" class="btn btn-link">Изменить клинику</button></li>
                        </ul>
                    </td>
                </tr>
            </table>
        </nav>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#"></a>
        //     <button type="button" className="btn btn-outline-success">Иконка (всплывающее меню)</button>

        //     <div className="collapse navbar-collapse" id="navbarText">
        // <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //     <li className="nav-item">
        //         <a className="nav-link active" aria-current="page" href="#">Услуги</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="#">Цены</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="#">О нас</a>
        //     </li>
        // </ul>
        //         <div className="text-center">
        //             <img src="/Users/vaarty/Desktop/dentistry/client/src/IMG/Новый проект-2.png" />
        //         </div>


        //         <ul >
        //             <li className="navbarText">
        //                 <p>Услуги</p>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Цены</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">О нас</a>
        //             </li>
        //         </ul>

        //     </div>

        // </nav>

    );
}

export default Navbar;
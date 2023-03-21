import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import FirstContainer from "./FirstContainer/FirstContainer";
import SecondContainer from "./SecondContainer/SecondContainer";
import ThirdContainer from "./ThirdContainer/ThirdContainer";
import FourthContainer from "./FourthContainer/FourthContainer";
import FifthContainer from "./FifthContainer/FifthContainer";
import SixthContainer from "./SixthContainer/SixthContainer";

const Main = () => {
    return (
        <div className="container">
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <FifthContainer />
            <SixthContainer />
        </div>
    );
}

export default Main;
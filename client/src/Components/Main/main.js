import React, { useState } from "react";

import './main.css'
import FirstContainer from "./FirstContainer/FirstContainer";
import SecondContainer from "./SecondContainer/SecondContainer";
import ThirdContainer from "./ThirdContainer/ThirdContainer";
import FourthContainer from "./FourthContainer/FourthContainer";
import FifthContainer from "./FifthContainer/FifthContainer";
import SixthContainer from "./SixthContainer/SixthContainer";
// import Way from "./Way/way";

const Main = () => {

    return (
        <div className="containerMain">
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <FifthContainer />
            <SixthContainer />
            {/* <Way /> */}
        </div>
    );
}

export default Main;
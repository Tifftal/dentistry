import React from "react";

import './main.css'
import FirstContainer from "./FirstContainer/FirstContainer";
import SecondContainer from "./SecondContainer/SecondContainer";
import ThirdContainer from "./ThirdContainer/ThirdContainer";
import FourthContainer from "./FourthContainer/FourthContainer";
import FifthContainer from "./FifthContainer/FifthContainer";
import Way from "./Way/way";
import Comments from "./Comments/Comments";

const Main = () => {

    return (
        <div className="containerMain">
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <FifthContainer />
            <Way />
            <Comments />
        </div>
    );
}

export default Main;
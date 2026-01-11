import './main.css';

import Comments from "./Comments/Comments";
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import FifthContainer from "./FifthContainer/FifthContainer";
import FirstContainer from "./FirstContainer/FirstContainer";
import FourthContainer from "./FourthContainer/FourthContainer";
import KidsContainer from './KidsContainer/KidsContainer';
import SecondContainer from "./SecondContainer/SecondContainer";
import ThirdContainer from "./ThirdContainer/ThirdContainer";
import Way from "./Way/way";

const Main = ({ onOpenModal }) => {

    return (
        <div className="containerMain">
            <FirstContainer onOpen={onOpenModal} />
            <SecondContainer />
            <ThirdContainer />
            <KidsContainer/>
            <EquipmentContainer />
            <FourthContainer />
            <FifthContainer />
            <Way />
            <Comments />
        </div>
    );
}

export default Main;
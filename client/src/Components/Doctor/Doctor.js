import React from "react";
import Doc from "../../Store/Doctors";
import { observer } from "mobx-react-lite";

const Doctor = observer(() => {
    return (
        <div className="doctorContainer">
            <div>
                <img src={Doc.img} />
                <p>
                    {Doc.surname} {Doc.name} {Doc.patronimic}
                </p>
                {
                    Doc.docs?.map(docs => (
                        <a href={docs} download={docs}><button>Документы</button></a>
                    ))
                }
            </div>
        </div>
    )
});

export default Doctor;
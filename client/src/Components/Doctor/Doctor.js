import React from "react";

const Doctor = ({image, name, surname, patronimic, documents}) => {
    return (
        <div className="doctorContainer">
            <div>
                <img src={image}/>
                <p>
                    {surname} {name} {patronimic}
                </p>
                {
                    documents?.map(docs => (
                        <a href={docs} download={docs}><button>{documents}</button></a>
                    ))
                }
            </div>
        </div>
    )
}

export default Doctor;
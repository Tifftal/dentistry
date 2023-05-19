import { makeAutoObservable } from "mobx";

class Doc {
    img = "empty";
    name = "empty";
    surname = "empty";
    patronimic = "empty";
    specialization = "empty";
    docs;
    education = "empty";
    qualification = "empty";
    about = "empty";
    constructor() {
        makeAutoObservable(this);
    }

    setData(img, name, surname, patronimic, specialization, docs, education, qualification, about) {
        this.img = img;
        this.name = name;
        this.surname = surname;
        this.patronimic = patronimic;
        this.specialization = specialization;
        this.docs = docs;
        this.education = education;
        this.qualification = qualification;
        this.about = about;
    }
}

export default new Doc();
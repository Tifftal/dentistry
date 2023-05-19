import {makeAutoObservable} from "mobx";

class Doc {
    img = "empty";
    name = "empty";
    surname = "empty";
    patronimic = "empty";
    specialization = "empty";
    docs;
    constructor () {
        makeAutoObservable(this);
    }

    setData (img, name, surname, patronimic, specialization, docs) {
        this.img = img;
        this.name = name;
        this.surname = surname;
        this.patronimic = patronimic;
        this.specialization = specialization;
        this.docs = docs;
    }
}

export default new Doc();
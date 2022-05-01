import { makeAutoObservable } from "mobx";

export type listUnitType = {
    id: number,
    text: string,
    complete: boolean
}

type listContainerType = Array<listUnitType>;


class Store {
    toDoList: listContainerType = [];
    searchBy: string = "Все";
    constructor() {
        makeAutoObservable(this);
    }
    pushToDo(toDoText: string) {
        this.toDoList.push({id: this.toDoList.length+1, text: toDoText, complete: false});
    }
    deleteToDo(id: number) {
        this.toDoList.splice(id, 1);
        this.toDoList.forEach((elem, index) => {
            if(elem.id!== index + 1) {
                elem.id = index + 1;
            }
        })
    }
    completeToDo(id: number) {
        this.toDoList[id].complete = !this.toDoList[id].complete;
    }
    changeSearchBy(text: string) {
        this.searchBy = text;
    }
}
export const toDoStore = new Store();
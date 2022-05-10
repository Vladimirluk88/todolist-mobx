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
        this.toDoList.push({id: this.toDoList.length === 0 ? 1 : this.toDoList[this.toDoList.length-1].id+1, text: toDoText, complete: false});
    }
    deleteToDo(id: number) {
        this.toDoList = this.toDoList.filter((u) => u.id !== id);
    }
    completeToDo(id: number) {
        this.toDoList.map((u) => {
            if(u.id === id) {
                u.complete = !u.complete
            }
            return u
        })
    }
    changeSearchBy(text: string) {
        this.searchBy = text;
    }
}
export const toDoStore = new Store();
import { observer } from "mobx-react";
import React from "react";
import { listUnitType, toDoStore } from "../mobx/toDo.store";
import "./List.scss";

export const List: React.FC = observer(() => {
    let searchByBool: boolean | null = null;
    if (toDoStore.searchBy === "Выполненные") {
        searchByBool = true;
    } else if (toDoStore.searchBy === "Невыполненные") {
        searchByBool = false;
    }
    return (
        <div className="list">
            <div className="list_wrapper">
            {toDoStore.toDoList.map((toDo: listUnitType) => {
                if (toDo.complete === searchByBool || searchByBool === null) {
                    return (
                        <div key={toDo.id} className="list__unit">
                            <div className="list__unit-description">
                                <div className="list__unit_text">
                                    {toDo.text}
                                </div>
                            </div>
                            <div className="list__checkbox_wrapper">
                            <div>
                                <span>Выполнено</span>
                                <input
                                    id="complete-checkbox"
                                    type="checkbox"
                                    defaultChecked={toDo.complete}
                                    onChange={() =>
                                        toDoStore.completeToDo(toDo.id)
                                    }
                                />
                            </div>
                            <div>
                                <span>Удалить</span>
                                <input
                                    id="delete-checkbox"
                                    type="checkbox"
                                    checked={false}
                                    onChange={() =>
                                        toDoStore.deleteToDo(toDo.id)
                                    }
                                />
                            </div>
                            </div>
                        </div>
                    );
                } else {
                    return <></>;
                }
            })}
        </div>
        </div>
    );
});

import React, { useEffect, useState } from "react";
import "./List.scss";

type listUnitType = {
    id: number,
    text: string,
    complete: boolean
}

type listContainerType = Array<listUnitType>;

type listPropsType = {
    searchBy: string,
    newUnit: string
}

export const List: React.FC<listPropsType> = React.memo(({searchBy, newUnit}) => {
    const [listContainer, setListContainer] = useState([] as listContainerType);
    let searchByBool: boolean | null = null;
    if (searchBy === "Выполненные") {
        searchByBool = true;
    } else if (searchBy === "Невыполненные") {
        searchByBool = false;
    }
    useEffect(() => {
        if(newUnit !== ""){ setListContainer([...listContainer, {id: listContainer.length+1, text: newUnit, complete: false}]);
    }
    }, [newUnit]);
    let changedList = listContainer.filter((u) => {
        if(u.complete === searchByBool || searchByBool === null) {
            return u
        }
    });
    return <>
        {changedList.map((u: listUnitType) => {
            return <div key={u.id} className="list__unit">
                <div className="list__unit_id">
                {u.id}
                </div>
                <div className="list__unit_text">
                {u.text}
                </div>
                <input type="checkbox" defaultChecked={u.complete} onChange={() => setListContainer([...listContainer.filter(u1 => {
                    if( u1 !== u ) {
                        return u1
                    }
                    u1.complete = !u1.complete
                    return u1
                })])} />
            </div>
        })}
        </>
})
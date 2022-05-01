import { useState } from "react"
import { observer } from 'mobx-react';
import { toDoStore } from '../mobx/toDo.store';
import { Button } from "antd";
import "./Input.scss"

export const Input: React.FC = observer(() => {
    const [unitText, setUnitText] = useState("");
    return <>
    <form onSubmit={(e) => {
        e.preventDefault();
        toDoStore.pushToDo(unitText);
    }}>
    <label htmlFor="unitTextInput">
    <input type="text" id="unitTextInput" placeholder="Введите текст для листа" onChange={(e) => setUnitText(e.currentTarget.value)}/>
    </label>
    <Button htmlType="submit" type="primary">Добавить</Button>
    </form>
    </>
})
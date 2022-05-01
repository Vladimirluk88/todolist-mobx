import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import { observer } from "mobx-react";
import { toDoStore } from "../mobx/toDo.store";
import "./Search.scss"

export const Search: React.FC = observer(() => {
    return <>
    <Select className="select" defaultValue="Все" onChange={(e) => {
        toDoStore.changeSearchBy(e);
    }}>
        <Option value="Все">Все</Option>
        <Option value="Выполненные">Выполненные</Option>
        <Option value="Невыполненные">Невыполненные</Option>
    </Select>
    </>
})
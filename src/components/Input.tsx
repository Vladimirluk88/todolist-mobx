import { useState } from "react"

type inputProps = {
    submit: (message: string) => void
}

export const Input: React.FC<inputProps> = ({submit}) => {
    const [unitText, setUnitText] = useState("");
    return <>
    <form onSubmit={(e) => {
        e.preventDefault();
        submit(unitText);
    }}>
    <label htmlFor="unitTextInput">
    <input type="text" id="unitTextInput" placeholder="Введите текст для листа" onChange={(e) => setUnitText(e.currentTarget.value)}/>
    </label>
    <button type="submit">
        Добавить
    </button>
    </form>
    </>
}

type searchComponentType = {
    setSearchBy: (option: string) => void
}

export const Search: React.FC<searchComponentType> = ({setSearchBy}) => {
    return <>
    <select onChange={(e) => {
        setSearchBy(e.currentTarget.value);
    }}>
        <option>Все</option>
        <option>Выполненные</option>
        <option>Невыполненные</option>
    </select>
    </>
}
import { useState } from 'react';
import './App.css';
import { List } from './components/List';
import { Search } from './components/Search';
import { Input } from './components/Input';

function App() {
  const [searchBy, setSearchBy] = useState("all");
  const [newUnitReciever, setNewUnit] = useState("");
  return (
    <div className="App">
      <header></header>
      <Input submit={setNewUnit} />
      <Search setSearchBy={setSearchBy} />
      <List searchBy={searchBy} newUnit={newUnitReciever} />
    </div>
  );
}

export default App;

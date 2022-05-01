import './App.css';
import { List } from './components/List';
import { Search } from './components/Search';
import { Input } from './components/Input';
const App = () => {
  return (
    <div className="App">
      <header></header>
      <Input />
      <Search />
      <List />
    </div>
  );
}

export default App;

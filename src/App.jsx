import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Shortcut from './components/Shortcuts/Shortcut';
import Button from './components/Button/Button';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Search />
      <Shortcut />
      <Button />
    </div>
  
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar Category={true} Logedin={true} Searchbar={true} Notification={true} AddVideo={false}  />
    </div>
  );
}

export default App;

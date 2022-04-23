import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Result from './pages/Result';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Result />
    </div>
  );
};

export default App;

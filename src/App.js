import './App.css';
import Categories from './Home/Categories';
import Head from './Home/Head';
import NavBar from './Home/NavBar';
import Posts from './Home/Posts';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Head/>
      <Categories/>
      <Posts/>
    </div>
  );
}

export default App;

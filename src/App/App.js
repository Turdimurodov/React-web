import '../App/App.css';
import Header from '../Component/Header/Header';
import Home from '../Component/Home/Home';
import About from '../Component/About/About';
import Footer from '../Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer/>
    </div>
  );
}

export default App;

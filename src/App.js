import { CustomNavbar } from './component/NavBar';  
import {Banner} from './component/Banner';
import {Skills} from './component/Skills';
import {Projects} from './component/Projects';
import { Contact } from './component/Contact';
import {Footer} from './component/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />  {/* Updated usage */}
      <Banner />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

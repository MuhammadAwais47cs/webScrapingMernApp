import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/header.js';
import Footer from './components/layout/footer/Footer.js';
import Home  from './components/Home/Home.jsx';
function App() {
  return (
   <>
   <Router>
   <Header/>
 {/*  <Route exact path="/" component={Home} /> */}
<Home/>
   <Footer/>

   </Router>
   </>
  );
}

export default App;

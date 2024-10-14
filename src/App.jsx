
import './App.css';
import Header from './Header/Header'
import AllRest from './AllRest/AllRest'
import Footer from './Footer/Footer'
import { Routes,Route } from 'react-router-dom';
import ViewRest from './ViewRest/ViewRest';

function App() {
  return (
    <div className="App">
       <Header/>
        <Routes>
          {/* localhost:3001 */}
          <Route path='/' element={<AllRest/>}/>
          <Route path='/view/:id' element={<ViewRest/>}/>
        </Routes>
        <Footer/>
    
    </div>
  );
}

export default App;

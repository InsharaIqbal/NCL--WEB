
import { BrowserRouter as Router ,Route , Routes} from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Achivement from './pages/Achivement.jsx';
import Capacity from './pages/Capacity.jsx';
import Publications from './pages/Publications.jsx';
import Nopage from './pages/Nopage.jsx';
function App() {
  return (
  <>
  <div>

   
 <Router>
  <Navbar/>
<Routes>
  <Route index element={<Achivement/>}/>
  <Route path='/Honourandachivement' element={<Achivement/>}/>
  <Route path='/Publications' element={<Publications/>}/>
  <Route path='/Capacityandbuilding' element={<Capacity/>}/>
  <Route path='*' element={<Nopage/>}/>
 </Routes>
 
 <Footer/>
 </Router>



  </div>

  </>
  );
}

export default App;


import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import StopGame from './Components/StopGame';
import TextForm from './Components/TextForm';

import {
  BrowserRouter ,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>

   
    <BrowserRouter>
    <Link to="/">Sidebar</Link>
     <Routes>
     <Route path="Components/SideBar">
            <SideBar />
          </Route>

          <Route path="Components/Header">
            <Header />
          </Route>
             

     <Route path="Components/StopGame">
            <StopGame />
          </Route>

          <Route path="Components/TextForm">
      <TextForm />
      </Route>

      </Routes>
    </BrowserRouter>




 {/* <Header />
<TextForm />
<SideBar />
<StopGame />

    {/* <Router>
      <Link>
    
      {/* <Header />
      <SideBar />
      <StopGame /> */}
          {/* <Route path="/Header">
            <Header />
          </Route>
          
          <Route path="./TextForm">
      <TextForm />
      </Route>

          <Route path="/SideBar">
            <SideBar />
          </Route>
          <Route path="/StopGame">
            <StopGame />
          </Route>

        </Link>
    </Router> */} */ */
     {/* <div className='pageColor' >
     <Header />
     <SideBar />
     <StopGame />
     <TextForm />
    </div> */}

    </>
  );
}

export default App;


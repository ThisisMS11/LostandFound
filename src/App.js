import Navbar from './components/Navbar';
import './App.css';
import ItemMainBox from './components/LHS/ItemMainBox';
import Buttoncontainer from './components/RHS/Buttoncontainer';
import Login from './components/Authentication/Login';
import { useState } from 'react';
import Alert from './components/Alert.js'
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Signup from './components/Authentication/Signup';
import ItemState from './components/context/items/ItemState';
import UserEnteries from './components/User/UserEnteries';
import Footer from './components/Footer';

function App() {
  let Maindisplaystyle = {
    display: 'flex'
  }

  // ! This part will help us in showing different types of alerts at different stages of our application..

  const [alert, setAlert] = useState({ msg: 'IIITDMJ Lost and Found', type: "success" });

  // This way you can pass variables to arrow functions.
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    // using setTimeout we can delete this alert after 1.5 seconds
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }


  return (
    <>
      <ItemState>
        <BrowserRouter>
          <Navbar alerto={alert} showalert={showalert} />

          


          <Alert alerto={alert} showalert={showalert} />

          <Routes>
            <Route exact path="/" element={<div id='Maindisplay' style={Maindisplaystyle}>
              <ItemMainBox />
              <Buttoncontainer showalert={showalert} />
            </div>}>
            </Route>

            <Route exact path="/login" element={<Login showalert={showalert} />}></Route>
            <Route exact path="/signup" element={<Signup showalert={showalert} />}></Route>

            {/* for the user related entries and information */}
            <Route exact path="/account" element={<UserEnteries/>}></Route>

          </Routes>

          <Footer/>


        </BrowserRouter>
      </ItemState >

    </>
  );
}

export default App;

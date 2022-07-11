import Navbar from './components/Navbar';
import './App.css';
import ItemMainBox from './components/LHS/ItemMainBox';
import Buttoncontainer from './components/RHS/Buttoncontainer';
import Login from './components/Authentication/Login';

function App() {
  let Maindisplaystyle={
    display:'flex'
  }
  return (
    <>
      <Navbar />
      {/* <div id='Maindisplay' style={Maindisplaystyle}>
        <ItemMainBox />
        <Buttoncontainer />
      </div> */}

      <Login/>

    </>
  );
}

export default App;

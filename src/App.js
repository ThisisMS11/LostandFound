import Navbar from './components/Navbar';
import './App.css';
import ItemMainBox from './components/LHS/ItemMainBox';
import Buttoncontainer from './components/RHS/Buttoncontainer';

function App() {
  let Maindisplaystyle={
    display:'flex'
  }
  return (
    <>
      <Navbar />
      <div id='Maindisplay' style={Maindisplaystyle}>
        <ItemMainBox />
        <Buttoncontainer />
      </div>

    </>
  );
}

export default App;

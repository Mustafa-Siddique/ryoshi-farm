import logo from './logo.svg';
import Navbar from './components/Navbar';
import Staking from './components/Staking';
import Footer from './components/Footer';
import LiveStat from './components/LiveStat';

function App() {
 
  window.ethereum.on('chainChanged', (chainId) => {
    window.location.reload();
  });
  
  return (
    <div className="App">
      <Navbar/>
      <LiveStat/>
      <Staking/>
      <svg
        width="100%"
        className="position-absolute"
        style={{zIndex:"0"}}
        height="100px"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L0,40 Q250,120 500,40 L500,0 Z" fill="#1C1C1C" />
      </svg>
      <Footer/>
    </div>
  );
}

export default App;


import './App.css';
import data from './data';
import Main from './main';
import navbarIcon from './travel-icon.png'

function App() {
  const travelCard = data.map((items) => {
    return (
      <Main
      key={items.id}
      items={items}
      />
    );
  })
  return (
    <div className='app-cont'>
      <nav className='navbar'>
        <img src={navbarIcon} alt="travel-icon" className='navbar-items' />
        <h2>My travel plan</h2>
      </nav>
      {travelCard}
    </div>
  );
}

export default App;
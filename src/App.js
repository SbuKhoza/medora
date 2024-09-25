import './App.css';

function App() {
  return (
    <div className='container'>
      <nav>
        <div className='logo'>
        <img src='logo.png' alt='logo'></img>
        </div>
        <ul className="nav-links">
          <li><a href='about' className='ab'>About Us</a></li>
          <li><a href='furniture' className='ab'>Furniture</a></li>
          <li><a href='store' className='ab'>Our Stores</a></li>
          <li><a href='blog' className='ab'>Blog</a></li>
        </ul>
      </nav>
    
    <div className='maincont'>
      <div className='leftcont'>
        <div className='left'></div>
        <div className='left1'>
          <div className='mid'>
            <h1 className='midtext'>Mid Century <br />Modern Furniture</h1>
          </div>
          <div className='morden'>
            <p>Modern high quality and comfortable<br />available in our stores</p>
          </div>
          <div className='btn'>
            <button id='button'>Discover Now</button>
          </div>
        </div>
        <div className='left2'>
          <div className='scroll'>
            <p className='mscroll'>Scroll down</p>
            <img src='mouse.png' alt='mouse'></img>
          </div>
          <div className='chair1'>
            <img src='Chaiir1.jpg' alt='chair' className='chaiir1'></img>
          </div>
        </div>
      </div>

      <div className='centercont'>
        <div className='cent1'></div>
        <div className='chair2'>
          <img src='Chair2.jpg' alt='chair' className='chaiir1'></img>
        </div>
      </div>

      <div className='rightcont'>
        <div className='chair3'>
          <img src='Chair3.jpg' alt='chair' className='chaiir1'></img>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

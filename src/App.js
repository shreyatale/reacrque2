// 3. Create below template using React.js and make responsive
import './App.css';
import Datacon from './Datacon';
import Photo from './Photo';
function App() {
  return (
    
    <div >
    
    <div className="header">
    <div className="head1">
    <h2>MATERIAL<span>PRO</span></h2>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className='head1'>
    <button>Upgrade to Pro</button>
    <div className="cir"><img src="https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
    </div>
    </div>
    <div className='header1'>
    <div className="nav1">
    <h4><i class="fa-solid fa-play"></i>Dashboard</h4>
    <h4><i class="fa-solid fa-message"></i>Alerts</h4>
    <h4><i class="fa-solid fa-box"></i>Badges</h4>
    <h4><i class="fa-solid fa-circle-info"></i>Buttons</h4>
    <h4><i class="fa-regular fa-credit-card"></i>Cards</h4>
    <h4><i class="fa-solid fa-bars"></i>Layout</h4>
    <h4><i class="fa-brands fa-stack-overflow"></i>Pagination</h4>
    <h4><i class="fa-solid fa-wand-magic-sparkles"></i>Popover</h4>
    <h4><i class="fa-solid fa-gear"></i>Taitips</h4>
    </div>
   <div className="App1">
   <h5>Basic Cards</h5>
    <div className="App">
      <Datacon
      imgurl={"https://images.pexels.com/photos/19395799/pexels-photo-19395799/free-photo-of-aerial-view-of-paris-on-the-banks-of-river-seine-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
      text={"Card title"}
      subtext={"Card subtile"}
      para={"Some quick example text to bulid on the card title and make up the bulk of the cards content"}
     
      />
      <Datacon
      imgurl={"https://images.pexels.com/photos/24827102/pexels-photo-24827102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
      text={"Card title"}
      subtext={"Card subtile"}
      para={"Some quick example text to bulid on the card title and make up the bulk of the cards content"}
     
      />
      <Datacon
      imgurl={"https://images.pexels.com/photos/1322136/pexels-photo-1322136.jpeg?auto=compress&cs=tinysrgb&w=600"}
      text={"Card title"}
      subtext={"Card subtile"}
      para={"Some quick example text to bulid on the card title and make up the bulk of the cards content"}
     
      /> </div>
      <h5>Cards Content Types</h5>
      <div className="App">
     
      <Photo
      imgurl={"https://images.pexels.com/photos/16446088/pexels-photo-16446088/free-photo-of-colorful-cloths-over-house-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
      text={"Card title"}
      subtext={"Card subtile"}
      para={"Some quick example text to bulid on the card title and make up the bulk of the cards content"}
     
      />
      <Photo
      imgurl={"https://images.pexels.com/photos/22689113/pexels-photo-22689113/free-photo-of-a-black-and-white-photograph-of-a-water-lily.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
      text={"Card title"}
      subtext={"Card subtile"}
      para={"Some quick example text to bulid on the card title and make up the bulk of the cards content"}
    
      />
      <Photo
      imgurl={"https://images.pexels.com/photos/23532660/pexels-photo-23532660/free-photo-of-chute.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
      text={"Card title"}
      subtext={"Card subtile"}
      para={"Some quick example text to bulid on the card title and make up the bulk of the cards content"}
      
      /></div>
     </div>
      </div>
    </div>
  );
}

export default App;

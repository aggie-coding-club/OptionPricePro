
import './App.css';
const track = document.getElementById("image-track")

function App() {
window.onmousedown = e => {
  track.dataset.mouseDownat = e.clientX;

window.onmouseup = () => {

  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) *-100;
      nextPercentage = parseFloat(track.dataset.prevPercentage) +percentage;

  track.dataset.percentage = nextPercentage;


  track.animate({
    transform:  `translate(&{nextPercentage}%, -50%)`

      }, {duration: 1200,fill: "forwards"}    );
    
}

for(const image of track.getElementsByClassName('iamge')){

image.animate({
  objectPosition:  `${nextPercentage} 50%`
},{duration: 1200,fill:"forwards"}

);

}
}
}

export default App;

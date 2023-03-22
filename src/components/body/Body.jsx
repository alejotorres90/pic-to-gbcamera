import './Body.css';
import Explanation from './inner/Explanation'
import Share from './inner/Share'

function Body() {
  return (
    <div className="Body-container">
      <Explanation />
      <Share />
      <p className="Body-credits">The project was made using <a href="https://maple.pet/" target="_blank">maple mavica syrup</a>'s wonderful <a href="https://maple.pet/webgbcam/" target="_blank">webgbcam</a> as a base. Check it out!</p>
      <p className="Body-data">This app works entirely client-sided. No pictures or data will be stored in your device or any server.</p>
    </div>
  );
}

export default Body;
import Img from '../../assets/images/mountdemo2.jpg';
import "./mountain_image.css";

const Mountain_Image = () => {
  return (
    <div className="mountain">
        <div className="mountain-text">
          <h3>Wanderlust:</h3>
          <h5>a strong desire for or impulse to wander or travel and explore the world</h5>
          <h3>Motherhood:</h3>
          <h5>a person who loves unconditionally; a character builder; inspirator and healer;</h5>
          <h5>the maker and keeper of memories;</h5>
          <h5>a person much loved and admired.</h5>
        </div>
      <img src={Img} alt="mountain-img" />
      </div>
  )
}

export default Mountain_Image
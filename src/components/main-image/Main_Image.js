import Img from '../../assets/images/transparent.png';
import './main_image.css';

const Main_image = () => {
  return (
    <div className="main-img">
        <img src={Img} alt="main-img" />
    </div>
  )
}

export default Main_image
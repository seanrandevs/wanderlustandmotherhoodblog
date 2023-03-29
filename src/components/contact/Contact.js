import Header from "../header/Header";
import Footer from "../footer/Footer";
import './contact.css';
import MainImg from '../../assets/images/transparent.png';

const Contact = () => {
  return (
    <div>
        <Header />
          <div className="contact-section">
            <img src={MainImg} alt="" />
          </div>
        <Footer />
    </div>
  )
}

export default Contact
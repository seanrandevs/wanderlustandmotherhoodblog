import './footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="icons">
        <SocialIcon  style={{ height: 40, width: 40 }} network="facebook" />
        <SocialIcon  style={{ height: 40, width: 40 }} network="twitter" />
        <SocialIcon style={{ height: 40, width: 40 }} network="pinterest" />
        <SocialIcon style={{ height: 40, width: 40 }} network="instagram" />
        </div>
        <div className="email">
          <h6>Email</h6>
          <p>WanderlustandMotherhood@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
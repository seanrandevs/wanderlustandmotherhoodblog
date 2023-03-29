import './blog_page.css';
import Wineimg from '../../assets/images/winemd.jpg';
import Mountain from '../../assets/images/mountmd.jpg';
import AnxietyImg from '../../assets/images/anxiety-blog.JPG';
import WanderlustHitsImg from '../../assets/images/hitshard.jpg';
import DaysarelongImg from '../../assets/images/daysarelong.jpg';
import HardplungeImg from '../../assets/images/depression.jpeg';
import DatenightImg from '../../assets/images/datenight.jpeg';
import LovedEnoughImg from '../../assets/images/kidswerelovedenough.jpeg';
import RollerCoasterImg from '../../assets/images/hikingisarollercoaster.png';
import CookieJarImg from '../../assets/images//cookiejar.jpg';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Blog_page = () => {
  return (
    <div>
        <Header />
          <div className="blog-page">
            <Container>
                <Card>
                  <Card.Img variant="top" src={CookieJarImg} />
                  <Card.Body>
                    <h5>9/18/21</h5>
                    <Link to="/cookie-jar">
                    <Card.Title>The Reasons Why I Always Have Cookies in the Cookie Jar</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={RollerCoasterImg} />
                  <Card.Body>
                    <h5>9/11/21</h5>
                    <Link to="/roller-coaster">
                    <Card.Title>Hiking is an Emotional Roller Coaster and I Love the Ride</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={LovedEnoughImg} />
                  <Card.Body>
                    <h5>9/4/21</h5>
                    <Link to="/loved-enough">
                    <Card.Title>I Always End the Night Worrying if My Kids Felt Loved Enough That Day</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={DatenightImg} />
                  <Card.Body>
                    <h5>8/28/21</h5>
                    <Link to="/date-night">
                    <Card.Title>Can We Talk About Date Night?</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={HardplungeImg} />
                  <Card.Body>
                    <h5>8/21/21</h5>
                    <Link to="/hard-plunge">
                    <Card.Title>That Time I Took a Hard Plunge into Depression, but Found Myself</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={DaysarelongImg} />
                  <Card.Body>
                    <h5>8/14/21</h5>
                    <Link to="/days-are-long">
                    <Card.Title>The Days Are Long, But The Years Fly By</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={WanderlustHitsImg} />
                  <Card.Body>
                    <h5>8/7/2021</h5>
                    <Link to="/wanderlust-hits">
                    <Card.Title>When Wanderlust Hits Hard and Vacation is Too Far Away</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={AnxietyImg} />
                  <Card.Body>
                    <h5>7/31/21</h5>
                    <Link to="/anxiety">
                    <Card.Title>Raising a Son Who Suffers With Anxiety</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={Mountain} />
                  <Card.Body>
                    <h5>7/23/21</h5>
                    <Link to="/mountain-tops">
                    <Card.Title>My View From the Mountain Tops</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={Wineimg} />
                  <Card.Body>
                    <h5>7/18/21</h5>
                    <Link to="/wine-blog">
                    <Card.Title>Motherhood Goes Hand-in-Hand With Over Stimulation</Card.Title>
                    <div>Read More...</div>
                    </Link>
                  </Card.Body>
                </Card>
            </Container>
          </div>
        <Footer />
    </div>
  )
}

export default Blog_page
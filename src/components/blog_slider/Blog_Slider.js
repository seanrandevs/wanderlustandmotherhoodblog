import './blog_slider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import CookieJar from '../../assets/images/cookiejar.jpg';
import LovedEnough from '../../assets/images/kidswerelovedenough.jpeg';
import RollerCoaster from '../../assets/images/hikingisarollercoaster.png';
import DateNight from '../../assets/images/datenight.jpeg';
import HardPlunge from '../../assets/images/depression.jpeg';
import DaysAreLong from '../../assets/images/daysarelong.jpg';


const Blog_Slider = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1500, min: 767 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className="slider">
        <h2>Lastest Blogs</h2>
        <Carousel
        responsive={responsive}
        >
            <div className="card">
              <img src={CookieJar} alt="cookie-jar" />
              <h5>Sep 18th 2021</h5>
              <Link to="/cookie-jar">
              <h4>The Reasons Why I Always Have Cookies in the Cookie Jar</h4>
              <h6>Read More...</h6>
              </Link>
            </div>
            <div className="card">
              <img src={RollerCoaster} alt="roller-coaster" />
              <h5>Sep 11th 2021</h5>
              <Link to="/roller-coaster">
              <h4>Hiking is an Emotional Roller Coaster and I Love the Ride</h4>
              <h6>Read More...</h6>
              </Link>
            </div>
            <div className="card">
              <img src={LovedEnough} alt="loved-enough" />
              <h5>Sep 4th 2021</h5>
              <Link to="/loved-enough">
              <h4>I Always End the Night Worrying if My Kids Felt Loved Enough That Day</h4>
              <h6>Read More...</h6>
              </Link>
            </div>
            <div className="card">
              <img src={DateNight} alt="date-night" />
              <h5>Aug 28th 2021</h5>
              <Link to="/date-night">
              <h4>Can We Talk About Date Night?</h4>
              <h6>Read More...</h6>
              </Link>
            </div>
            <div className="card">
              <img src={HardPlunge} alt="hard-plunge" />
              <h5>Aug 21st 2021</h5>
              <Link to="/hard-plunge">
              <h4>That Time I Took a Hard Plunge into Depression, but Found Myself</h4>
              <h6>Read More...</h6>
              </Link>
            </div>
            <div className="card">
              <img src={DaysAreLong} alt="days-are-long" />
              <h5>Aug 14th 2021</h5>
              <Link to="/days-are-long">
              <h4>The Days Are Long, But The Years Fly By</h4>
              <h6>Read More...</h6>
              </Link>
            </div>

            
        </Carousel>
    </div>
  )
}

export default Blog_Slider



















// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import LifeAfterLoss from '../../assets/images/grandmother.jpg';
// import MomGuilt from '../../assets/images/momguilt.JPG';
// import Summertime from '../../assets/images/summertimemesses.jpg';
// import Bucketlist from '../../assets/images/bucketlistvaca.jpeg';
// import HowIFoundGod from '../../assets/images/howifoundgod.jpg';
// import StrongWilledSon from '../../assets/images/stongwilledson.jpg';

//   <div className="blog-slider">
//       <CarouselProvider
//       className="carousel"
//         visibleSlides={3}
//         naturalSlideWidth={150}
//         naturalSlideHeight={90}
//         totalSlides={6}
//         // step={3}
//         // hasMasterSpinner
//       >
//        <Slider>
//           <Slide index={0}>
//             <Image src={LifeAfterLoss} />
//           </Slide>
//           <Slide index={1}>
//             <Image src={MomGuilt} />
//           </Slide>
//           <Slide index={2}>
//             <Image src={Summertime} />
//           </Slide>
//           <Slide index={3}>
//             <Image src={Bucketlist} />
//           </Slide>
//           <Slide index={4}>
//             <Image src={HowIFoundGod} />
//           </Slide>
//           <Slide index={5}>
//             <Image src={StrongWilledSon} />
//           </Slide>
//         </Slider>
//         <ButtonBack className="button-back">Back</ButtonBack>
//         <ButtonNext className="button-next">Next</ButtonNext>
//       </CarouselProvider>
// </div> 
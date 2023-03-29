import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header';
import MainImage from '../main-image/Main_Image';
import BlogSlider from '../blog_slider/Blog_Slider';
import Footer from '../footer/Footer';
import MountainImage from '../mountian-image/Mountain_Image';

const Home = () => {
  return (
    <div>
        <Header />
        <MainImage />
        <BlogSlider />
        <MountainImage />
        <Footer />
    </div>
  )
}

export default Home
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import AboutMe from '../src/components/about_me/About_Me';
import Blogs from '../src/components/blog_page/Blog_page';
import Contact from '../src/components/contact/Contact';
import Articles from '../src/components/articles/Articles';
import WineBlog from '../src/components/blogs/Wine_Blog';
import MountainTops from '../src/components/blogs/Mountian_tops';
import Anxiety from '../src/components/blogs/Anxiety';
import WanderlustHits from '../src/components/blogs/Wanderlusthitshard';
import DaysAreLong from '../src/components/blogs/Daysarelong';
import HardPlunge from '../src/components/blogs//Hardplunge';
import DateNight from '../src/components/blogs/Datenight';
import LovedEnough from '../src/components/blogs/Lovedenough';
import RollerCoaster from '../src/components/blogs/RollerCoaster';
import Cookiejar from "../src/components/blogs/Cookiejar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="articles" element={<Articles />} />
          <Route path="wine-blog" element={<WineBlog />} />
          <Route path="mountain-tops" element={<MountainTops />} />
          <Route path="anxiety" element={<Anxiety />} />
          <Route path="wanderlust-hits" element={<WanderlustHits />} />
          <Route path="days-are-long" element={<DaysAreLong />} />
          <Route path="hard-plunge" element={<HardPlunge />} />
          <Route path="date-night" element={<DateNight />} />
          <Route path="loved-enough" element={<LovedEnough />} />
          <Route path="roller-coaster" element={<RollerCoaster />} />
          <Route path="cookie-jar" element={<Cookiejar />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;

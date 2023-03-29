import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import DaysarelongImg from '../../assets/images/daysarelong.jpg';

const Daysarelong = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={DaysarelongImg} alt="daysarelong" />
      <h5>Aug 14th 2021</h5>

      <div className="title">The Days Are Long, But The Years Fly By</div>
      <p>As the saying goes, time flies when you’re having fun.
        Time flies even quicker when you’re a mom.
        Each day, week, & month, you wonder how you’ll get through another one.
        Appointments to remember, school functions, grocery shopping, dinner, and then out of nowhere somebody gets sick.</p>
      
      <p>It can really make your head spin.
        Unfortunately, no matter how often you try to sit and savor the moments that you can catch your breath, you always end up blinking and another birthday is here.
        School years seem to drag, yet before you know it you have one in middle school.
        It’s funny how that happens.
        You try to hold on, notice their ever-changing smile.</p>
        
      <p>You hope you can remember that one word that they can’t quite say yet, and all too soon it will come out perfectly.
        You breathe it in, enjoying the smell of your baby fresh out of the tub, which quickly turns into the smell of deodorant, and eventually after-shave.
        It almost seems cruel how quickly it happens.
        I get it, that’s supposed to be the point of motherhood.</p>
        
        <p>You give birth to these sweet babies, teach them right from wrong and do your best to instill values, morals, and a good heart.
        All for them to go and be a positive member of society.
        But I wish it lasted longer.
        Not the days that I’m in tears trying to find the time, or the days that I fall into bed at night barely able to make it because the day drained me.</p>
        
        <p>I want more of those sweet baby laughs, toddler kisses, and talks with my teenager when he doesn’t hate me.
        I wish as they grew, instead of videos and pictures, we could somehow bottle up a moment, experience it again when we’re missing them.
        What I wouldn’t give to dive right back in just for a moment.
        But for now, I’ll just go and enjoy this moment, because all too soon this moment will also be just a memory.</p>
      </div>

    <Footer />
</div> 
  )
}

export default Daysarelong
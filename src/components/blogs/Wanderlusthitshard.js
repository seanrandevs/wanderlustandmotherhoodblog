import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import WanderlustHits from '../../assets/images/hitshard.jpg';

const Wanderlusthitshard = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={WanderlustHits} alt="wanderlusthits" />
      <h5>Aug 7th 2021</h5>

      <div className="title">When Wanderlust Hits Hard and Vacation is Too Far Away</div>
      <p>Today my daughter talked about how excited she was to go back on vacation.
        She dreamed her little daydream of what we would do and talked about how many months we have left before we leave.
        These are the times when vacation almost seems like a sad thing because I long for it so badly that it feels kind of like heartache.
        We don’t get to travel enough, see the world, and experience all this world has to offer.
        We have full-time jobs, school, bills, and responsibilities to take care of at home.</p>
      
      <p>Home is a happy place, filled with love and safety, but my husband and I are meant to travel.
        We don’t enjoy being home the same way other people do.
        Home is us being together, experiencing new things with our kids.
        Home can be anywhere for us.
        Showing our kids, and ourselves, that life looks so different for so many people.</p>
        
      <p>Even the smallest things are different just down the road a little.
        Restaurants change, accents are different and you get to see the small things that are specific to each town, each state.
        There’s so much to experience and learn.
        We just want to do it all, to show our kids all of it.
        It just doesn’t get to happen enough.</p>
        
        <p>We aspire to be the couple that retires and travels the country in an RV.
        We want to see every country we can, experience cultures we’ve never heard of.
        We want to shoot a dart at a map and take the next plane leaving for that exact spot.
        We want to climb every mountain, swim every ocean, hear every language, eat all the cuisines that the world has to offer.
        It’s a big dream, but dreaming keeps hope alive.</p>
        
        <p>When I’m stuck in the rut of daily life and it feels like my days are spent rushing, stressing, and working, it's dreaming of new experiences and far away places that keep me going.
        Aspirations keep us all going.
        Dreaming of tomorrow and what that will bring.
        Hoping that we can all fulfill our dreams, whatever that may be.
        Thank God for dreaming, for that Wanderlust feeling, and for hopes.
        Those are what keep us moving forward.</p>
      </div>

    <Footer />
</div>
  )
}

export default Wanderlusthitshard
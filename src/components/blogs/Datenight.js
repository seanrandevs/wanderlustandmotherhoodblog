import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import DateNightImg from '../../assets/images/datenight.jpeg';


const Datenight = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={DateNightImg} alt="date-night" />
      <h5>Aug 28th 2021</h5>

      <div className="title">Can We Talk About Date Night?</div>
      <p>I’m a firm believer in frequent date nights for any couple.
        However, when you’re married with kids it takes on a whole new level of importance.
        Date night lets you focus on each other again, remember why you said “I do”, and reconnect with no distractions.
        I’ve noticed that a lot of couples forget this, even the ones that don’t have kids.</p>
      
      <p>They think that because they see each other daily, have dinner together, talk often, that it somehow cancels out the need for a good date night.
        That’s the furthest thing from the truth.
        Keep pursuing each other, keep dating.
        Get dressed up in your favorite little black dress, nice suit, whatever the case may be, and go out!</p>
        
      <p>My husband and I have a classic date night place that we don’t get to visit nearly often enough.
        It’s a steakhouse called Ruth’s Chris.
        I’m sure most people have heard of it, but it’s such a special place for us.
        We started going when we were first dating and we’ve tried to make it back at least once a year since.</p>
        
        <p>Recently we were planning a getaway.
        It went from two days out of town, hotel booked, and everything
        That had to be canceled and it became only one day and staying close.
        Finally, it took another turn to only about 12 hours of alone time….
        You know how that goes.</p>
        
        <p>We made the best of it. We enjoyed every minute.
        I put on a dress that I’ve had for a year and hadn’t been able to wear it.
        A sparkly black number that makes me feel pretty.
        My husband popped tags off of some dress slacks and a new shirt that he bought with a date night in mind that just hadn’t happened yet.
        We don’t get to go very often.</p>
        
        <p>We want to, we try to, but life happens a lot!
        While we sat at our table, did we talk about the kids a lot?
        Of course, they make up such a big part of our world,
        but we got to do it in peace, in one of our favorite spots, over amazing food.
        We never touched our phones, except when I took a picture of our food of course.</p>
        
        <p>We connected…
        sometimes we talked about ourselves, about what we plan to pursue in the future.
        We talked about our relationship and experiences in our earlier days.
        Then we shared our favorite dessert over glasses of wine and whiskey, and we went home to enjoy a movie.
        The next morning we picked our kids up bright and early,
        It was just enough.</p>
        
        <p>We got to reconnect for just a little bit and we felt refreshed.
        It was exactly what we needed and I’m glad we kept fighting our way through the obstacles to make something happen.
        It would have been easier to just cancel out of frustration, but we didn’t.
        That’s how we keep the spark alive, and that’s why I’m a firm believer in date nights.</p>
      </div>

    <Footer />
</div> 
  )
}

export default Datenight
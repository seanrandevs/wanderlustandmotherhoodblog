import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import WineImg from '../../assets/images/winemd.jpg';

const WineBlog = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={WineImg} alt="wine-img" />
      <h5>July 18th 2021</h5>

      <div className="title">Motherhood Goes Hand-in-Hand With Over Stimulation</div>
      <p>Currently at the end of a very overwhelming day.

      Overstimulated, tired, hot, frustrated… did I say tired?</p>
      
      <p>I’ve had a long weekend with the family and packed it full of excitement and new experiences.          
        This always spells exhaustion for parents, but we always do it again and again… because that’s what we do.
        
        Not to mention that another long week is about to start.
        Thankfully it’s the summertime so at least there is a break from school and extracurricular activities.</p>
        
      <p>However, Sundays still bring the need for washing, drying & folding clothes.
        
        Meal prepping for the week for myself and the hubby.
                  
        Dishes need to be done, the floor is dirty, the counters need to be cleaned….
        
        When’s the last time I got around to the baseboard and the blinds?          
        Ugh… I won’t even think about it.</p>
        
        <p>So…
        
        I wanted to write this in real-time because there was a time that I didn’t understand the feeling that was “overstimulation”.
        
        I knew that I had anxiety at times, I’m pretty sure I’ve chalked it up to that on occasion….
        
        But really I just thought I was unreasonable and grumpy, and I never wanted to be that mom.</p>
        
        <p>However, I’m trying to learn to show myself grace.
        With that, I realized that this feeling had to be valid somehow and that even though I felt it, I was still a good mom.
        
        I researched it a little, read a few posts from people who suffer from something similar, and realized that when my brain has reached its limits that I get overwhelmed and need to step away.
        
        I have to take a minute away from the constant touch of a pet or child, the noise of my son yelling on his online game, my daughter’s iPad, my 
        husband’s show on the TV… the questions, the work that needs to be done… the list goes on.</p>
        
        <p>By giving myself this mommy time out, even if that’s just for five minutes, my mind settles itself and I can be calm again.
        
        This is something more moms, more parents, need to learn to do.
        
        Just take a minute mom.
        
        You deserve it.</p>
        
        <p>Show yourself the same grace you show to others, be kind to yourself. It’s the only way to make it out sane.
        
        So now I’m sitting and watching my favorite comfort show with my husband, who has so graciously hand-delivered a glass of my favorite red wine to me.
        This is what I’ve waited for, and this is me taking my time out.</p>
      </div>

    <Footer />
</div> 
  )
}

export default WineBlog
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import LovedenoughImg from '../../assets/images/kidswerelovedenough.jpeg';

const Lovedenough = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={LovedenoughImg} alt="loved-enough" />
      <h5>Sep 4th 2021</h5>

      <div className="title">I Always End the Night Worrying if My Kids Felt Loved Enough That Day</div>
      <p>Once my kids are in bed for the night, there’s always a sigh of relief.
        Once they have had their bath, teeth brushed, tucked in, and ready to sleep.
        Relief that I made it through another day, extra points if nobody is sick or mad at me.</p>
      
      <p>Right after that wave of relief always comes a little wave of worry.
        Did I spend enough time with them today?
        Did I yell too much?
        Do they know that they are my entire world and I love them more than life itself?
        It doesn’t always feel like it.</p>
        
      <p>Most kids can’t imagine the love of a parent, at least not until they become one themselves.
        So at the end of the day, do they know that I immediately regretted that time I felt overwhelmed and raised my voice?
        How could they possibly understand that I wanted to give in and let them have that video game they asked for?
        The thing is, if I don’t make them work for something in life, I fear they won’t understand the value of anything…
        So I said no.</p>
        
        <p>All these thoughts cross my mind as I try to wind down at the end of the night.
        Which makes winding down almost impossible.
        However, at the beginning of each morning, when I’m the first face they see, I always get a smile and a hug.
        They always say I love you, and ask for help or tell me a story.</p>
        
        <p>I get to hear about the dream they had, what they plan to do that day, or what they want to have for breakfast.
        When I see those sweet faces and hear the stories, that’s when I know that yesterday I still made them feel loved.
        They didn’t go to bed at night thinking about the times I yelled, or when I said no.</p>
        
        <p>They remember when I made them their favorite food.
        They know that I’m the person to go to when they need help.
        They know that even when I get mad, I never stop loving them.
        That’s the evidence that my kids feel that overwhelming love that I feel.</p>
        
        <p>They just don’t know that’s what it is.
        They just know that I’m their mom.
        A safe place, superhero, chef, personal driver, maid, and sometimes a boogeyman exterminator.
        We can only ever be ourselves for our children.
        The best part is, we forget all too often that being ourselves is exactly what they need, and they never go a second without feeling loved.</p>
      </div>

    <Footer />
</div> 
  )
}

export default Lovedenough
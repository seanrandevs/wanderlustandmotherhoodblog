import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import Mountain from '../../assets/images/mountmd.jpg';


const Mountian_tops = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={Mountain} alt="wine-img" />
      <h5>July 23rd 2021</h5>

      <div className="title">My View From the Mountain Tops</div>
      <p>I’ve found very few things in life bring the same challenge as motherhood.
         Surely nothing else brings the same reward.</p>
      
      <p>However, one of my favorite vacation spots is Tennessee.
         The hiking and views in Tennessee are what my dreams are made of every night and what I daydream about while I work.

         Hiking is a challenge to say the least.

         In the visits we’ve had, we’ve discovered and conquered Mount Leconte which is a summit of 6,593 feet in the air a few times.</p>
        
      <p>The kicker.?…..

            We did this for the first time with a 2-year-old on our backs.
            My son was 10 and very adventurous, he needed thrills and experiences.

            We went to Tennessee just as a family with a cousin in tow and heard about this hike.
            We couldn’t pass it up.</p>
        
        <p>It would have been easy for me to let the guys do it and stay behind with my little girl, but I couldn’t pass up the opportunity to show her that summit.

            It was so hard…

            I won’t say we didn’t regret it at some points.

            The points when our backs felt like they might snap and my daughter felt like an elephant in that backpack.</p>
        
        <p>Oh, but the views!
            The parts where we felt like we were looking at postcards of views that people only dream about.

            We smelled the fresh pine, listened to the absolute stillness and quiet.
            The birds singing because we were in their territory now.
            Higher than we’d ever been. Closer to the clouds, the sky, the tree tops.

            It was breathtaking.</p>
        
        <p>There’s a final stretch a few minutes before reaching the top that seems as though God himself spent extra time on.
            It’s a dirt aisle lined with pine trees….
            Or Christmas trees as my kids like to say.

            It smells like heaven, a cool breeze is always blowing through it, and it’s flat and easy to walk through.</p>
        
        <p>Oh if I could just be there right now…

            We reached the top, and it took our breath away.
            The whole journey, and all the parts that seemed excruciating were so worth it.

            The air is so fresh, the sky so beautiful, and there’s a stillness that I’ve never experienced.</p>
            <p>
            We dream about this hike all the time, we talk about the adventure that the day was and how we’ve never regretted it.

            Days like that are the ones where I prove to my kids that we can do hard things, because that’s where we find all the reward.
            </p>
      </div>

    <Footer />
</div> 
  )
}

export default Mountian_tops
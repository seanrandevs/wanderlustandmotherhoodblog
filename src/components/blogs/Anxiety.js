import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import AnxietyImg from '../../assets/images/anxiety-blog.JPG';

const Anxiety = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={AnxietyImg} alt="wine-img" />
      <h5>July 31st 2021</h5>

      <div className="title">Raising a Son Who Suffers With Anxiety</div>
      <p>As a mother, we always want to be able to take our children’s fear or pain away.

          It’s easy when they are small and had a nightmare. That’s as simple as cuddling on the couch and a few comforting words.

          However, when you have a son who has anxiety, these things are just the start and only get more complicated as he gets older.

          It gets to the point where you can’t fix it as quickly, sometimes all you can do is be present. As a parent who wants to take the fear away, it’s so tough.</p>
      
      <p>It started when he was young and needed reassurance constantly.
            Are you sure?
            What happens next?
            What if you forget?
            You’re going to pick me up, right?</p>
          It also occasionally sounded like a child who likes to have a plan.
            What are we doing today? And then what after that?
            Who will be there?
            What time exactly?
        
        <p>As he’s grown older it’s changed and molded into different things.
            He’s struggled some times more than others.

            From 11-12 was by far the hardest years.

            They are aware of what’s happening around them more than ever, but still not totally in control of things. (As if any of us really are, right?)
            But now he’s realized it.</p>
        
        <p>Growing up is right around the corner. Driving, dating, working, it all starts to sink in.

            When it was hard, it was so hard.

            My son played basketball for several years, and before a game one day we met the parents of another child on his team.

            This boy struggled through anxiety as well.
            He was nervous because he didn’t know what color to wear that day. The jerseys were reversible depending on the team they played, and while easily fixable, this created fear in him. He wanted to be prepared.</p>
        
        <p>His dad reassured him by saying “You’ll end up right about the choice you made, life tends to work itself out like that. The best part though is that even if you’re wrong, you have plenty of time to fix it.”

            Turns out he was right, the jerseys were blue that day, and he breathed a sigh of relief.

            His dad was a doctor and while we discussed the issues we have as well, he told us that the children who have anxiety, who struggle through decisions, they use critical thinking. Those are the kids who have compassion, leadership, determination.</p>
        
        <p>
        Those feelings of overachieving when they’re young turn into drive and passion as they get older.

            He’s 13 now and even though we still see signs of it, he’s learned coping mechanisms and how to work his way through the thoughts of fear.

            He’s a strong, smart, compassionate young man that I am so proud of.

            He tells stories of wanting to get rich as he gets older, but it’s never to live in a mansion and drive a fancy car.</p>
            <p>It’s because he has dreams of buying property, starting a business, and supplying homes for homeless people.
                He says they would live on the property, have their own home, and work for his company.

                He wants to supply scholarships to kids who can’t afford school.

                He wants to be the change we all need to see. He wants to take action.</p>
                <p>It’s in these dreams that he shares with us that I see what the other parent was explaining. He was right.

                This fearful young man was just so aware of this world and its problems. He had no way to fix it, but he has plans.

                All the struggling is worth it every time I hear that passion spilling from his heart. His plan, his dreams, his big heart.

                I’m the parent of a compassionate leader, a change-maker…
                but when they’re young, sometimes it just looks like a child with fears.</p>
      </div>

    <Footer />
</div>
  )
}

export default Anxiety
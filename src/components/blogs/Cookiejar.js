import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import CookiejarImg from '../../assets/images/cookiejar.jpg';

const Cookiejar = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={CookiejarImg} alt="cookie-jar" />
      <h5>Sep 18th 2021</h5>

      <div className="title">The Reasons Why I Always Have Cookies in the Cookie Jar</div>
      <p>Traditions with my kids have always been very important to me.
        I’m that mom that keeps the same tattered old book that our dog chewed the corner of years ago to read every Christmas Eve.
        Traditions are important to me because I want my kids to feel consistency and build memories for all the exciting moments in life.
        One day when they are older and are on their own, I hope they carry some of them on.</p>
      
      <p>I hope to see them use that same book, or maybe one that is special to them for some reason, to read to their kids.
        I hope to see pictures of them dying eggs for Easter the same way we did, always on the same day and then letting their kids make deviled eggs with it like they got to.
        Watching those things unfold will show me that the memories and the feeling I was trying to create paid off.
        I do things like that for more than just holidays and birthdays.
        I try to build those small consistencies and traditions in daily life.
        The ones that I want them to look back on and realize that I was putting effort even when they didn’t notice.</p>
        
      <p>One of these things is with something as simple as a tin cookie jar I keep on my kitchen counter at all times.
        You can always open it and find cookies.
        They aren’t always fresh-baked, sometimes they are just cheap packs of shortbread cookies, but they’re always there.
        My kids always go to that jar and grab a snack, sometimes more of them than they should.
        Even if they don’t realize it, I can tell the certainty they feel when they go to that cookie jar and know something will be in it.</p>
        
        <p>They even have friends that come over, and they walk over to that cookie jar. Even they know, there will be something there.
        It was cheap because I didn’t want one the kids could break.
        I needed it to be sturdy, and it hardly matches my decor.
        The cookies are typically pre-packaged, store-bought cookies because it’s quick and easy.
        None of that matters.
        It’s about the fact that I always make sure to refill it.
        Every grocery trip, when the cookies are low, I buy another pack.</p>
        
        <p>Out of all of my little, or big traditions, this one is my favorite.
        It’s just so small and seems pretty unimportant in daily life…..
        But I believe it’s building a foundation of consistency and tradition that my kids will always remember.
        Because that’s how life works.
        It’s in the small details that we find the most love.</p>
      </div>

    <Footer />
</div> 
  )
}

export default Cookiejar
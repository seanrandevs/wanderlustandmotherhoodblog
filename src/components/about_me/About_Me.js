import Header from "../header/Header";
import Footer from "../footer/Footer";
import './about_me.css';
import ProfileImg from '../../assets/images/aboutme.jpg';
import FamilyImg from '../../assets/images/familypic.jpg';

const About_Me = () => {
  return (
    <div>
        <Header />
          <div className="about-me">
            <div className="name">Alicia Ransonet</div>
            <img className="profile-img" src={ProfileImg} alt="profile-img" />
            <p>As I'm sure you've heard before, I'm a full-time working mom with a fairly demanding job.
                Of course, being a mom is far more demanding and always comes first.
                This makes things stressful, a little tough sometimes, but always worth it.</p>
            <p> Having friends along for the ride, readers who want to listen, and sending some inspiration into the universe when I come across it is why I want to do this.
                I started exploring outlets and things that would help me to feel that fire again.
                You know that feeling?</p>
            <p> That fire you need when you're lost in everyday life and things blur together.
                Trying to just get from one day to the next without losing your cool, getting sick, or just having a melt-down?
                That burning that makes you feel excited about life.</p>
            <p> I feel that every time I travel, and I need to chase that feeling in everyday life. I need to find that fire in the ordinary.
                My wonderful husband came across an ad about "content and copywriting". I've always had a way with words, I've always loved reading and writing. Poetry, books, you name it, I love words.
                He brought this up to me and I started to explore it.
                Blogging is a big first step in chasing my new found dream.</p>
            <p> Learning to express myself openly, blogging ordinary things, talking about things that matter, whatever it may be.

                I need this, it makes me feel the fire again, and it terrifies me at the same time.

                What if I fail?.. Oh, but what if I fly?</p>

            <p> This has been a moto in my life for quite some time now.

                I was once very comfortable in the familiar, living close to family, working the same old job for years. Boring, but familiar....

                I broke that barrier, moved to a new city with more opportunity, found a new job, and while more demanding is also more fulfilling and I've learned SO MUCH.

                Did I go through a crippling depression in between because change terrified me?</p>

            <p> Maybe...

                but, when I came through on the other side and realized the ride I had been on, and the beautiful life we'd built... this moto became a daily affirmation.
                I couldn't have done any of this without the support of my husband and kids, and I've never looked back.
                This is why I don't think I have anything to lose, so here it goes!</p>
                <img src={FamilyImg} alt="family-pic" />
                <p>
                <p><b>A little more about me? </b></p>
                Alicia
                Married with two kids
                Blessed to have all the loves of my life under one roof and doing this life together.</p>
                <p>
                <b> What's to come </b></p>
                <p>
                Stay tuned for future posts about my experiences as a mom, wife, full-time employee, lover of travel, new blogger, and whatever else life throws my way! Hopefully a future content and copywriter. I am excited to start this journey, and I can only hope that I can inspire you.
                See you real soon!
                </p>
          </div>
        <Footer />
    </div>
  )
}

export default About_Me
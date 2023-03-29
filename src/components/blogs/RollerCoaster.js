import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blog.css";
import RollerCoasterImg from '../../assets/images/hikingisarollercoaster.png';

const RollerCoaster = () => {
  return (
    <div>
    <Header />
    <div className="blog">
      <img className="blog-img container" src={RollerCoasterImg} alt="roller-coaster" />
      <h5>Sep 11th 2021</h5>

      <div className="title">Hiking is an Emotional Roller Coaster and I Love the Ride</div>
      <p>If you’ve never been hiking before, or you’ve gone and never noticed, let me explain something to you.
        Hear me out.
        There are several emotions that you go through when you do a good hike.
        The hikes where you struggle and have to really try to get to the top.
        The ones that make you sweat, maybe even curse a little…</p>
      
      <p>When you first start, the immediate excitement always hits.
        You’ve been waiting for this for what seems like ages.
        You’ve been missing the mountains, the trails, needing to reconnect with nature.</p>
        
      <p>We start early, so it’s usually still cool outside, you have a belly full of warm food, and you’re at the top of your game.
        You smell the trees, hear the rustling of the wind, or maybe it’s an animal. Who knows?
        You feel the breeze on your face and you can hear the water in the distance.
        You know eventually, that will be a stopping point to relax and get a drink or find a rock.</p>
        
        <p>You start walking, full of charisma, picturing the end results and the beautiful view.
        Not too long after, the heat starts to hit, even if it’s cool outside.
        Hiking will do that.
        You have a backpack on, probably with water and snacks, maybe even a bear bell.</p>
        
        <p>It warms up and your jacket has to come off, if it wasn’t up before, you might even put your hair up.
        You can hear that darn bear bell that’s supposed to be there to keep the bears back, but right now it’s just kind of annoying you.
        Every move you make, it sounds off.</p>
        
        <p>You start to think about how it might have been nicer to just stay in the cabin.
        You want to break, but you just stopped recently and that’s just prolonging you reaching the top anyway.
        But you know what you do?
        You keep pushing, you hit the halfway point and enjoy what it has to offer.</p>
        
        <p>Sometimes that’s a small waterfall, maybe a preview of what’s to come.
        Sometimes it’s just a bridge over rushing water or a cave.
        You remember why you’re doing it.
        You remember how staying home or at your cabin today wouldn’t have led you to such adventure.</p>
        
        <p>You start the rest of the trail, renewed with the excitement you started with, and the process continues.
        This time, the end, just when you were almost at your breaking point, this is the top of the mountain.
        There is nothing like that air.
        There is nothing like the sound of those birds, that sky, that zen feeling.
        You thank God for that view, and for the ability to get up there to see it.
        You thank yourself for not giving up, and you wonder why anyone wouldn’t want to enjoy that ride.</p>
        
        <p>Roller coasters have nothing on those mountains.
        Mountains teach us lessons about life.
        Something new and maybe unknown will usually be scary.
        Maybe not right away, maybe only once we’ve really taken the time to think about it.
        Maybe only once it’s proven to be harder than expected.
        That’s the beauty of the mountains.
        In life, there are similar situations.</p>
        
        <p>Sometimes there are people that can cushion the blow, do hard things for us, or tell us we don’t have to do them at all if that makes us happier.
        Those are the enablers that make us weaker.
        The mountains won’t enable you.
        You either make the climb, or you’ll only ever see pictures.
        You do it yourself, you fight through the fear, the sweat, the burn, or you don’t get the reward.
        We should listen to nature more, it knows what it’s doing.</p>
      </div>

    <Footer />
</div> 
  )
}

export default RollerCoaster
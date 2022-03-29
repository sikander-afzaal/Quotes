import "./App.css";
import React, { useState } from "react";
import dice from "./Assets/images/icon-dice.svg";
import dividerDesk from "./Assets/images/pattern-divider-desktop.svg";
import dividerMobile from "./Assets/images/pattern-divider-mobile.svg";
import music from "./Assets/muusic.mp3";
function App() {
  const data = [
    {
      quote: `kalamkaar hu ma, na kar tu meri shaan ma ghustaakhi // meri awwazz sun k doosron ki bolti ruk jaati /`,
    },
    {
      quote: `Ishq-e-mehboob ma chahiye mehfil eik hi hasti k sath // saans nahi aata aur badal jaata ha khoon ka rang, jab aye masti ki raat`,
    },
    {
      quote: `mehboob k gham e maut ma khatam kr diya lahu ka jaam // shaadi ho gayi aur bhool gaya bahu ka naam`,
    },
    {
      quote: `rabb nay di mehboob ko saaray aalam ki shaan // Meri Shayari nay le li ghalib ki jjaan`,
    },
    {
      quote: `karam ha rabb ka chunache chaman hain mujhse door // cheen li main nay teri izzat, aur teri mardaangi kidhar ha wo khudse pooch`,
    },
    {
      quote: `ilm ti talab ma tu shaan ko bool ja // par iska ye matlab nahi k tu apna deen ar imaan bhool ja // chal uthkay school ja`,
    },
    {
      quote: `kalamkaar hu ma, na kar tu meri shaan ma ghustaakhi // meri awwazz sun k doosron ki bolti ruk jaati /`,
    },
    {
      quote: `Saans ruk jaati baray baron ki mere andaaz se // bolti band sabki mere sher k aaghaaz se`,
    },
    {
      quote: `gunah k shar se ins o jaan haraam khaata ha din raat //chand lamhon ma izzat kho jaata ha insaan`,
    },
    {
      quote: `koshish ki in bhangion ne mujhay mere takh se hataanay ki // fath haasil ki manay jab mere khilaaf sab ki awaazein thi`,
    },
    {
      quote: `slap u in da pecs cause i'm shorter than youu, YEAH!!`,
    },
    {
      quote: `ibtedah se intehah krdi tu nay mujhay bhatkaanay ma // inqelab ka intezaar tha choonkay ye tabah ho gaye mere hatjaanay say`,
    },
    {
      quote: `The light that shines into your eyes will soon desert you in the depths of the gloomy nothingness if you don't change your ways.`,
    },
    {
      quote: `10 toes deep in the opp block, cheffed the mandem who tried to cock block, rekt the meat up in the hot box`,
    },
    {
      quote: `If you SMelllllll what the RRROCCKKKKK, is Cooking!!`,
    },
    {
      quote: `i told her about my luv fo eeguls, she say "baaz ajao" 😦 😦 😦`,
    },
    {
      quote: `Chawwl aur dhakkan sath hi sath bana diya // kuch aur nahi tu laali paap pakra diya`,
    },
    {
      quote: `I am the epitome of Swag. I am, What I am' Yet you ask, Where does the swag come from. I feed off of Hate`,
    },
    {
      quote: `teri tind se qamar ki roshni barish ki tarah barras rhi ha // saa'il hoo main, jawaab ki talab ma aag bharak uthi ha`,
    },
    {
      quote: `hadd ha chaman ki`,
    },
    {
      quote: `Eik baal nahi bacha`,
    },
    {
      quote: `Real Eyes Realise Real Lies`,
    },
    {
      quote: `abhi ghar aaya hoo, eik glass paani piya ha`,
    },
    {
      quote: `When the poetry returns you better sprint fast // cuz imma leev u in the dirt when i sprint past`,
    },
    {
      quote: `Who is my favorite DBZ character?? You could say I can pick a load`,
    },
    {
      quote: `you pricks must think I have writer’s block // the way you try to write me off`,
    },
    {
      quote: `You Couldn't be honest even if you played for the bucks`,
    },
    {
      quote: `man want a fair fight but nah, revolver is onomatopoeic // it goes stu-tu-tu-tu-tu-tu- tuter when i see him`,
    },
    {
      quote: `perhaps you could describe me as 'calm`,
    },
    {
      quote: `ain't no one like me, check the thesaurus`,
    },
    {
      quote: `The Greatest Of All Time and I got a lifetime left`,
    },
    {
      quote: `kaise keh saktaha tu k jaam ma lazzat nai / kafir k ghar ja us k dil ma sharam nahi / Fahad k sar ma ja us k brain ma dimag nahi`,
    },
    {
      quote: `is it possible to breath in what another has breathed out???`,
    },
    {
      quote: `Too Good? No, I'm Too Great // Just like 2 Trey in the Flu Game`,
    },
    {
      quote: `MCBC se reaction hota rehta ha'`,
    },
    {
      quote: `Too Good? nah, I'm too Great // Just like 2 Trey in the Flu Game`,
    },
    {
      quote: `ain't nothin' civil bout this civil war // grip a four, griyffindor? This'll have you lyin' on your chest`,
    },
    {
      quote: `Same brush they use to stroke your ego when they part of it / will be the same 1 they use to sweep yo name under the carpet with`,
    },
    {
      quote: `You'll be havin dreams when i hit you // and if we beef i got magazines for the issue`,
    },
    {
      quote: `nakal krtay hain meri, kabhi baraabri nahi kr paye // talwar se tez lafz, ye mere sher se hi dar jaein`,
    },
    {
      quote: `lafzon k daant nahi pr phir bhi kaat dete hain rishton ko 😦`,
    },
    {
      quote: `mushkilaat ma tu hydrogen carbon ko bhi chor jaata ha // sharaabi pcl5 mila lo, oh ko tittar bittar kr jaata ha`,
    },
    {
      quote: `I'm a wordsmith, Whenever I spell you should fear what I conjured // I'm a master in which craft? This craft`,
    },
    {
      quote: `cold with it, I freeze your frame without photo flashin' // Got this joint on lock but I'm not robo dancin' //`,
    },
    {
      quote: `just to count mah cash you need a calculus masters bish`,
    },
    {
      quote: `ae quaid e aazam tera ehsaaaa nihe ehsaan`,
    },
    {
      quote: `Fahad man another sindhi joke WILL get you ROCKED // Punches Harder than CRYStals will spill on you dawg!`,
    },
    {
      quote: `aqal ho kam magar beshak jaanta ha har zaheen larka // chicken k bina biryani ha jaise halaq k baghair "Aeen" parhnad`,
    },
    {
      quote: `beshak saza ha nasha ye banisbat jaam k // hum nay ki ghustaakhi se beghawati saza e kaand walay kaam se`,
    },
  ];
  const [quote, setQuote] = useState(data[1].quote);
  const [number, setNum] = useState(0);
  const [className, setClassName] = useState(false);
  const [trans, setTrans] = useState(false);
  const random = () => {
    setTrans(false);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum].quote);
      setNum(randomNum);
    }, 450);

    setClassName(true);
    setTimeout(() => {
      setClassName(false);
    }, 150);
    setTrans(true);
    setTimeout(() => {
      setTrans(false);
    }, 450);
    const audio = document.querySelector(".audio");
    audio.play();
  };
  return (
    <div className="App">
      <div className="box">
        <h2 className="head">Quote #{number}</h2>
        <p className={`advice ${trans ? "" : "trans"}`}>
          &#8220; {quote}
          &#8221;
        </p>
        <img src={dividerDesk} alt="" className="divider desk" />
        <img src={dividerMobile} alt="" className="divider mob" />
        <div onClick={random} className={`dice-div`}>
          <img
            src={dice}
            alt=""
            className={`dice  ${className ? "shake" : ""}`}
          />
        </div>
      </div>

      <audio className="audio" src={music} autoPlay loop></audio>
    </div>
  );
}

export default App;

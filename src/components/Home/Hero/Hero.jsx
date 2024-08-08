import { HeroItem } from "./../../../data";
import "./Hero.css";
import Line from "./../../../assets/img/Lines.png";
import HeroItems from "./HeroItems";
import HeroItems2 from "./HeroItems2";


export default function Hero() {
    return (
        <section id="Home" className="Hero-Container relative z-0  from-blue-50 via-blue-100 to-white dark:from-[#1E293B] dark:via-[#334155] dark:to-[#0F172A] ">
            <div className=" relative   w-full">
                    <img className="bacg  z-0 rounded-xl" src={Line} alt="" />
                    <div className="Container-Heroo h-full flex items-center justify-center  gap-8 absolute top-0">
                        <HeroItems Item={HeroItem} />
                        <HeroItems2 />
                    </div>
            </div>
            
        </section>
    );
}
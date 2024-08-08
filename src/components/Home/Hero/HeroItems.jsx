import { Link } from "react-router-dom";
import "./Hero.css";

export default function HeroItems({ Item }) {
    return (
        <div className="px-20 text-center	">
            <div>
                {Item.map((el, index) => (
                    <div className="About-container w-full flex flex-col items-center justify-center" key={index}>
                        <div className="flex  flex-wrap ">
                            <h1 className= " text dark:text-white text font-normal text-6xl ">{el.Hi}</h1>
                            <h1 className=" text dark:text-white  text font-bold text-6xl">{el.Name}</h1>
                        </div>
                        <div>
                        <h1 className="text dark:text-white  text font-bold text-6xl ">{el.Title}</h1>
                        <p className=" text2 dark:text-gray-300  text mt-5 text-lg text-gray-500 ">{el.P_title}</p>
                        </div>
                        <button className="botton dark:bg-[#583FBC] dark:text-white buuton-Cv w-36 h-14 flex items-center justify-center bg-white mt-10 rounded-lg">
                            <Link to="https://drive.google.com/file/d/1nF6atH-Agfi3gjJGn9PSNKygXDtHYnc9/view">
                                Download CV
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
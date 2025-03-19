import { Link } from "react-router-dom";

export default function HeroItems({ Item }) {
    return (
        <div className="px-4 sm:px-10 md:px-20 text-center">
            <div>
                {Item.map((el, index) => (
                    <div className="About-container w-full flex flex-col items-center justify-center" key={index}>
                        <div className="flex flex-wrap">
                            <h1 className="dark:text-white font-normal text-4xl sm:text-5xl md:text-6xl">
                                {el.Hi}
                            </h1>
                            <h1 className="dark:text-white font-bold text-4xl sm:text-5xl md:text-6xl">
                                {el.Name}
                            </h1>
                        </div>
                        <div>
                            <h1 className="dark:text-white font-bold text-4xl sm:text-5xl md:text-6xl">
                                {el.Title}
                            </h1>
                            <p className="dark:text-gray-300 mt-5 text-base sm:text-lg md:text-xl text-gray-500">
                                {el.P_title}
                            </p>
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

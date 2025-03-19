import { HeroItem } from "./../../../data";
import HeroItems from "./HeroItems";
import HeroItems2 from "./HeroItems2";

export default function Hero() {
    return (
        <section className="relative z-0 from-red-50 via-blue-100 to-white dark:from-[#1E293B] dark:via-[#334155] dark:to-[#0F172A]">
            <div className="relative w-full">
                <div className="flex flex-col-reverse gap-4 items-center md:flex-row">
                    <HeroItems Item={HeroItem} />
                    <HeroItems2 />
                </div>
            </div>
        </section>
    );
}

import portfolioImg from "../../src/assets/portfolio.jpg";
import programmingImg from "../../src/assets/peakpx3.jpg";

export default function Home() {
return (
<>
    <div className="flex justify-between items-center  ">
    <div className="text w-3/4 px-10 bg-[#001220] self-stretch flex items-center relative ">
        <div className="inner-text">

        <h1 className="mb-4 font-bold text-amber-400 font-Yusi">
            Welcome to My Portfolio
        </h1>
        <p className="mb-10 text-stone-400 font-Playwrite">
            This is a simple Portfolio app using React.
        </p>
        <p className="w-1/2">
            Junior React developer passionate about learning and exploring new
            technologies. Currently focused on mastering front-end development
        </p>
        </div>
        <div className="img-background bg-[#001220] p-8 absolute right-[-10%] rounded-t-full">
        <img
            src={portfolioImg}
            className="rounded-t-full w-full hover:scale-110 transition-all"
            alt="Mohamed Taha"
        />
        </div>
    </div>

    <div className="image w-1/4 bg-slate-800">
        <img
        src={programmingImg}
        className=" w-full bg-cover"
        alt="Mohamed Taha"
        />
    </div>
    </div>
</>
);
}

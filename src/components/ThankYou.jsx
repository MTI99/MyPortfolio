// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ThankYou() {
return (
<>
    <div className="flex min-h-screen">
    {/* Left Amber Section */}
    <div className="w-1/4 bg-amber-400">
        <div className="sticky top-0 p-8">
        <h2 className="text-black font-bold text-xl tracking-wide">
            PORTFOLIO.
        </h2>
        </div>
    </div>

    {/* Main Content Section */}
    <div className="flex-1 justify-between bg-gray-900">
        <div className="relative min-h-screen p-12 flex gap-8 items-center">
        {/* Lottie Animation */}
        <div>
            <img
            src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80"
            alt="Designer looking at wall of designs"
            className="rounded-lg shadow-xl w-[400px] object-cover"
            />
        </div>
        {/*  <DotLottieReact
        src="https://lottie.host/9f022819-2dff-4b4d-9e9a-e5ca1c7c8d89/UQuUEY3UqQ.lottie"
        loop
        autoplay
        />
    </div> */}

        {/* Content Section */}
        <div className=" max-w-2xl">
            <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-white text-6xl font-bold tracking-tight">
                THANK YOU
                </h1>
                <span className="text-amber-400 text-xl font-medium block">
                For visiting my portfolio
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                rutrum leo tellus, eget blandit urna consequat sit amet.
                Aenean tincidunt lacus eget purus dictum
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
                {/* <button className="bg-amber-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-amber-500 transition-all duration-200 transform hover:scale-105">
            See More My Portfolio
            </button> */}
                <a
                href="#contact"
                className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-medium hover:bg-amber-400/10 transition-all duration-200 transform hover:scale-105"
                >
                Contact Me!
                </a>
            </div>
            </div>
        </div>

        </div>
    </div>
    </div>
</>
);
}
{
/* <img
src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80"
alt="Designer looking at wall of designs"
className="rounded-lg shadow-xl w-[400px] object-cover"
/> */
}

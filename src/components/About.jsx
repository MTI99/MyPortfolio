import aboutImg from '../assets/about.jpg'
// import backgroundImg from '../assets/blob-haikei.svg'

export default function About() {
return (
<>
    <div id='about' className="about h-screen py-10 bg-gradient-to-r from-stone-600 to-amber-400">
    <div className="py-5 text-center text-5xl border-b-2 border-amber-400 w-fit m-auto font-Yusi my-10">
        <h2>Who I Am</h2>
    </div>
    <div className=" py-14 flex gap-5">
        <div className="about-text w-1/2 font-Yusi">
        <p>
            Mohamed Taha is a Software Engineer, passionate about technology
            and its impact on the world. He has a keen eye for detail and a
            strong communication skills. He is always eager to learn and
            improve his skills.
        </p>
        </div>

        <div className="about-image w-1/2 rounded me-5">
        <img src={aboutImg} className='rounded-full m-auto' alt="Mohamed Taha" />
        </div>
    </div>
    </div>
</>
);
}

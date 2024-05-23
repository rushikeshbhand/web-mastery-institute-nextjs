import Image from "next/image";
import Courses from "./Courses/page";
import OurServices from "./OurServices/page";
import About from "./About/page"
import Contact from "./Contact/page"

export default function Home() {
  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row mx-10 lg:gap-64'>
        {/* first section */}
        <div className='mt-16'>
          <h2 className='text-indigo-600 text-2xl'>Ready to learn?</h2>
          <h1 className='text-4xl lg:text-6xl my-5 font-extrabold'>CODING AND <br /> IT CLASSES</h1>
          <p className='text-xl'>Transform your career with us! <br /> IT Training Institute for exceptional learning experience. <br />
            Join now!</p>
        </div>
        <Image src="/persontwo.avif" width={500} height={250} alt="error to load image" />
      </div>

      {/* second about section */}
      <About/>

      {/* third courses section  */}
      <Courses/>

      {/* services sec */}
      <OurServices/>

      {/* section enroll  */}
      <Contact/>
    </>
  );
}

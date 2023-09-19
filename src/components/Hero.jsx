import heroimg from '../assets/Cloud.png'
import { FiChevronDown } from 'react-icons/fi';


const Hero = () => {
  return (
    <>
   
   <section className="flex mx-auto flex-col md:flex-row items-center justify-between pt-10 md:pt-40 pb-10 px-4 md:px-12 lg:px-32 xl:px-64">
  <div className="w-full md:w-1/2 mx-auto text-center md:text-left">
    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">The Technology</h1>
    <p className="text-white pb-4 md:pb-10 py-2 text-base md:text-lg lg:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
    <button className='text-white border-2 rounded px-6 py-2 text-base'>Get Started</button>
  </div>
  <div className="w-full md:w-[600px] h-[400px] mx-auto mt-8 md:mt-0">
  <img src={heroimg} alt="Vector Image" className="w-full h-full object-contain" />
</div>

</section>

<div className="flex justify-center items-center pt-10 md:pt-20 lg:pt-40 xl:pt-60">
  <FiChevronDown className="text-white w-4 h-4" />
</div>


              
                </>
               

             
  );
};

export default Hero;

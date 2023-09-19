import Marketing from '../assets/Digital marketing.jpg'
import Cloud from '../assets/Cloud technology.jpg'
const Card = () => {
  return (
    
    <section className='bg-gray-100 cards flex justify-center rounded gap-32 items-center p-4 mt-[264px] pt-40 pb-40 '>
    <div className="w-[400px] h-[600px] rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-[300px]" src={Marketing} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Digital Marketing</div>
        <p className="text-gray-700 text-base">Digital marketing is the cornerstone of online success. Elevate your website presence with strategies like SEO, content marketing, social media engagement, email campaigns, and more. Analyze performance for continual improvement and ensure mobile optimization for a seamless user experience.</p>
      </div>
    </div>
  
    <div className="w-[400px] h-[600px] rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-[300px]" src={Cloud} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Cloud Technology</div>
        <p className="text-gray-700 text-base">Cloud technology revolutionizes data storage and access. It enables seamless collaboration, scalable resources, and enhanced security. Embrace the cloud for flexible and efficient business operations.</p>
      </div>
    </div>
  </section>
  

  );
};

export default Card;

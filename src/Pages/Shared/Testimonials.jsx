import photo1 from "../../assets/images/testimonial/Rectangle 30.png";
import photo2 from "../../assets/images/testimonial/Rectangle 32.png";
import photo3 from "../../assets/images/testimonial/Rectangle 33.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


const Testimonials = () => {
  return (
    <div className="w-full p-16 bg-[#006CE4]">
      <div className="w-full max-w-5xl mx-auto">
        {/* cards */}
        <div className="w-full flex flex-col justify-between lg:flex-row items-center gap-4">
          {/* card-1 */}
          <div className="relative w-full lg:w-2/12">
            <img className="w-full lg:w-[154px] lg:h-[283px] opacity-25" src={photo1} alt="" />
            <BsArrowLeft className="absolute top-1/2 left-6 text-white text-3xl" />
          </div>
          {/* card-2 */}
          <div className="relative lg:w-8/12  bg-white rounded-xl">
            <div className="flex flex-col lg:flex-row items-center">
              <img className="w-full lg:-ml-1" src={photo2} alt="" />
              <div className="flex flex-col p-12">
                <p className="text-[14px] font-[400] text-[#1E1E1E]">
                  &quot;Unforgettable journeys with John and Sarah! Their travel
                  expertise turned our dreams into reality. Can&apos;t wait to
                  explore with them again!&quot;
                </p>
                <p className="flex flex-col pt-6">
                    <span className="text-[18px] font-[400]">Emily</span>
                    <span className="text-[12px] font-[400]">Adventure Enthusiast</span>
                </p>
                <div className="rating rating-sm gap-1 pt-1">
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                </div>
              </div>
            </div>
            <RiDoubleQuotesR className="absolute bottom-12 right-10 text-[#006CE4] text-6xl" />
          </div>
          {/* card-3 */}
          <div className="relative w-full lg:w-2/12  flex justify-end">
            <img className="w-full lg:w-[154px] lg:h-[283px] opacity-25" src={photo3} alt="" />
            <BsArrowRight className="absolute top-1/2 right-6 text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import travel1 from "../../assets/images/Thumbnail/Rectangle 18.png";
import travel2 from "../../assets/images/Thumbnail/Rectangle 18-1.png";
import travel3 from "../../assets/images/Thumbnail/Rectangle 18-2.png";
import photo1 from "../../assets/images/testimonial/Rectangle 30.png";
import photo2 from "../../assets/images/testimonial/Rectangle 32.png";
import photo3 from "../../assets/images/testimonial/Rectangle 33.png";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Travel = () => {
    return (
        <div className="max-w-5xl mx-auto ">
            <h1 className="text-center lg:text-left text-[32px] font-[600] py-12 text-[#09182E]">Travel Blog</h1>
            {/* cards */}
            <div className="flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-4">
                {/* card-1 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg">
                    <img className="w-full" src={travel1} alt="" />
                    <p className="flex flex-row items-center gap-6">
                        <span className="text-[14px] font-[500] text-[#FFB700]">Work and Travel</span>
                        <span className="text-[14px] font-[400] text-[#09182E]">16 septembar 23</span>
                    </p>
                    <p className="text-[18px] font-[700]">Embracing the Digital Nomad Lifestyle the Digital Nomad thr...</p>
                    <hr />
                    <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <img className="rounded-full w-8 h-8" src={photo1} alt="" />
                        <p className="text-[14px] font-[400] text-[#09182E]"> Ys Stafen</p>
                    </div>
                    <p className="text-[#FFB700] text-[14px] font-[500] flex flex-row items-center">
                        <span>View More</span> 
                        <RiArrowRightDoubleLine/>
                    </p>
                    </div>
                </div>
                {/* card-2 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg">
                    <img className="w-full" src={travel2} alt="" />
                    <p className="flex flex-row items-center gap-6">
                        <span className="text-[14px] font-[500] text-[#FFB700]">Work and Travel</span>
                        <span className="text-[14px] font-[400] text-[#09182E]">16 septembar 23</span>
                    </p>
                    <p className="text-[18px] font-[700]">Historical Journeys: Stepping Back in Time Through Travel</p>
                    <hr />
                    <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <img className="rounded-full w-8 h-8" src={photo2} alt="" />
                        <p className="text-[14px] font-[400] text-[#09182E]">Aria Montague</p>
                    </div>
                    <p className="text-[#FFB700] text-[14px] font-[500] flex flex-row items-center">
                        <span>View More</span> 
                        <RiArrowRightDoubleLine/>
                    </p>
                    </div>
                </div>
                {/* card-3 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg">
                    <img className="w-full" src={travel3} alt="" />
                    <p className="flex flex-row items-center gap-6">
                        <span className="text-[14px] font-[500] text-[#FFB700]">Work and Travel</span>
                        <span className="text-[14px] font-[400] text-[#09182E]">16 septembar 23</span>
                    </p>
                    <p className="text-[18px] font-[700]">Sustainable Tourism: Preserving the Planet While Seeing It All</p>
                    <hr />
                    <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <img className="rounded-full w-8 h-8" src={photo3} alt="" />
                        <p className="text-[14px] font-[400] text-[#09182E]"> Elara Thorne</p>
                    </div>
                    <p className="text-[#FFB700] text-[14px] font-[500] flex flex-row items-center">
                        <span>View More</span> 
                        <RiArrowRightDoubleLine/>
                    </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Travel;
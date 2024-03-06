import feature1 from "../../assets/images/Thumbnail/Rectangle 181.png";
import feature2 from "../../assets/images/Thumbnail/Rectangle 18-11.png";
import feature3 from "../../assets/images/Thumbnail/Rectangle 18-22.png";
const Feature = () => {
    return (
        <div className="max-w-5xl mx-auto py-6">
            <h1 className="text-center lg:text-left text-[32px] font-[600] py-6 text-[#09182E]">Featured Destinations</h1>
            {/* cards */}
            <div className="flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-4">
                {/* card-1 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg">
                    <img className="w-full" src={feature1} alt="" />
                    <p className="text-[18px] font-[700]">Stopover opportunity in İstanbul with Turkish Airlines</p>
                    <button className="btn bg-[#FFB700] text-[15px] font-[500]">View More</button>
                </div>
                {/* card-2 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg">
                    <img className="w-full" src={feature2} alt="" />
                    <p className="text-[18px] font-[700]">Stopover opportunity in İstanbul with Turkish Airlines</p>
                    <button className="btn bg-[#FFB700] text-[15px] font-[500]">View More</button>
                </div>
                {/* card-3 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg">
                    <img className="w-full" src={feature3} alt="" />
                    <p className="text-[18px] font-[700]">Stopover opportunity in İstanbul with Turkish Airlines</p>
                    <button className="btn bg-[#FFB700] text-[15px] font-[500]">View More</button>
                </div>

            </div>
        </div>
    );
};

export default Feature;
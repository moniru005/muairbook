import banner from "../../assets/images/Hero Image/Rectangle 2.png";
import { RiArrowDownSLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="relative max-w-[1440px]">
      <img className="w-full" src={banner} alt="" />
      <div className="lg:absolute lg:left-[10%] lg:top-[30%]">
        {/* Title */}
        <h1 className="lg:text-left text-[30px] lg:text-[40px] flex flex-row gap-1  justify-center lg:justify-start lg: pl-4">
          <span className="font-[500] text-gray-700 lg:text-white">Welcome to</span>
          <span className="font-[700] text-[#016DE5]">AirBook</span>
        </h1>
        
        <div className="bg-white w-full rounded-lg p-10">
          <div className="flex flex-col gap-y-4 lg:gap-y-2">
            <form className="flex flex-wrap lg:flex-row items-center lg:justify-between justify-center gap-y-4 text-[10px] font-[500]">
              {/* left */}
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-2 bg-[#EBF0F5] px-2 py-1 rounded">
                  <input type="radio" name="radio1" id="" />
                  <p>One Way</p>
                </div>
                <div className="flex flex-row items-center gap-2 bg-[#016DE5] px-2 py-1 rounded text-white">
                  <input type="radio" name="radio1" id="" checked/>
                  <p>Round Trip</p>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-row items-center gap-3 text-[#016DE5]">
                <div className="flex flex-row items-center gap-2 bg-[#EBF0F5] px-2 py-1 rounded ">
                  <p>1 Traveller</p>
                <RiArrowDownSLine className="text-lg"/>
                </div>
                <div className="flex flex-row items-center gap-2 bg-[#EBF0F5] px-2 py-1 rounded">
                  <p>Economy</p>
                  <RiArrowDownSLine className="text-lg"/>
                </div>
              </div>
            </form>
            {/* Destination */}
            <div className="flex flex-wrap lg:flex-row justify-center lg:justify-start items-center gap-2">
                {/* box-1 */}
                <div className="w-[221px] flex flex-row items-center gap-2 border border-[#B5BAC0] rounded-lg p-2">
                    <h1 className="text-[14px] font-[600] border-r py-1 pr-2 border-r-[#B5BAC0]">DAC</h1>
                    <div className="flex flex-col">
                        <h1 className="text-[14px] font-[500]">DHAKA</h1>
                        <p className="text-[10px] font-[400]">Hazrat Shahjalal Internatio</p>
                    </div>
                </div>
                {/* box-2 */}
                <div className="w-[221px] flex flex-row items-center gap-2 border border-[#B5BAC0] rounded-lg p-2">
                    <h1 className="text-[14px] font-[600] border-r py-1 pr-2 border-r-[#B5BAC0]">Cxb</h1>
                    <div className="flex flex-col">
                        <h1 className="text-[14px] font-[500]">Cox’s Bazar</h1>
                        <p className="text-[10px] font-[400]">Cox’s Bazar international</p>
                    </div>
                </div>
                {/* box-3 */}
                <div className="w-[221px] flex flex-row items-center gap-2 border border-[#B5BAC0] rounded-lg  p-2">
                    <h1 className="text-[14px] font-[600] border-r py-1 pr-2 border-r-[#B5BAC0]">03</h1>
                    <div className="flex flex-col">
                        <h1 className="text-[14px] font-[500] capitalize">october</h1>
                        <p className="text-[10px] font-[400] capitalize">tuesday, 2023</p>
                    </div>
                </div>
                {/* box-4 */}
                <div className="w-[221px] flex flex-row items-center gap-2 border border-[#B5BAC0] rounded-lg  p-2">
                    <h1 className="text-[14px] font-[600] border-r py-1 pr-2 border-r-[#B5BAC0]">05</h1>
                    <div className="flex flex-col">
                        <h1 className="text-[14px] font-[500] capitalize">october</h1>
                        <p className="text-[10px] font-[400] capitalize">tuesday, 2023</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

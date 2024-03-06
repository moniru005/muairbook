import deal1 from "../../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png";
import deal2 from "../../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png";
import deal3 from "../../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png";
const Deal = () => {
    return (
        <div className="max-w-5xl mx-auto ">
            <h1 className="text-center lg:text-left text-[32px] font-[600] py-12 text-[#09182E]">Deals and Offers</h1>
            {/* cards */}
            <div className="flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-4">
                {/* card-1 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg flex flex-row items-center gap-2">
                    <img className="w-full" src={deal1} alt="" />
                    <p className="flex flex-col gap-y-1">
                        <span className="text-[12px] font-[500]">With bkash payment only</span>
                        <span className="text[16px] font-[600] text-[#006CE4]">up to 14% discount on the base fare of domestic flights</span>
                    </p>
                    
                </div>
                {/* card-2 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg flex flex-row items-center gap-2">
                    <img className="w-full" src={deal2} alt="" />
                    <p className="flex flex-col gap-y-1">
                        <span className="text-[12px] font-[500]">With bkash payment only</span>
                        <span className="text[16px] font-[600] text-[#006CE4]">up to 14% discount on the base fare of domestic flights</span>
                    </p>
                    
                </div>
                {/* card-3 */}
                <div className="w-96 p-2 space-y-2 bg-white shadow-lg rounded-lg flex flex-row items-center gap-2">
                    <img className="w-full" src={deal3} alt="" />
                    <p className="flex flex-col gap-y-1">
                        <span className="text-[12px] font-[500]">With bkash payment only</span>
                        <span className="text[16px] font-[600] text-[#006CE4]">up to 14% discount on the base fare of domestic flights</span>
                    </p>
                    
                </div>

            </div>
        </div>
    );
};

export default Deal;
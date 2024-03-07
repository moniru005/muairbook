import image from "../../assets/images/News letter/Isolation_Mode.png";
const Newsletter = () => {
  return (
    <div className="max-w-5xl mx-auto py-24">
      {/* cards */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-4">
        {/* card-1 */}
        <div className=" w-full lg:w-[386px] p-4 lg:p-0 space-y-2 rounded-lg flex justify-start">
          <img className="w-full lg:w-[386px]" src={image} alt="" />
        </div>
        {/* card-2 */}
        <div className="w-full lg:w-1/2 p-4 lg:p-0 space-y-2 rounded-lg flex justify-end ">
          <div className="px-2 pt-2 pb-4 space-y-4">
            <h1 className="text-3xl lg:text-[40px] font-[700]">
              Subscribe to our Newsletter!
            </h1>
            <p className="text-[20px] font-[500] text-[#006CE4]">   
              Subscribe to our Newsletter!
            </p>
            <input
              className="mb-10 px-2 py-1 w-96 rounded-lg border border-[#006CE4]"
              type="text"
              name=""
              id=""
              placeholder="Your Email"
            />
            <button className="w-96 rounded-lg py-2 px-2 bg-[#FFB700] text-[15px] font-[500]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

import { SlLocationPin } from "react-icons/sl";
import logo from "../../assets/images/Logo/LOGO white.png";
import youtube from "../../assets/images/Social Icon/yt.png";
import facebook from "../../assets/images/Social Icon/fb.png";
import linkedin from "../../assets/images/Social Icon/in.png";


const Footer = () => {
  return (
    <div className="w-full p-16 bg-[#006CE4]">
      <div className="w-full max-w-5xl mx-auto ">
        {/* cards */}
        <div className="w-full flex flex-col justify-center lg:justify-between lg:items-start lg:flex-row gap-4">
          {/* card-1 */}
          <div className="w-full lg:w-3/12">
            <div className="text-white space-y-3">
              <p className="text-[18px] font-[500]">Address</p>
              <p className="w-44 text-[16px] font-[400]">
                House- 75 Ka, Main Rd, Dhaka 1216
              </p>
              <p className="flex flex-row items-center">
                <SlLocationPin />
                <span>View on Maps</span>
              </p>
            </div>
          </div>
          {/* card-2 */}
          <div className="w-full lg:w-3/12">
            <ul className="text-white space-y-4">
              <li className="text-[18px] font-[500]">About us</li>
              <li>Stories</li>
              <li>Blog</li>
              <li>Airlines</li>
              <li>Testimonials</li>
            </ul>
          </div>
          {/* card-3 */}
          <div className="w-full lg:w-3/12">
            <ul className="text-white space-y-4">
              <li className="text-[18px] font-[500]">Join us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Support</li>
            </ul>
          </div>
          {/* card-4 */}
          <div className="w-full lg:w-3/12">
          <ul className="text-white space-y-4">
              <li className="text-[18px] font-[500]">Contact</li>
              <li>+880 1234562890</li>
              <li>+880 1345628980</li>
              <li>+880 1234562890</li>
              <li>info@airbook.com</li>
            </ul>
          </div>
        </div>
        <hr className="my-8" />
        <div className="">
            {/* logo */}
            <div className="flex flex-wrap lg:flex-row lg:justify-between lg:items-center">
                <img className="" src={logo} alt="" />
                <p className="text-[12px] font-[600] text-white">© Copyright  AIRBOOK</p>
                <div className="flex flex-row items-center gap-2">
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
      <h1 className="text-center lg:text-left text-[32px] font-[600] py-12 text-[#09182E]">
        Travel Blog
      </h1>
      {/* cards */}
      <div className="flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-4">
        {/* card-1 */}
        <div className="relative w-96  space-y-2 bg-white shadow-lg rounded-lg">
          <img className="w-full" src={travel1} alt="" />
          <div className="px-2 pt-2 pb-4 space-y-2">
          <p className="flex flex-row items-center gap-6 pb-4">
            <span className="text-[14px] font-[500] text-[#FFB700]">
              Work and Travel
            </span>
            <span className="text-[14px] font-[400] text-[#09182E]">
              16 septembar 23
            </span>
          </p>
          <p className="text-[18px] font-[700]">
            Embracing the Digital Nomad Lifestyle the Digital Nomad thr...
          </p>
          <hr />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <img className="rounded-full w-8 h-8" src={photo1} alt="" />
              <p className="text-[14px] font-[400] text-[#09182E]">
                Ys Stafen
              </p>
            </div>
            <p className="text-[#FFB700] text-[14px] font-[500] flex flex-row items-center">
              <span>View More</span>
              <RiArrowRightDoubleLine />
            </p>
          </div>
          <svg
            className="lg:flex hidden absolute top-[80px] left-[20px]"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_68_442)">
              <rect
                x="4"
                width="36"
                height="36"
                rx="18"
                fill="#FFB700"
                shapeRendering="crispEdges"
              />
              <path
                d="M24.5 23L19.5 18L24.5 13"
                stroke="#101828"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_68_442"
                x="0"
                y="0"
                width="44"
                height="44"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_68_442"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_68_442"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          </div>
        </div>
        {/* card-2 */}
        <div className="w-96 space-y-2 bg-white shadow-lg rounded-lg">
          <img className="w-full" src={travel2} alt="" />
          <div className="px-2 pt-2 pb-4 space-y-2">
          <p className="flex flex-row items-center gap-6 pb-4">
            <span className="text-[14px] font-[500] text-[#FFB700]">
              Work and Travel
            </span>
            <span className="text-[14px] font-[400] text-[#09182E]">
              16 septembar 23
            </span>
          </p>
          <p className="text-[18px] font-[700]">
            Historical Journeys: Stepping Back in Time Through Travel
          </p>
          <hr />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <img className="rounded-full w-8 h-8" src={photo2} alt="" />
              <p className="text-[14px] font-[400] text-[#09182E]">
                Aria Montague
              </p>
            </div>
            <p className="text-[#FFB700] text-[14px] font-[500] flex flex-row items-center">
              <span>View More</span>
              <RiArrowRightDoubleLine />
            </p>
          </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="relative w-96 space-y-2 bg-white shadow-lg rounded-lg">
          <img className="w-full" src={travel3} alt="" />
          <div className="px-2 pt-2 pb-4 space-y-2">
            <p className="flex flex-row items-center gap-6 pb-4">
              <span className="text-[14px] font-[500] text-[#FFB700]">
                Work and Travel
              </span>
              <span className="text-[14px] font-[400] text-[#09182E]">
                16 septembar 23
              </span>
            </p>
            <p className="text-[18px] font-[700]">
              Sustainable Tourism: Preserving the Planet While Seeing It All
            </p>
            <hr />
            <div className="flex flex-row items-center justify-between ">
              <div className="flex flex-row items-center gap-2">
                <img className="rounded-full w-8 h-8" src={photo3} alt="" />
                <p className="text-[14px] font-[400] text-[#09182E]">
                  Elara Thorne
                </p>
              </div>
              <p className="text-[#FFB700] text-[14px] font-[500] flex flex-row items-center">
                <span>View More</span>
                <RiArrowRightDoubleLine />
              </p>
            </div>
          </div>
          <svg
            className="lg:flex hidden absolute top-[80px] right-[20px]"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_68_427)">
              <rect
                x="4"
                width="36"
                height="36"
                rx="18"
                fill="#FFB700"
                shapeRendering="crispEdges"
              />
              <path
                d="M19.5 23L24.5 18L19.5 13"
                stroke="#09182E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_68_427"
                x="0"
                y="0"
                width="44"
                height="44"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_68_427"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_68_427"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Travel;

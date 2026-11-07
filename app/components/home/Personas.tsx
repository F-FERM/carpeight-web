import { DM_Sans, Syne, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const syne = Syne({ subsets: ["latin"], weight: ["700"] });
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";

const PERSONAS = [
  {
    title: "Domestic Holiday Packages",
    text: "Discover India’s stunning landscapes, rich culture and remarkable destinations with curated holiday experiences.",
  },
  {
    title: "International Holidays",
    text: "Explore fascinating countries, tropical escapes and iconic landmarks with carefully planned international tours.",
  },
  {
    title: "MICE & Corporate Travel",
    text: "Travel coordination for meetings, incentives, conferences, exhibitions and corporate retreats.",
  },
  {
    title: "Business Networking Trips",
    text: "Meaningful travel experiences connecting entrepreneurs, professionals and business communities.",
  },
  {
    title: "Group Tours & Fixed Departures",
    text: "Join scheduled journeys and well-organized group adventures with shared experiences and exciting itineraries.",
  },
  {
    title: "Customized Packages",
    text: "Your dates, interests and budget. We build a personalized itinerary around the way you love to travel.",
  },
];

export default function Personas() {
  return (
    <section
      id="personas"
      className={`${dmSans.className} w-full bg-[#DAF6DF] py-14 sm:py-20 xl:py-[90px] ${PAD}`}
    >
      <div className="mx-auto w-full max-w-[1465px]">
        {/* ========================= HEADER ========================= */}
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0">
            <p
              className="mb-4 text-[11px] uppercase text-[#161C1B] sm:mb-5 sm:text-[12px]"
              style={{
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "2.16px",
              }}
            >
              02 / EXPLORE OUR SERVICES
            </p>

            <h2 className="text-[clamp(36px,10vw,80px)] lg:text-[clamp(52px,5.2vw,80px)]">
              <span
                className={`${syne.className} block whitespace-nowrap text-[#161C1B]`}
                style={{
                  fontWeight: 700,
                  lineHeight: "0.9685",
                  letterSpacing: "-0.04em",
                }}
              >
                Different journeys.
              </span>
              <span
                className={`${dmSerif.className} block whitespace-nowrap italic text-[#161C1B]`}
                style={{
                  fontWeight: 400,
                  lineHeight: "0.9685",
                  letterSpacing: "-0.04em",
                }}
              >
               One trusted companion.
              </span>
            </h2>
          </div>

          <p
            className="max-w-[390px] text-[16px] leading-[1.55] text-[#66736A] sm:text-[18px] sm:leading-[28px] lg:pb-3"
            style={{ fontWeight: 400 }}
          >
            Whether it’s a family getaway, an international adventure or a corporate gathering, we help you travel your way.
          </p>
        </div>

        {/* ========================= CARDS =========================
            */}
        <ul
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-x-[clamp(16px,1.4vw,27px)]
          "
        >
          {PERSONAS.map((p, i) => (
            <li
              key={p.title}
              className="
                group
                rounded-[20px]
                bg-white
                p-6
                transition-colors
                duration-300
                ease-out
                hover:bg-[#00D57B]
                sm:p-8
                xl:p-[42px]
              "
            >
              <p
                className="text-[12px] text-[#547361]"
                style={{ fontWeight: 400, lineHeight: "100%" }}
              >
                {String(i + 1).padStart(2, "0")} /
              </p>

              <h3
                className={`${syne.className} mt-6 text-[24px] text-[#161C1B] sm:mt-7 sm:text-[26px] lg:text-[clamp(22px,2vw,28px)] xl:mt-8`}
                style={{
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "-0.046em",
                }}
              >
                {p.title}
              </h3>

              <p
                className="mt-5 text-[16px] text-[#536158] transition-colors duration-300 sm:text-[17px] lg:text-[clamp(15px,1.25vw,18px)] xl:mt-7"
                style={{ fontWeight: 400, lineHeight: "1.244" }}
              >
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
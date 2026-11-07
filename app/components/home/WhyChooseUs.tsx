import { DM_Sans, Syne, DM_Serif_Display } from "next/font/google";
import {
  Compass,
  Globe,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  Heart,
} from "lucide-react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const FEATURES = [
  {
    id: 1,
    title: "Customized Itineraries",
    description:
      "Journeys planned around your interests, travel style and budget.",
    icon: Compass,
  },
  {
    id: 2,
    title: "India & Beyond",
    description:
      "Exciting destinations across India and international markets.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Corporate Travel",
    description:
      "Purposeful business, MICE and professional networking journeys.",
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    title: "Group Experiences",
    description:
      "Thoughtfully coordinated tours for friends, families and teams.",
    icon: Users,
  },
  {
    id: 5,
    title: "Fixed Departures",
    description: "Convenient scheduled trips with planned travel itineraries.",
    icon: CalendarDays,
  },
  {
    id: 6,
    title: "Personal Assistance",
    description:
      "Friendly support and careful coordination throughout planning.",
    icon: Heart,
  },
];

const EYEBROW = {
  fontWeight: 700,
  lineHeight: "100%",
  letterSpacing: "2.16px",
} as const;

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className={`
        ${dmSans.className}
        w-full
        bg-[#004530]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        xl:px-[48px]
        xl:py-[80px]
      `}
    >
      <div className="mx-auto w-full max-w-[1465px]">
        {/* ================= HEADER ================= */}

        <div
          className="
            mb-8
            flex flex-col
            gap-6
            lg:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
          "
        >
          {/* Heading */}

          <div className="max-w-[850px]">
            <p
              className="
                mb-4
                text-[10px]
                uppercase
                text-white
                sm:mb-5
                sm:text-[12px]
              "
              style={EYEBROW}
            >
              05 / Why Carpeight
            </p>

            <h2
              className="
                text-[clamp(36px,6.5vw,76px)]
              "
            >
              <span
                className={`
                  ${syne.className}
                  block
                  text-white
                `}
                style={{
                  fontWeight: 700,
                  lineHeight: "0.98",
                  letterSpacing: "-0.055em",
                }}
              >
                Travel Made Personal.
              </span>

              <span
                className={`
                  ${dmSerif.className}
                  mt-1
                  block
                  italic
                  text-white
                `}
                style={{
                  fontWeight: 400,
                  lineHeight: "1.05",
                  letterSpacing: "-0.035em",
                }}
              >
                Experiences Made Memorable.
              </span>
            </h2>
          </div>

          {/* Description */}

          <p
            className="
              w-full
              max-w-[330px]
              text-[14px]
              leading-[1.65]
              text-white/75
              sm:text-[15px]
              lg:mb-1
              lg:shrink-0
            "
            style={{ fontWeight: 400 }}
          >
            Discover thoughtfully curated destinations, personalized travel
            packages, and unforgettable journeys designed to turn every trip
            into a lasting memory.
          </p>
        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-[14px]
            sm:grid-cols-2
            sm:gap-[16px]
            lg:grid-cols-3
          "
        >
          {FEATURES.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="
                  group
                  flex
                  min-h-[162px]
                  flex-col
                  justify-between
                  rounded-[11px]
                  border
                  border-[#DDE7E2]
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:p-[29px]
                "
              >
                {/* Icon Placeholder */}

                <div
                  className="
                    grid
                    h-[39px]
                    w-[39px]
                    place-items-center
                    rounded-[11px]
                    border
                    border-[#A6BDB4]
                    bg-[#DCE7E2]
                    text-[#004530]
                    transition-colors
                    duration-300
                    group-hover:bg-[#00D57B]
                  "
                >
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                {/* Card Content */}

                <div className="mt-4">
                  <h3
                    className={`
                      ${syne.className}
                      text-[19px]
                      leading-[1.2]
                      tracking-[-0.045em]
                      text-[#111817]
                      sm:text-[20px]
                    `}
                    style={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-[9px]
                      max-w-[330px]
                      text-[12px]
                      leading-[1.45]
                      text-[#68746D]
                      sm:text-[13px]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

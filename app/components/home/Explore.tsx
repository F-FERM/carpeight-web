import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Syne, DM_Serif_Display } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

import image1 from "../../../public/images/ex1.jpg";
import image2 from "../../../public/images/ex2.jpg";
import image3 from "../../../public/images/ex3.jpg";
import image4 from "../../../public/images/ex4.jpg";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
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

const PACKAGES = [
  {
    id: 1,
    title: "Kashmir",
    description: "Paradise in Every Season",
    image: image1,
  },
  {
    id: 2,
    title: "Hyderabad",
    description: "Heritage & Flavors",
    image: image2,
  },
  {
    id: 3,
    title: "Delhi",
    description: "Culture & History",
    image: image3,
  },
  {
    id: 4,
    title: "Rajasthan",
    description: "Royal Heritage",
    image: image4,
  },
];

const CARD = `
  group relative isolate flex
  h-[368px] w-full max-w-[348px]
  flex-col justify-end
  overflow-hidden rounded-[18px]
  [container-type:inline-size]
  [--c:clamp(40px,14.1cqw,60px)]
  [transform:translateZ(0)]
`;

const INNER = `
  relative z-10 flex flex-col
  gap-[10px]
  px-[30px]
  pt-[40px]
  pb-[40px]
`;

const EYEBROW = {
  fontWeight: 700,
  lineHeight: "100%",
  letterSpacing: "2.16px",
} as const;

const RING_STYLE = {
  padding: "1.5px",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.18) 55%, rgba(255,255,255,0.55) 100%)",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
} as React.CSSProperties;

function ArrowCircle({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        absolute inset-0 z-20
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#A4EA6D]
        focus-visible:ring-inset
        rounded-[18px]
      "
    >
      <span
        className="
          absolute
          bottom-[40px]
          right-[30px]
          grid
          h-[var(--c)]
          w-[var(--c)]
          place-items-center
          rounded-full
          bg-[rgba(120,120,120,0.28)]
          backdrop-blur-md
          text-white
          transition-colors
          duration-300
          group-hover:bg-[#A4EA6D75]
        "
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          style={RING_STYLE}
        />

        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="
            h-[44%] w-[44%]
            transition-transform
            duration-300
            ease-out
            group-hover:rotate-45
          "
        />
      </span>
    </Link>
  );
}

export default function Explore() {
  return (
    <section
      id="experiences"
      className={`
        ${dmSans.className}
        w-full
        bg-[#EAF3E7]
        py-14
        sm:py-20
        xl:py-[90px]
        px-4
        sm:px-8
        lg:px-8
        xl:px-[30px]
      `}
    >
      <div className="mx-auto w-full max-w-[1465px]">
        {/* ================= HEADER ================= */}

        <div
          className="
            mb-8
            flex flex-col
            gap-6
            sm:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
          "
        >
          <div>
            <p
              className="
                mb-4
                text-[11px]
                uppercase
                text-[#161C1B]
                sm:mb-5
                sm:text-[12px]
              "
              style={EYEBROW}
            >
              03 / Explore India
            </p>

            <h2 className="text-[clamp(40px,9vw,80px)] lg:text-[clamp(56px,6vw,80px)]">
              <span
                className={`${syne.className} block text-[#161C1B]`}
                style={{
                  fontWeight: 700,
                  lineHeight: "0.9685",
                  letterSpacing: "-0.0653em",
                }}
              >
                Domestic
              </span>

              <span
                className={`${dmSerif.className} block italic text-[#0EA766]`}
                style={{
                  fontWeight: 400,
                  lineHeight: "0.9685",
                  letterSpacing: "-0.0403em",
                }}
              >
                Destinations.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[390px]
              text-[16px]
              leading-[1.5]
              text-[#66736A]
              sm:text-[18px]
              sm:leading-[27px]
              lg:pb-3
            "
            style={{ fontWeight: 400 }}
          >
            From royal cities to snow-covered valleys, discover unforgettable
            experiences closer to home.
          </p>
        </div>

        {/* ================= DESTINATION CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            justify-items-center
            gap-5
            sm:grid-cols-2
            sm:gap-6
            xl:grid-cols-4
            xl:gap-4
          "
        >
          {PACKAGES.map((item) => (
            <article key={item.id} className={CARD}>
              {/* Background Image */}

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="
                  (min-width: 1280px) 348px,
                  (min-width: 640px) 50vw,
                  100vw
                "
                className="
                  z-0
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  will-change-transform
                  group-hover:scale-110
                "
              />

              {/* Dark Gradient Overlay */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  z-[1]
                "
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 100%)",
                }}
              />

              {/* Card Content */}

              <div className={INNER}>
                <h3
                  className={`
                    ${syne.className}
                    pr-[calc(var(--c)+2.8cqw)]
                    text-[clamp(20px,7.5cqw,32px)]
                    text-white
                  `}
                  style={{
                    fontWeight: 700,
                    lineHeight: "1.12",
                    letterSpacing: "-0.034em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="
                    pr-[calc(var(--c)+2.8cqw)]
                    text-[clamp(13px,4.7cqw,20px)]
                    text-[#C7C7C7]
                  "
                  style={{
                    fontWeight: 400,
                    lineHeight: "1.2",
                  }}
                >
                  <span
                    className="text-[1.2em] text-[#A4EA6D]"
                    style={{ fontWeight: 400 }}
                  >
                    {item.description}
                  </span>
                </p>

                {/* Arrow Button */}

                <ArrowCircle
                  href={`/destinations/${item.title.toLowerCase()}`}
                  label={`Explore ${item.title}`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

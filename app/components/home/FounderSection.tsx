"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DM_Sans, Syne, DM_Serif_Display } from "next/font/google";

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

const SLIDES = [
  {
    id: 1,
    eyebrow: "OUR FOUNDER'S MESSAGE",
    heading: "A story shaped",
    italicHeading: "by passion.",
    paragraphs: [
      "Travel is more than exploring new places. It's about creating meaningful connections, discovering new cultures, and making memories that stay with us forever.",

      "At CARPEIGHT, we believe every journey deserves personal attention, thoughtful planning, and genuine care.",

      "From family holidays and international adventures to corporate networking trips, our vision is to make every travel experience seamless, inspiring, and unforgettable.",
    ],
    name: "Mohammed Safvan K",
    designation: "Managing Director",
    image: "/images/founder-safvan.png",
    imageAlt: "Mohammed Safvan K",
  },
  {
    id: 2,
    eyebrow: "TRAVEL WITH PURPOSE",
    heading: "Beyond destinations.",
    italicHeading: "Closer to experiences.",
    paragraphs: [
      "Every traveller has a different dream, and we believe every journey should reflect it.",

      "Whether it's a peaceful holiday, an exciting group adventure, or a business networking experience, we bring together thoughtful itineraries, trusted travel arrangements, and personalized service.",

      "Our commitment is simple: to make travel easier, connections stronger, and every destination worth remembering.",
    ],
    name: "Mohammed Nafih VP",
    designation: "CEO",
    image: "/images/founder-nafih.png",
    imageAlt: "Mohammed Nafih VP",
  },
];

export default function FounderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="founder"
      className={`
        ${dmSans.className}
        w-full
        overflow-hidden
        bg-[#DAF6DF]
        px-5
        py-14
        sm:px-8
        sm:py-20
        lg:px-12
        xl:px-[75px]
        xl:py-[70px]
      `}
    >
      <div className="mx-auto w-full max-w-[1465px]">
        {/* SLIDES */}

        <div className="relative">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              aria-hidden={activeIndex !== index}
              className={`
                grid
                grid-cols-1
                items-center
                gap-6
                lg:grid-cols-[1.1fr_0.9fr]
                lg:gap-[3%]
                transition-all
                duration-700
                ease-in-out
                ${
                  activeIndex === index
                    ? "relative translate-y-0 opacity-100"
                    : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
                }
              `}
            >
              {/* LEFT CONTENT */}

              <div className="flex flex-col">
                {/* Main Heading */}

                <h2
                  className="
                    mb-3
                    text-[clamp(36px,5.5vw,58px)]
                    sm:text-[clamp(42px,5vw,64px)]
                  "
                >
                  <span
                    className={`
                      ${syne.className}
                      block
                      text-[#161C1B]
                    `}
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.05",
                      letterSpacing: "-0.065em",
                    }}
                  >
                    {slide.heading}
                  </span>

                  <span
                    className={`
                      ${dmSerif.className}
                      mt-1
                      block
                      italic
                      text-[#004530]
                    `}
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.05",
                      letterSpacing: "-0.045em",
                    }}
                  >
                    {slide.italicHeading}
                  </span>
                </h2>

                {/* Eyebrow */}

                <p
                  className="
                    mb-4
                    text-[9px]
                    uppercase
                    tracking-[2px]
                    text-[#0EA766]
                    sm:text-[10px]
                  "
                  style={{ fontWeight: 700 }}
                >
                  {slide.eyebrow}
                </p>

                {/* Description */}

                <div className="flex max-w-[540px] flex-col gap-4">
                  {slide.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="
                        text-[13px]
                        leading-[1.7]
                        text-[#66736A]
                        sm:text-[14px]
                      "
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Founder Name */}

                <div className="mt-5">
                  <h3
                    className={`
                      ${syne.className}
                      text-[20px]
                      leading-tight
                      tracking-[-0.04em]
                      text-[#161C1B]
                      sm:text-[23px]
                    `}
                    style={{ fontWeight: 700 }}
                  >
                    {slide.name}
                  </h3>

                  <p className="mt-1 text-[12px] text-[#66736A] sm:text-[13px]">
                    {slide.designation}
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}

              {/* RIGHT IMAGE */}

              <div className="relative mx-auto w-full max-w-[615px]">
                <div
                  className="
      relative
      aspect-square
      w-full
      overflow-hidden
      rounded-tl-[30px]
      rounded-tr-[250px]
      rounded-br-[30px]
      rounded-bl-[30px]
    "
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 615px, 90vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDE INDICATORS */}

        <div className="mt-7 flex justify-center gap-2 lg:justify-start">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`
                h-[5px]
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "w-9 bg-[#004530]"
                    : "w-5 bg-[#00453040] hover:bg-[#00453080]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

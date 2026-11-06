import Link from "next/link";
import { DM_Sans, Syne, DM_Serif_Display } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

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

const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";

const EYEBROW = {
  fontWeight: 700,
  lineHeight: "100%",
  letterSpacing: "2.16px",
} as const;

export default function Cta() {
  return (
    <section
      id="cta"
      className={`
        ${dmSans.className}
        relative
        w-full
        bg-[#E5E5E5]
        px-4
        py-12
        text-center
        sm:px-8
        sm:py-14
        lg:py-16
        xl:py-[40px]
        ${PAD}
      `}
    >
      <span id="plan" className="sr-only" />

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[650px]
          flex-col
          items-center
        "
      >
        {/* ================= EYEBROW ================= */}

        <p
          className="
            mb-2
            text-[9px]
            uppercase
            text-[#161C1B]
            sm:text-[10px]
          "
          style={EYEBROW}
        >
          LET'S EXPLORE TOGETHER
        </p>

        {/* ================= HEADING ================= */}

        <h2
          className="
            text-[clamp(42px,8.5vw,64px)]
            text-[#004530]
          "
        >
          <span
            className={`
              ${syne.className}
              block
            `}
            style={{
              fontWeight: 700,
              lineHeight: "0.98",
              letterSpacing: "-0.055em",
            }}
          >
            Let's go
          </span>

          <span
            className={`
              ${syne.className}
              block
            `}
            style={{
              fontWeight: 700,
              lineHeight: "0.98",
              letterSpacing: "-0.055em",
            }}
          >
            somewhere
          </span>

          <span
            className={`
              ${dmSerif.className}
              mt-1
              block
              italic
            `}
            style={{
              fontWeight: 400,
              lineHeight: "1.05",
              letterSpacing: "-0.045em",
            }}
          >
            that means more.
          </span>
        </h2>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mt-5
            max-w-[410px]
            text-[13px]
            leading-[1.55]
            text-[#454545]
            sm:mt-5
            sm:text-[14px]
            sm:leading-[1.65]
          "
          style={{ fontWeight: 400 }}
        >
          Dreaming of a relaxing holiday, an exciting international escape or a
          productive business journey? Tell us where you want to go and let
          CARPEIGHT help you plan the perfect trip.
        </p>

        {/* ================= CTA BUTTON ================= */}

        <Link
          href="#contact"
          className="
            group
            mt-5
            inline-flex
            min-h-[40px]
            items-center
            justify-center
            gap-[10px]
            rounded-full
            bg-[#004530]
            px-[26px]
            py-[12px]
            text-[12px]
            uppercase
            text-white
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1
            hover:bg-[#006B4A]
            hover:shadow-[0_8px_20px_rgba(0,69,48,0.18)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#004530]
            focus-visible:ring-offset-2
            sm:min-h-[42px]
            sm:px-[28px]
            sm:text-[12px]
          "
          style={{
            fontWeight: 700,
            lineHeight: "100%",
          }}
        >
          Start a conversation
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="
              transition-transform
              duration-300
              ease-out
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </Link>
      </div>
    </section>
  );
}

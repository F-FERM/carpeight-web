import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";

import footerLogo from "../../../public/images/footerlogo.png";
import { dmSans, syne, dmSerif, poppins } from "@/app/fonts";

const PAD = "px-4 sm:px-8 lg:px-12 xl:px-[25px]";

const EYEBROW = {
  fontWeight: 700,
  lineHeight: "100%",
  letterSpacing: "2.16px",
} as const;

const LINKS = [
  { label: "Our Story", href: "#story" },
  { label: "Experiences", href: "#experiences" },
  { label: "Discover", href: "#discover" },
  { label: "Why Carpeight Oasis", href: "#why" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className={`
        ${dmSans.className}
        w-full
        bg-[#004530]
        pb-4
        pt-8
        text-white
        sm:pt-10
        xl:pt-[12px]
        ${PAD}
      `}
    >
      <div className="mx-auto w-full max-w-[1740px]">
        {/* ================= TOP: HEADING + CTA ================= */}

        <div
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
          "
        >
          {/* Heading */}

          <div className="min-w-0">
            <p
              className="
                mb-4
                text-[10px]
                uppercase
                text-white
                sm:text-[11px]
              "
              style={EYEBROW}
            >
              CARPEIGHT · LET'S CONNECT
            </p>

            <h2
              className="
                text-[clamp(34px,7.5vw,70px)]
                lg:text-[clamp(48px,5vw,70px)]
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
                Every great journey
              </span>

              <span
                className={`
                  ${dmSerif.className}
                  block
                  italic
                  text-white
                `}
                style={{
                  fontWeight: 400,
                  lineHeight: "1.02",
                  letterSpacing: "-0.045em",
                }}
              >
                starts with a hello.
              </span>
            </h2>
          </div>

          {/* CTA Button */}

          <Link
            href="#cta"
            className="
              group
              inline-flex
              min-h-[42px]
              w-fit
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#A4EA6D]
              px-[21px]
              py-[12px]
              text-[12px]
              uppercase
              text-[#004530]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#E6FFD0]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#004530]
              lg:mb-1
            "
            style={{
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            Plan your journey
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* ================= CONTACT INFORMATION ================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-7
            border-t
            border-white/20
            pt-5
            sm:grid-cols-2
            sm:gap-8
            lg:mt-7
            lg:grid-cols-3
            lg:gap-10
          "
        >
          {/* CALL US */}

          <div>
            <p
              className="
                text-[9px]
                uppercase
                text-white
                sm:text-[10px]
              "
              style={EYEBROW}
            >
              Call us
            </p>

            <a
              href="tel:+919074418989"
              className={`
                ${poppins.className}
                mt-2
                block
                w-fit
                text-[clamp(20px,3vw,25px)]
                text-white
                transition-colors
                duration-300
                hover:text-[#A4EA6D]
              `}
              style={{
                fontWeight: 600,
                lineHeight: "1.4",
              }}
            >
              +91 9074418989
            </a>
          </div>

          {/* WRITE TO US */}

          <div>
            <p
              className="
                text-[9px]
                uppercase
                text-white
                sm:text-[10px]
              "
              style={EYEBROW}
            >
              Write to us
            </p>

            <a
              href="mailto:info@carpeight.com"
              className={`
                ${poppins.className}
                mt-2
                block
                w-fit
                max-w-full
                break-words
                text-[clamp(20px,3vw,25px)]
                text-white
                transition-colors
                duration-300
                hover:text-[#A4EA6D]
              `}
              style={{
                fontWeight: 600,
                lineHeight: "1.4",
              }}
            >
              info@carpeight.com
            </a>
          </div>

          {/* FIND US */}

          <div>
            <p
              className="
                text-[9px]
                uppercase
                text-white
                sm:text-[10px]
              "
              style={EYEBROW}
            >
              Find us
            </p>

            <h3
              className={`
                ${syne.className}
                mt-2
                text-[18px]
                text-white
                sm:text-[19px]
              `}
              style={{
                fontWeight: 700,
                lineHeight: "1.3",
              }}
            >
              Kozhikode
            </h3>

            <address
              className="
                mt-2
                max-w-[380px]
                text-[12px]
                not-italic
                leading-[1.5]
                text-white/60
                sm:text-[13px]
              "
            >
              address : HiLITE City, HiLITE Business Park, 1st floor, Tower 2,
              Kozhikode, Keralam 673014
            </address>
          </div>
        </div>

        {/* ================= LOGO + NAVIGATION ================= */}

        <div
          className="
            mt-9
            flex
            flex-col
            gap-8
            lg:mt-7
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
          "
        >
          {/* Logo */}

          <Link
            href="/"
            aria-label="Carpeight home"
            className="block w-fit shrink-0"
          >
            <Image
              src={footerLogo}
              alt="CARPEIGHT - Wish. Wander. Wonder."
              className="
                h-auto
                w-[220px]
                sm:w-[270px]
                lg:w-[300px]
                xl:w-[330px]
              "
              priority
            />
          </Link>

          {/* Navigation + Tagline */}

          <div
            className="
              flex
              flex-col
              gap-5
              lg:items-end
              lg:gap-[17px]
            "
          >
            {/* Footer Links */}

            <nav aria-label="Footer navigation">
              <ul
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-3
                  lg:justify-end
                  xl:gap-x-6
                "
              >
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        text-[11px]
                        text-white
                        transition-colors
                        duration-300
                        hover:text-[#A4EA6D]
                        sm:text-[12px]
                      "
                      style={{
                        fontWeight: 600,
                        lineHeight: "100%",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Back to Top */}

                <li>
                  <Link
                    href="#hero"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      text-[11px]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#A4EA6D]
                      sm:text-[12px]
                    "
                    style={{
                      fontWeight: 700,
                      lineHeight: "100%",
                    }}
                  >
                    Back to Top
                    <ArrowUp size={13} aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Tagline */}

            <p
              className={`
                ${dmSerif.className}
                text-[21px]
                italic
                text-white
                sm:text-[24px]
                lg:text-right
              `}
              style={{
                fontWeight: 400,
                lineHeight: "1.2",
              }}
            >
              Travel for you. Return with more.
            </p>
          </div>
        </div>

        {/* ================= BOTTOM COPYRIGHT ================= */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-2
            border-t
            border-white/20
            pt-3
            text-[11px]
            text-white/60
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-5
            sm:text-[12px]
          "
        >
          <p style={{ fontWeight: 400 }}>
            © 2026 Carpeight. All rights reserved.
          </p>

          <p style={{ fontWeight: 400 }}>
            Travel is not an escape. It is reconnection.
          </p>
        </div>
      </div>
    </footer>
  );
}

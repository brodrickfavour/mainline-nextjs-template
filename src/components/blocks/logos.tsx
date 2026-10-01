import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "Mercury",
      logo: "/logos/UNFPA.svg",
      width: 300,
      height: 80,
      href: "",
    },
    {
      name: "Watershed",
      logo: "/logos/MYSD.svg",
      width: 300,
      height: 80,
      href: "",
    },
    // {
    //   name: "Retool",
    //   logo: "/logos/retool.svg",
    //   width: 113,
    //   height: 22,
    //   href: "https://retool.com",
    // },
    // {
    //   name: "Descript",
    //   logo: "/logos/descript.svg",
    //   width: 112,
    //   height: 27,
    //   href: "https://descript.com",
    // },
  ];

  const bottomRowCompanies = [
    {
      name: "Perplexity",
      logo: "/logos/YNL.svg",
      width: 200,
      height: 50,
      href: "",
    },
    {
      name: "Monzo",
      logo: "/logos/JCILAGOS.svg",
      width: 200,
      height: 50,
      href: "",
    },
    {
      name: "Ramp",
      logo: "/logos/OFA.svg",
      width: 300,
      height: 50,
      href: "",
    },
    // {
    //   name: "Raycast",
    //   logo: "/logos/raycast.svg",
    //   width: 128,
    //   height: 33,
    //   href: "",
    // },
    // {
    //   name: "Arc",
    //   logo: "/logos/arc.svg",
    //   width: 90,
    //   height: 28,
    //   href: "",
    // },
  ];

  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl pt-10">
            Meet those who have journeyed with us,
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              shaping the future of SRHR for all.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-1px] ">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row - 5 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop marquee version (match mobile pattern) */}
      <div className="hidden md:block">
        <Marquee direction={direction} pauseOnHover speed={60} gradient={false} className="w-full">
          {[...companies, ...companies].map((company, index) => (
            <div key={`${company.name}-${index}`} className="mx-0 inline-flex items-center justify-center">
              <Link href={company.href} target="_blank">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain opacity-50 transition-opacity hover:opacity-70 dark:invert"
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <Link
              href={company.href}
              target="_blank"
              key={index}
              className="mx-0 inline-block transition-opacity hover:opacity-70"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};

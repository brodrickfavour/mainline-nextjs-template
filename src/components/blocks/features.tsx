import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "TRTHI Imapact attract smiles and gratitude",
    image: "/features/tentaward.jpg",
  },
  {
    title: "TRHI are beyond the horizon of the borders",
    image: "/features/tentborderless.jpg",
  },
  {
    title: "Building a hygienic and healthy environment for the people",
    image: "/features/tentsocialenterprise.jpg",
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        {/* <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            MEASURE TWICE. CUT ONCE.
          </span>
        </div> */}

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-start gap-8 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <div className="space-y-6">
            <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              The Journey of <span className="text-primary">TheRedTent Health Initiative </span>
            </h1>
            <p className="text-muted-foreground leading-snug">
              TheRedTent Health Initiative began with a vision to make sexual and reproductive health accessible. Our journey continues through community, advocacy, partnerships, and a commitment to advancing health, dignity, and choice.
            </p>
          </div>

          <div className="-mx-6 w-[calc(100%+3rem)] lg:mx-0 lg:w-full">
            <Card className="overflow-hidden rounded-none lg:rounded-3xl border border-border bg-background shadow-sm">
              <div className="relative aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/OEAsuNHOcGY?autoplay=1&mute=1&controls=1"
                  title="YouTube video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} interface`}
                      fill
                      className="object-cover object-left-top ps-4 pt-2"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <Link
                    href="#"
                    className={
                      "group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                    }
                  >
                    <h5 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                      {item.title}
                    </h5>
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                    </div>
                  </Link>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

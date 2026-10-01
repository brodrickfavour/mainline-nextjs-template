"use client";

import Image from "next/image";
import * as React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const slides = [
  {
    name: "Jane Smith",
    title: "A beautifully simple creative workspace",
    description:
      "Build high-impact stories, landing pages, and brand experiences with an intuitive design system.",
    image: "/investors/1.webp",
    alt: "Portrait of Jane Smith",
  },
  {
    name: "Owen Brown",
    title: "Lead with clarity and confidence",
    description:
      "Turn every launch into a memorable moment with a polished, modern homepage flow.",
    image: "/investors/2.webp",
    alt: "Portrait of Owen Brown",
  },
  {
    name: "Mia Patel",
    title: "Designed for teams that move fast",
    description:
      "Stay inspired with a dashboard built for momentum, visibility, and beautiful results.",
    image: "/investors/3.webp",
    alt: "Portrait of Mia Patel",
  },
  {
    name: "Leo Kim",
    title: "Create without compromise",
    description:
      "Feel the speed of a UI that keeps your focus where it belongs: on your next big idea.",
    image: "/investors/4.webp",
    alt: "Portrait of Leo Kim",
  },
];

const getSlideTransform = (
  index: number,
  selectedIndex: number,
  length: number,
) => {
  const previousIndex = (selectedIndex - 1 + length) % length;
  const nextIndex = (selectedIndex + 1) % length;

  if (index === selectedIndex) {
    return "scale-100 rotate-0 z-20 opacity-100";
  }

  if (index === previousIndex) {
    return "scale-95 -rotate-6 z-10 opacity-80";
  }

  if (index === nextIndex) {
    return "scale-95 rotate-6 z-10 opacity-80";
  }

  return "scale-90 opacity-40 blur-sm";
};

export const HeroTwo = ({ className }: { className?: string }) => {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const handlePointerDown = () => {
      setIsPaused(true);
    };

    handleSelect();
    emblaApi.on("select", handleSelect);
    emblaApi.on("pointerDown", handlePointerDown);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("pointerDown", handlePointerDown);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => window.clearInterval(interval);
  }, [emblaApi, isPaused]);

  React.useEffect(() => {
    if (!isPaused) {
      return;
    }

    const resume = window.setTimeout(() => {
      setIsPaused(false);
    }, 5000);

    return () => window.clearTimeout(resume);
  }, [isPaused]);

  return (
    <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
      <div className="container max-w-[90rem]">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Featured design
          </p>
          <h1 className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The only App you&apos;ll ever need to stay inspired
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum animi,
            ipsam provident optio delectus neque aliquid cumque. Beatae, odio!
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button className="shadow-md" asChild>
              <a href="#">Get started</a>
            </Button>
            <Button variant="outline" className="shadow-md" asChild>
              <a href="#">
                See how it works <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mt-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
            }}
            setApi={setEmblaApi}
            className="relative"
          >
            <CarouselContent className="overflow-visible px-0">
              {slides.map((slide, index) => (
                <CarouselItem
                  key={slide.name}
                  className={cn(
                    "min-[1100px]:basis-[28%] sm:basis-[42%] basis-[80%]",
                    "transition-all duration-500 ease-out",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-[2rem] border border-slate-200/10 bg-slate-950 shadow-2xl transition-all duration-500 ease-out",
                      getSlideTransform(index, selectedIndex, slides.length),
                    )}
                  >
                    <div className="relative h-[28rem] w-full">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 rounded-b-[2rem] bg-gradient-to-t from-slate-950/95 to-transparent p-6 text-white">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
                        {slide.name}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
                        {slide.title}
                      </h2>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-12 translate-y-0 shadow-xl [&>svg]:size-5" />
            <CarouselNext className="bg-muted hover:bg-muted/80 static size-12 translate-y-0 shadow-xl [&>svg]:size-5" />
          </Carousel>

          <div className="mt-8 flex flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-3">
              {slides.map((slide, index) => (
                <span
                  key={slide.name}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === selectedIndex
                      ? "w-14 bg-foreground"
                      : "w-6 bg-muted-foreground/50",
                  )}
                />
              ))}
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 shadow-lg shadow-slate-950/10 backdrop-blur">
              {slides[selectedIndex]?.name}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

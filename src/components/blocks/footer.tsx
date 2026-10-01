import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    // { name: "Product", href: "/#feature-modern-teams" },
    { name: "About Us", href: "" },
    // { name: "FAQ", href: "/faq" },
    // { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  const legal = [{ name: "", href: "" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Join our community
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Let build a community where mentraul health and hygiene is prioritized.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="">
              Volunteer with Us
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <Image
          src="images/TheRedTent.png"
          alt=""
          aria-hidden="true"
          width={1570}
          height={293}
          className="h-auto w-full"
        />
      </div>
    </footer>
  );
}

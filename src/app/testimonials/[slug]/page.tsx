import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  testimonials,
  getTestimonial,
  getAdjacentTestimonials,
} from "@/lib/testimonials";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return testimonials.map((testimonial) => ({
    slug: testimonial.slug,
  }));
}

export default async function TestimonialPage({
  params,
}: Props) {
  const { slug } = await params;

  const testimonial = getTestimonial(slug);

  if (!testimonial) {
    notFound();
  }

  const { previous, next } =
    getAdjacentTestimonials(slug);

  return (
    <main className="container py-20 lg:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Back to homepage testimonials */}
        <Button
          variant="ghost"
          asChild
          className="mb-8"
        >
          <Link href="/#testimonials">
            <ArrowLeft className="size-4" />
            Back to testimonials
          </Link>
        </Button>

        {/* Main testimonial */}
        <Card className="overflow-hidden border-none bg-muted">
          {/* Hero image */}
          <div className="relative aspect-[16/9]">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Content */}
          <CardContent className="p-8 md:p-12 lg:p-16">
            <article className="mx-auto max-w-3xl">

              <blockquote className="font-display text-3xl font-medium leading-tight md:text-5xl">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-8">
                <div className="text-primary font-semibold">
                  {testimonial.author},{" "}
                  {testimonial.role}
                </div>

                <div className="text-muted-foreground text-sm">
                  {testimonial.company}
                </div>
              </div>

              <div className="mt-12 space-y-6 text-lg leading-relaxed">
                {testimonial.content.map(
                  (paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  )
                )}
              </div>

            </article>
          </CardContent>
        </Card>

        {/* Previous / Next */}
        <div className="mt-8 flex items-center justify-between">

          {previous ? (
            <Button
              variant="outline"
              asChild
            >
              <Link
                href={`/testimonials/${previous.slug}`}
              >
                <ArrowLeft className="size-4" />
                Previous
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {next ? (
            <Button
              variant="outline"
              asChild
            >
              <Link
                href={`/testimonials/${next.slug}`}
              >
                Next
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <div />
          )}

        </div>
      </div>
    </main>
  );
}
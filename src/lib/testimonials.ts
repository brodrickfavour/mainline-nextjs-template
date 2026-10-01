import fs from "fs";
import path from "path";
import YAML from "yaml";

export type Testimonial = {
  slug: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  summary: string;
  content: string[];
};

type TestimonialsData = {
  testimonials: Testimonial[];
};

const filePath = path.join(
  process.cwd(),
  "public/data/testimonials.yaml"
);

const file = fs.readFileSync(filePath, "utf8");

const data = YAML.parse(file) as TestimonialsData;

export const testimonials = data.testimonials;

export function getTestimonial(slug: string) {
  return testimonials.find(
    (testimonial) => testimonial.slug === slug
  );
}

export function getAdjacentTestimonials(slug: string) {
  const currentIndex = testimonials.findIndex(
    (testimonial) => testimonial.slug === slug
  );

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  const previous =
    testimonials[
      (currentIndex - 1 + testimonials.length) %
        testimonials.length
    ];

  const next =
    testimonials[
      (currentIndex + 1) % testimonials.length
    ];

  return {
    previous,
    next,
  };
}
"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Priya S.",
    location: "Bangalore, India",
    quote: "Finally, an app that understands Indian thalis and curries. Calry AI is a game-changer for my diet!",
  },
  {
    id: "testimonial-2",
    name: "Michael B.",
    location: "New York, USA",
    quote: "The AI is shockingly accurate. It's so much faster than MyFitnessPal. Snap, log, done. Brilliant.",
  },
  {
    id: "testimonial-3",
    name: "Chloe T.",
    location: "London, UK",
    quote: "The community challenges are so motivating! #CalryAIChallenge kept me consistent and I've never felt better.",
  },
  {
    id: "testimonial-4",
    name: "Fatima A.",
    location: "Dubai, UAE",
    quote: "I love that it recognizes Middle Eastern dishes. The portion size estimation is scarily good. Highly recommended!",
  },
  {
    id: "testimonial-5",
    name: "Kenji T.",
    location: "Tokyo, Japan",
    quote: "Tracking calories used to be a chore. Calry AI makes it fun and almost effortless. The interface is beautiful.",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section className="bg-stone-800 overflow-hidden">
      <div className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-white">
          Loved by Users Worldwide
        </h2>
        <p className="mt-4 mb-12 text-lg text-white text-center">
          See what our global community is saying about Calry AI.
        </p>

        {/* First Row - Left to Right */}
        <div className="mb-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent>
              {duplicatedTestimonials.map((testimonial, index) => {
                const originalIndex = index % testimonials.length;
                const image = PlaceHolderImages.find(
                  (img) => img.id === `testimonial-${originalIndex + 1}`
                );
                return (
                  <CarouselItem
                    key={`row1-${testimonial.id}-${index}`}
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                              <AvatarFallback>
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between">
                          <p className="text-foreground/80 text-sm">&quot;{testimonial.quote}&quot;</p>
                          <div className="flex mt-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Second Row - Right to Left (using CSS transform hack) */}
        <div className="mb-6">
          <div className="transform scale-x-[-1]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent>
                {duplicatedTestimonials.map((testimonial, index) => {
                  const originalIndex = index % testimonials.length;
                  const image = PlaceHolderImages.find(
                    (img) => img.id === `testimonial-${originalIndex + 1}`
                  );
                  return (
                    <CarouselItem
                      key={`row2-${testimonial.id}-${index}`}
                      className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <div className="p-1 h-full transform scale-x-[-1]"> {/* Add reverse transform here */}
                        <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                                <AvatarFallback>
                                  {testimonial.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.location}
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col justify-between">
                            <p className="text-foreground/80 text-sm">&quot;{testimonial.quote}&quot;</p>
                            <div className="flex mt-4">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
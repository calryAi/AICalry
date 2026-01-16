"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const challengeSteps = [
  "Download the Calry AI app",
  "Snap your plate & log calories instantly",
  "Share with #CalryAIChallenge",
  "Win exclusive prizes + get featured!",
];

const galleryImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith("challenge-gallery-")
);

export function ChallengeSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2024-12-31") - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="challenge" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            The Calry AI Challenge:{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 text-transparent bg-clip-text">
              Snap, Share & Win!
            </span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of food lovers in our weekly challenge. It&apos;s simple, fun, and rewarding.
          </p>

          <div className="mt-8 space-y-4">
            {challengeSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>

          <Button className="mt-8" size="lg" asChild>
            <Link href="https://play.google.com/store/search?q=calry%20ai">Join the Challenge</Link>
          </Button>
          
          <Card className="mt-10 bg-card border-primary/20 border-2">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Challenge ends in:</p>
              <div className="flex justify-center gap-4 text-3xl font-bold font-mono text-foreground">
                <div>{String(timeLeft.days).padStart(2, '0')} <span className="text-xs font-sans text-muted-foreground">Days</span></div>
                <div>:</div>
                <div>{String(timeLeft.hours).padStart(2, '0')} <span className="text-xs font-sans text-muted-foreground">Hrs</span></div>
                <div>:</div>
                <div>{String(timeLeft.minutes).padStart(2, '0')} <span className="text-xs font-sans text-muted-foreground">Mins</span></div>
                <div>:</div>
                <div>{String(timeLeft.seconds).padStart(2, '0')} <span className="text-xs font-sans text-muted-foreground">Secs</span></div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:order-1">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
           <p className="text-center mt-4 text-sm text-muted-foreground"> Calry AI Challenge Submissions</p>
        </div>
      </div>
    </section>
  );
}

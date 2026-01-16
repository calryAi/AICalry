import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(
    (image) => image.id === "hero-app-mockup"
  );
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-7xl font-bold font-headline">
          <h1 className="inline animate-fade-in-up">
            Snap, Analyze, Thrive. The Future of{" "}
            <span className="inline bg-gradient-to-r from-primary via-purple-500 to-orange-400 text-transparent bg-clip-text">
              Calorie Tracking
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 animate-fade-in-up animation-delay-300">
          Welcome to Calry AI. Ditch manual logging. Just snap a photo of your meal and let our advanced AI do the rest.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up animation-delay-600">
          <Button className="w-full md:w-auto" size="lg" asChild>
            <Link href="https://play.google.com/store/search?q=calry%20ai">Start for Free</Link>
          </Button>
          <Button variant="outline" className="w-full md:w-auto" size="lg" asChild>
            <Link href="#challenge">Join the Challenge</Link>
          </Button>
        </div>
      </div>

      <div className="z-10 animate-fade-in animation-delay-200">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            width={350}
            height={700}
            className="rounded-2xl shadow-2xl shadow-primary/20 -rotate-6 transform hover:rotate-0 hover:scale-105 transition-transform duration-300"
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>

    </section>
  );
}

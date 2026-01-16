import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function FounderStorySection() {
    const founderImage = PlaceHolderImages.find(
        (image) => image.id === "founders-photo"
      );

  return (
    <section className="bg-stone-800">
        <div className="container grid lg:grid-cols-2 gap-16 place-items-center py-24 sm:py-32">
            <div className="order-2 lg:order-1 text-white">
                <p className="text-primary font-semibold">Our Mission</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2">From a Personal Need to a Global Movement</h2>
                <p className="mt-6 text-lg text-white">
                &quot;We struggled to find a calorie tracker that understood the diversity of global cuisines. So we built our own. Calry AI is our answer—a tool that makes healthy eating accessible, accurate, and enjoyable for everyone, everywhere. We're just getting started on our mission to build a healthier world, one plate at a time.&quot;
                </p>
                <p className="mt-4 font-semibold text-foreground/80 text-gray-300">- The Calry AI Founders</p>
            </div>
            <div className="order-1 lg:order-2">
                {founderImage && (
                    <Image
                        src={founderImage.imageUrl}
                        alt={founderImage.description}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl shadow-primary/10"
                        data-ai-hint={founderImage.imageHint}
                    />
                )}
            </div>
        </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "blog-1",
    title: "Why MyFitnessPal Misses Out on Your Real Diet",
  },
  {
    id: "blog-2",
    title: "Top 10 Calorie Hacks for Global Foods",
  },
  {
    id: "blog-3",
    title: "How AI Makes Calorie Tracking Fun Again",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
        Live Food Blog & Stories
      </h2>
      <p className="mt-4 mb-12 text-lg text-muted-foreground text-center">
        Insights, tips, and stories to fuel your health journey.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const image = PlaceHolderImages.find((img) => img.id === post.id);
          return (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              {image && (
                <div className="aspect-video relative">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild variant="link" className="p-0">
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

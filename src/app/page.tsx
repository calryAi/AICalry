import { BlogSection } from "@/components/landing/BlogSection";
import { ChallengeSection } from "@/components/landing/ChallengeSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { Footer } from "@/components/landing/Footer";
import { FounderStorySection } from "@/components/landing/FounderStorySection";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { LeaderboardSection } from "@/components/landing/LeaderboardSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-foreground ">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ChallengeSection />
        <ComparisonSection />
        <FounderStorySection />
        <BlogSection />
        {/* <TestimonialsSection /> */}
        <LeaderboardSection />
      </main>
      <Footer />
    </div>
  );
}

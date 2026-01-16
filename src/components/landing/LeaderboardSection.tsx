import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Crown, Medal, Trophy, Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const leaderboardData = [
  {
    rank: 1,
    id: "leaderboard-user-1",
    name: "PixelPlates",
    points: 21543,
    icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />,
  },
  {
    rank: 2,
    id: "leaderboard-user-2",
    name: "KetoKing",
    points: 19892,
    icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />,
  },
  {
    rank: 3,
    id: "leaderboard-user-3",
    name: "GourmetGains",
    points: 18765,
    icon: <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />,
  },
  {
    rank: 4,
    id: "leaderboard-user-4",
    name: "FitFoodie",
    points: 17543,
    icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
  },
  {
    rank: 5,
    id: "leaderboard-user-5",
    name: "CalorieConqueror",
    points: 16231,
    icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
  },
];

export function LeaderboardSection() {
  return (
    <section className="container py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 place-items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline">
            Top Snappers This Week
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Join our vibrant community and see your plate featured on the global stage. A little friendly competition makes the journey more exciting.
          </p>
          <div className="mt-6 lg:mt-8">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#">View Full Leaderboard</Link>
            </Button>
          </div>
        </div>
        <Card className="w-full max-w-sm sm:max-w-md shadow-lg bg-card mx-auto">
          <CardHeader className="pb-3">
            <CardTitle className="text-center font-headline text-xl sm:text-2xl">
              Global Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="space-y-2 sm:space-y-3">
              {leaderboardData.map((user) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === user.id
                );
                return (
                  <div
                    key={user.rank}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-background hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-2 w-12 sm:w-16">
                      <span className="font-bold text-sm sm:text-lg w-4 sm:w-6 text-center">
                        {user.rank}
                      </span>
                      {user.icon}
                    </div>
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      {image && (
                        <AvatarImage src={image.imageUrl} alt={user.name} data-ai-hint={image.imageHint} />
                      )}
                      <AvatarFallback className="text-xs sm:text-sm">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base truncate">
                        {user.name}
                      </p>
                    </div>
                    <div className="font-bold text-primary text-sm sm:text-base whitespace-nowrap">
                      {user.points.toLocaleString()} pts
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
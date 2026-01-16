import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const comparisonData = [
  {
    feature: "Global & Local Food Detection",
    myfitnesspal: false,
    calai: false,
    snaptrack: true,
  },
  {
    feature: "Advanced AI Calorie Estimation",
    myfitnesspal: false,
    calai: true,
    snaptrack: true,
    snaptrackDetail: "Higher Accuracy",
  },
  {
    feature: "Generous Free Tier",
    myfitnesspal: false,
    calai: false,
    snaptrack: true,
  },
  {
    feature: "Community Challenges & Leaderboards",
    myfitnesspal: false,
    calai: false,
    snaptrack: true,
    snaptrackDetail: "#CalryAIChallenge",
  },
  {
    feature: "Meal History & Progress Tracking",
    myfitnesspal: true,
    calai: true,
    snaptrack: true,
  },
  {
    feature: "Barcode Scanning",
    myfitnesspal: true,
    calai: false,
    snaptrack: true,
  },
];

export function ComparisonSection() {
  const Tick = () => <Check className="text-green-500 mx-auto" />;
  const Cross = () => <X className="text-red-500/70 mx-auto" />;

  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
        The Clear Winner in Smart Dieting
      </h2>
      <p className="mt-4 mb-12 text-lg text-muted-foreground text-center">
        See how Calry AI leaves the competition behind.
      </p>
      <div className="max-w-4xl mx-auto">
        <div className="border rounded-lg shadow-lg bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-1/3 text-lg font-bold">Feature</TableHead>
                <TableHead className="text-center text-lg font-bold">MyFitnessPal</TableHead>
                <TableHead className="text-center text-lg font-bold">Cal AI</TableHead>
                <TableHead className="text-center text-lg font-bold text-primary">Calry AI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((item) => (
                <TableRow key={item.feature} className="hover:bg-primary/5">
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">
                    {item.myfitnesspal ? <Tick /> : <Cross />}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.calai ? <Tick /> : <Cross />}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                      {item.snaptrack ? <Tick /> : <Cross />}
                      {item.snaptrackDetail && (
                        <span className="text-xs text-primary mt-1">
                          {item.snaptrackDetail}
                        </span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="text-center mt-12">
        <Button size="lg" asChild>
          <Link href="https://play.google.com/store/search?q=calry%20ai">Make the Smart Switch</Link>
        </Button>
      </div>
    </section>
  );
}

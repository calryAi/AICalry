import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Calry AI - AI Calorie Counter & Diet Tracker',
  description: 'Instantly track calories and nutrition by snapping a photo. Calry AI is the world\'s smartest food scanner and diet planner. Supports global cuisines. Join challenges, track progress, and thrive.',
  keywords: ['calorie counter', 'diet tracker', 'food scanner', 'nutrition tracker', 'AI diet', 'health app', 'fitness', 'weight loss', 'meal planner'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="font-body antialiased min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
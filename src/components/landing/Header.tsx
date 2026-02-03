import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img
            src="/images/logo/logo.png"
            alt="Logo"
            className="w-15 h-10"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/#challenge"
            className="transition-colors hover:text-black/100 text-foreground/800 font-medium"
          >
            Challenge
          </Link>
          <Link
            href="/#features"
            className="transition-colors hover:text-black/100 text-foreground/800 font-medium"
          >
            Features
          </Link>
          <Link
            href="/#blog"
            className="transition-colors hover:text-black/100 text-foreground/800 font-medium"
          >
            Blog
          </Link>

          <Link
            href="/privacy-policy"
            className="text-sm text-foreground/100 hover:text-foreground/800 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-foreground/100 hover:text-foreground/800 transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">

          {/* App Store Download Button */}
          <Link
            href="https://apps.apple.com/in/app/calry-ai-ai-calorie-counter/id6752832435"
            className="hidden md:flex items-center transition-transform hover:scale-105"
          >
            <Image
              src="/images/App_Store_Badge.svg.png"
              alt="Download on App Store"
              width={140}
              height={42}
              className="h-[42px] w-auto"
            />
          </Link>

          {/* Google Play Download Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.calories.tracker.calryai&hl=en_IN"
            className="hidden md:flex items-center transition-transform hover:scale-105"
          >
            <Image
              src="/images/Google-Play-Button.png"
              alt="Get on Google Play"
              width={140}
              height={42}
              className="h-[42px] w-auto"
            />
          </Link>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {/* Main Navigation */}
              <DropdownMenuItem asChild>
                <Link href="/#challenge" className="cursor-pointer">Challenge</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#features" className="cursor-pointer">Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#blog" className="cursor-pointer">Blog</Link>
              </DropdownMenuItem>

              {/* Legal Links - Mobile */}
              <DropdownMenuItem asChild>
                <Link href="/privacy-policy" className="cursor-pointer text-foreground/800">
                  Privacy Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/terms-of-service" className="cursor-pointer text-foreground/800">
                  Terms of Service
                </Link>
              </DropdownMenuItem>

              {/* App Store in Dropdown */}
              <DropdownMenuItem asChild>
                <Link
                  href="https://apps.apple.com/app/calry-ai"
                  className="flex items-center justify-center p-2 cursor-pointer"
                >
                  <div className="flex items-center justify-start w-full">
                    <Image
                      src="/images/App_Store_Badge.svg.png"
                      alt="Download on App Store"
                      width={120}
                      height={36}
                      className="h-[36px] w-auto"
                    />
                  </div>
                </Link>
              </DropdownMenuItem>

              {/* Google Play in Dropdown */}
              <DropdownMenuItem asChild>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.calry.ai"
                  className="flex items-center justify-center p-2 cursor-pointer"
                >
                  <div className="flex items-center justify-start w-full">
                    <Image
                      src="/images/Google-Play-Button.png"
                      alt="Get on Google Play"
                      width={120}
                      height={36}
                      className="h-[36px] w-auto"
                    />
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

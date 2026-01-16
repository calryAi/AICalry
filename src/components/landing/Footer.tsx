import { Facebook, Instagram, Twitter, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export function Footer() {
  return (
    <footer className="bg-accent mt-10 ">
      {/* Final CTA */}
      <section className="container py-10 text-center  flex flex-col sm:flex-row justify-center items-center">
        <div className="relative flex flex-col items-center justify-center">

          <div className="footer-site-logo mb-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo/logo.png"
                alt="Logo"
                className="w-15 h-10"
              />
            </div>            </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://apps.apple.com/us/app/calory-ai-calorie-counter/id6443610539"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/App_Store_Badge.svg.png"
                alt="Download on the App Store"
                width={160}
                height={54}
                className="transform hover:scale-105 transition-transform"
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.calory.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Google-Play-Button.png"
                alt="Get it on Google Play"
                width={160}
                height={54}
                className="transform hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          <div className="social my-4">
            <h3>Stay in touch</h3>
            <ul className="list-unstyled">
              <li className="in"><a href="#"><span className="icon-instagram"></span></a></li>
              <li className="fb"><a href="#"><span className="icon-facebook"></span></a></li>
              <li className="tw"><a href="#"><span className="icon-twitter"></span></a></li>
              <li className="pin"><a href="#"><span className="icon-pinterest"></span></a></li>
              <li className="dr"><a href="#"><span className="icon-dribbble"></span></a></li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>


        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-border flex flex-col sm:flex-row justify-center items-center">
        <div className="container py-8 flex flex-col sm:flex-row justify-center items-center gap-4">

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Calry AI. All rights reserved.
          </div>

        </div>
      </div>

    </footer>


  );
}

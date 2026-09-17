import { GlowBackground } from "@/components/welcome/GlowBackground";
import { HeroSection } from "@/components/welcome/HeroSection";
import { IntroSection } from "@/components/welcome/IntroSection";
import { PlatformSection } from "@/components/welcome/PlatformSection";
import { Footer } from "@/components/welcome/Footer";
import { BackToTop } from "@/components/welcome/BackToTop";

export default function Home() {
  return (
    <main className="relative">
      <GlowBackground />
      <HeroSection />
      <IntroSection />
      <PlatformSection />
      <Footer />
      <BackToTop />
    </main>
  );
}

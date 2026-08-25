import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import FloatingActions from "@/components/FloatingActions";
import HeroBanner from "@/components/HeroBanner";
import BuildProcess from "@/components/BuildProcess";
import ProjectsSection from "@/components/ProjectsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StatsServices from "@/components/StatsServices";
import Testimonials from "@/components/Testimonials";
import VisionIntro from "@/components/VisionIntro";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background">
        <HeroBanner />
        <VisionIntro />
        <StatsServices />
        <WhyChooseUs />
        <BuildProcess />
        <ProjectsSection />
        <Testimonials />
        <BlogSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}

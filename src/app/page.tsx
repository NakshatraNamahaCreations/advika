import AboutUs from "@/components/AboutUs";
import Achievements from "@/components/Achievements";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import FloatingActions from "@/components/FloatingActions";
import HeroBanner from "@/components/HeroBanner";
import BuildProcess from "@/components/BuildProcess";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServiceDetails from "@/components/ServiceDetails";
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
      {/* overflow-x-clip: slide-in reveals start 48px off to the right and
          must not widen the page (clip, unlike hidden, keeps sticky working) */}
      <main className="flex-1 overflow-x-clip bg-background">
        <HeroBanner />
        <AboutUs />
        <VisionIntro />
        <StatsServices />
        <ServiceDetails />
        <WhyChooseUs />
        <BuildProcess />
        <ProjectsSection />
        <Achievements />
        <Testimonials />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}

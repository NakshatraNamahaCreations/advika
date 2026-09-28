import type { Metadata } from "next";
import AboutProfile from "@/components/AboutProfile";
import FloatingActions from "@/components/FloatingActions";
import PageBanner from "@/components/PageBanner";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "About us — Advika Constructions & Architects",
  description:
    "The Advicon strength: our company structure and experienced workforce, from the proprietor and site team to the civil crews and technician teams.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-x-clip bg-background">
        <PageBanner
          crumb="About us"
          title="About us"
          subtitle="Advika Constructions & Architects, established in 2016. A team of dedicated architects, engineers and construction professionals, committed to bringing visions to life."
          image="/profile/p16-1.jpg"
          alt="Completed two-storey house with wood cladding, a pergola and carved entrance gates in Bengaluru"
        />
        <AboutProfile />
        <TeamSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}

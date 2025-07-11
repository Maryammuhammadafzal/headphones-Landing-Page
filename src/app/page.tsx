import Image from "next/image";
import TestimonialPage from "./testimonial/page";
import WorkPage from "./work/page";
import HighlightPage from "./highlights/page";
import DifferentPage from "./different/page";
import FeaturesPage from "./features/page";
import HeroPage from "./hero/page";

export default function Home() {
  return (
<div className="w-full h-auto overflow-hidden lg:p-8 md:p-6 sm:p-4 p-2 relative">
  <HeroPage/>
  <FeaturesPage/>
  <HighlightPage/>
  <DifferentPage/>
  <WorkPage/>
  <TestimonialPage/>
</div>
  );
}

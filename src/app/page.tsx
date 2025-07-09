import Image from "next/image";
import TestimonialPage from "./testimonial/page";
import WorkPage from "./work/page";

export default function Home() {
  return (
<div className="w-full h-auto overflow-hidden p-8 relative">
  <WorkPage/>
  <TestimonialPage/>
</div>
  );
}

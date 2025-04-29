import OurProducts from "./OurProducts";
import Testimonials from "./Testimonials";
import VideoPlayer from "./VideoPlayer";
import WhatWeDo from "./WhatWeDo";

export default function Home() {
  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <VideoPlayer />
      <WhatWeDo/>
      <OurProducts/>
      <Testimonials />
    </div>
  );
}

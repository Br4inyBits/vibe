import Image from "next/image";
import styles from "./page.module.css";

import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <>
      <meta property="og:title" content="Vibe ― WMV" />
      <meta property="og:description" content="The 3D Video Slider Carousel is an advanced web component developed using Next.js, designed to provide an immersive and interactive user experience." />
      <meta property="og:image" content="https://c.top4top.io/p_3156tjy421.jpeg" />
      <meta
        name="description"
        content="The 3D Video Slider Carousel is an advanced web component developed using Next.js, designed to provide an immersive and interactive user experience."
      />
      <title>Vibe ― WMV</title>
      <Slider />
    </>
  );
}

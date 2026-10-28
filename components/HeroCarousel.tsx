"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import slider1 from "@/img/Banners/slider_1.jpg";
import slider2 from "@/img/Banners/slider_2.jpg";
import slider3 from "@/img/Banners/slider_3.jpg";
import slider4 from "@/img/Banners/slider_4.jpg";

const SLIDES = [slider1, slider2, slider3, slider4];
const INTERVAL_MS = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-carousel">
      {SLIDES.map((src, i) => (
        <div
          key={i}
          className={`hero-carousel-slide${i === index ? " active" : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="hero-carousel-image"
          />
        </div>
      ))}
      <div className="hero-carousel-overlay" />
      <div className="hero-carousel-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-carousel-dot${i === index ? " active" : ""}`}
            aria-label={`Ver imagen ${i + 1} de ${SLIDES.length}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}


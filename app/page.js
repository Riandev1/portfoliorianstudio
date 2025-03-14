"use client";

import { useEffect, useState } from 'react';
import { personalData } from "@/utils/data/personal-data";
import dynamic from "next/dynamic"; // Import para carregar componentes dinamicamente
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// Carregar dinamicamente o componente do Blog com "ssr: false"
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });

// Função para buscar dados de blogs
async function fetchBlogData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
}

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchBlogData();
      setBlogs(data);
    }

    // Verifica se estamos no cliente antes de carregar os dados
    if (typeof window !== 'undefined') {
      loadData();
    }
  }, []);

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}

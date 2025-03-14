import React from 'react';
import { FaVideo, FaPaintBrush, FaInstagram, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa'; // Adicione ícones

const skills = [
  { icon: <FaVideo />, skill: 'Edição de Vídeo: Adobe Premiere Pro, After Effects, DaVinci Resolve, CapCut Pro, Filmora' },
  { icon: <FaPaintBrush />, skill: 'Design Gráfico: Adobe Photoshop, Illustrator, Canva Pro' },
  { icon: <FaInstagram />, skill: 'Social Media: Estratégias de conteúdo, copywriting, análise de métricas, calendário editorial' },
  { icon: <FaTiktok />, skill: 'Plataformas: Instagram, TikTok, YouTube, Facebook' },
  { icon: <FaYoutube />, skill: 'Outras: Storytelling, cortes dinâmicos, efeitos criativos, identidade visual' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white animated">
      <div className="container text-center">
        <h2 className="font-bold">Habilidades Técnicas</h2>
        <ul className="space-y-4">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              {skill.icon}
              <span>{skill.skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

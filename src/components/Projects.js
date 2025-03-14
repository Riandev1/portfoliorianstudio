import React from 'react';

const projects = [
  {
    title: 'EcoAventura - Campanha de Marketing',
    description: 'Editei 10 vídeos promocionais, ajustando a velocidade, adicionando transições suaves e efeitos especiais.',
  },
  {
    title: 'TechSolution - Vídeo de Apresentação Institucional',
    description: 'Criação e edição de um vídeo de apresentação institucional destacando a missão e serviços da empresa.',
  },
  {
    title: 'Exploradores do Mundo - Vlogs de Viagem',
    description: 'Edição de 15 vlogs de viagem utilizando Adobe Premiere Pro, correção de cor e adição de trilhas sonoras.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100">
      <div className="container text-center">
        <h2 className="font-bold">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

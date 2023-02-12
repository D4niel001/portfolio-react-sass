import "../styles/components/projectscontainer.sass"

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        <div className="projects-card">
          <h3>Relógio</h3>
          <img src="../src/img/relogio-digital.png" alt="relogio" />
          <div className="links">
            <a href="https://github.com/D4niel001/relogio-digital" target="_blank" >Github</a>
            <a href="https://relogio-digital-online.netlify.app/" target="_blank">Deploy</a>
          </div>
        </div>
        <div className="projects-card">
          <h3>Calculadora</h3>
          <img src="../src/img/calculadora.png" alt="calculadora" />
          <div className="links">
            <a href="https://github.com/D4niel001/Calculadora" target="_blank">Github</a>
            <a href="https://calculadora-on.netlify.app/" target="_blank">Deploy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer
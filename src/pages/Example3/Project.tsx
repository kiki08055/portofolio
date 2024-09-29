import React from 'react'

const Projects: React.FC = () => {
  return (
    <div>
      <section className="projects" id="projects">
        <h3 className='Projects_title'>Projects</h3>
        <div className="project">
          <h4>Project 1</h4>
          <a href="https://github.com/kikiaryani/project1" target="_blank">Lihat Projek</a>  
        </div>
        <div className="project">
          <h4>Project 2</h4>    
          <a href="https://github.com/kikiaryani/project2" target="_blank">Lihat Projek</a>
        </div>
      </section>
    </div>
  );
}

export default Projects
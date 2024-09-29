import React from 'react';

const Home: React.FC = () => {
  return (
      <div className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">Hi, I'm <span className="home__title-color">Kiki</span> Web Designer</h1>
          <a href="/contact" className="button">Contact</a>
        </div>

        <div className="home__social">
          <a href="https://instagram.com" className="home__social-icon"></a>
          <a href="https://wa.me/" className="home__social-icon"></a>
          <a href="https://github.com" className="home__social-icon"></a>
        </div>

        <div className="home__img">
          <img className="home__blob-img" src="https://i.pinimg.com/564x/56/2e/be/562ebed9cd49b9a09baa35eddfe86b00.jpg" alt="Description" />
        </div>
      </div>
  );
}

export default Home;
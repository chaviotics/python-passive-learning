import HSCSS from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={HSCSS.container}>
      <h1 className={HSCSS.headline}>
        Welcome to this
        <br />
        Interactive Python Tutorial
      </h1>
      <button className={HSCSS.button}>Get Started</button>
    </div>
  );
}

export default HeroSection;

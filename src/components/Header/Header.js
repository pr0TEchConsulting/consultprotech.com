import { useCallback } from 'react';

const Header = () => {
  const headerHeight = 95;
  const handleScroll = useCallback((event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  }, [headerHeight]);

  return (
    <header>
      <div className="leftLogo">
        <figure>
          <img src="/static/assets/images/propTechLogo.svg" className="img-responsive" alt="PropTech Logo" />
        </figure>
      </div>
      <nav>
        <ul>
          <li >
            <a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a>
          </li>
          <li>
            <a href="#work" onClick={(e) => handleScroll(e, 'work')}>Work</a>
          </li>
          <li>
            <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')}>Testimonials</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
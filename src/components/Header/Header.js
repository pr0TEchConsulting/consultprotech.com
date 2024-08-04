import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="leftLogo">
        <figure>
          <Image 
            src="/static/assets/images/propTechlogo.png" 
            alt="PropTech Logo" 
            layout="responsive" 
            width={150} // Adjust width and height according to your image
            height={50} // Adjust width and height according to your image
          />
        </figure>
      </div>
      <nav>
        <ul className="navList">
          <li>
            <Link className="navLink" href="/services">Services</Link>
          </li>
          <li>
            <Link className="navLink" href="/work">Work</Link>
          </li>
          <li>
            <Link className="navLink" href="/insights">Insights</Link>
          </li>
          <li>
            <Link className="navLink" href="/about">About</Link>
          </li>
          <li>
            <Link className="navLink" href="/contact">Contact</Link>
          </li>
          <li className="btn btn-primary getStarted">
            <Link className="navLink" href="/services">Get Started</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

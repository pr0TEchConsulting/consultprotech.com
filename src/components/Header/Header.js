import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
            <div className="leftLogo">
               <figure>
                <img src="static/assets/images/propTechLogo.svg" className="img-responsive" />
               </figure>
            </div>
            <nav>
                <ul>
                    <li>Services</li>
                    <li>Work</li>
                    <li>Insights</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className="btn btn-primary getStarted">Services</li>
                </ul>
            </nav>

        </header>
  );
};

export default Header;

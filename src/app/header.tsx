import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and home link */}
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <Image src="/path-to-your-logo.png" alt="Logo" width={50} height={50} />
            <span className="font-bold text-xl ml-2">Your Brand</span>
          </a>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/about" passHref legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900 transition duration-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900 transition duration-300">Portfolio</a>
              </Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>

        {/* Contact or CTA button */}
        <div>
          <Link href="/contact" passHref legacyBehavior>
            <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

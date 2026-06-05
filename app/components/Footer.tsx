import Link from 'next/link';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-5">
        <nav aria-label="Footer navigation" className="grid w-full max-w-sm grid-cols-2 gap-3 text-sm font-medium text-center">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-full text-gray-600 transition-colors hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Abdulai Mohammed Hardi. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

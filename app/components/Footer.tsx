const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Abdulai Mohammed Hardi. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
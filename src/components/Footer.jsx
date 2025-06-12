const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-center">
      <p>
        Designed with <span className="text-red-500 animate-pulse text-2xl">❤️</span> by Samsuddin Ansari. &copy; All rights reserved {currentYear}.
      </p>
    </footer>
  );
};

export default Footer;

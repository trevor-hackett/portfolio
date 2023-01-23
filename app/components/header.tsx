import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <Link to="/">Logo</Link>
      <div className="flex items-center">
        <div className="hidden sm:block">
          <Link
            to="/blog"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            Blog
          </Link>
          <Link
            to="/projects"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}

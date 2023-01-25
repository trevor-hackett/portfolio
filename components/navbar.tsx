import Link from "next/link";

export function Navbar() {
  return (
    <header className="flex items-center justify-between py-10">
      <Link href="/">Logo</Link>
      <div className="flex items-center">
        <div className="hidden sm:block">
          <Link
            href="/blog"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}

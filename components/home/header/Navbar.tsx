import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-20 flex w-full items-center justify-between gap-smallest bg-backgroundPrimary/40 bg-clip-padding px-small py-smallest backdrop-blur-xl backdrop-filter md:px-medium lg:px-xlarge xl:px-xxlarge">
      <div className="flex items-center justify-center gap-smallest sm:gap-small">
        <img
          src="/logo.svg"
          alt="logo"
          height="57"
          width="56"
          className="w-10"
        />
        <span className="text-base font-semibold sm:text-xl">
          Cover Letter Builder Pro
        </span>
      </div>
      <div className="flex items-center gap-smallest sm:gap-small">
        <a
          href="https://github.com/utl-shadab/cover-letter-builder"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden rounded-md border-2 border-dark px-6 py-2 dark:border-light/60 md:block"
        >
          Star it on GitHub
        </a>
        <Link
          prefetch={false}
          className="rounded-md bg-background px-6 py-2 text-center"
          href="/dashboard"
        >
          Go to Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

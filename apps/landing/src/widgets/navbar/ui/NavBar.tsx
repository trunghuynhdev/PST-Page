import { NavLinks } from './NavLinks';

export function Navbar() {
  return (
    <nav
      aria-label="Điều hướng chính"
      className="flex min-h-30 items-center justify-between border-b border-black/10 bg-white px-6 py-6 text-[#133b39] md:px-22 md:py-8"
    >
      <a aria-label="PST Education" className="h-19 w-22.5 shrink-0" href="/">
        <img
          alt="PST Education"
          className="h-19 w-22.5 object-cover"
          src="/assets/pst-brand.png"
        />
      </a>

      <NavLinks />
      <a
        className="shrink-0 rounded-lg bg-[#e68945] px-4 py-3.75 text-[15px] font-semibold leading-[1.45] text-white sm:px-6"
        href="#register"
      >
        Đăng ký khóa học
      </a>
    </nav>
  );
}

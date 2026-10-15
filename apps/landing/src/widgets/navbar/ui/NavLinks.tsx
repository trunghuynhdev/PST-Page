const navigationLinks = ['Trang chủ', 'Khoá học', 'Lộ trình', 'Hoạt động ngoại khoá'];

export function NavLinks() {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      {navigationLinks.map((label, index) => (
        <a
          className={`relative whitespace-nowrap py-1.75 text-sm font-medium leading-[1.45] ${index === 0 ? 'text-[#e68945] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#e68945]' : 'text-[#133b39]'} ${index > 1 ? 'hidden md:block' : ''}`}
          href="#"
          key={label}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

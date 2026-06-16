import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      className="
        flex
        items-center
        h-[55px]
        gap-[74px]
      "
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={55}
          height={55}
          className="object-contain cursor-pointer"
        />
      </Link>

      <ul className="flex items-center gap-10">
        <li>
          <Link
            href="/"
            className="font-funnel text-[18px] leading-[28px] text-white"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="font-funnel text-[18px] leading-[28px] text-white"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/pricing"
            className="font-funnel text-[18px] leading-[28px] text-white"
          >
            Pricing
          </Link>
        </li>

        <li>
          <Link
            href="/coaches"
            className="font-funnel text-[18px] leading-[28px] text-white"
          >
            Coaches
          </Link>
        </li>

        <li>
          <Link
            href="/gallery"
            className="font-funnel text-[18px] leading-[28px] text-white"
          >
            Gallery
          </Link>
        </li>

        <li>
          <Link
            href="/blogs"
            className="font-funnel text-[18px] leading-[28px] text-white"
          >
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
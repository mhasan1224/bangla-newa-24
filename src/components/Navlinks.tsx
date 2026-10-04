
import Link from "next/link";

interface NavItem {
  id: number;
  title: string;
  slug: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();
  const navs: NavItem[] = data.data;

  return (
    <div className="flex items-center justify-center gap-6 text-xl">
      <Link href="/" className="text-red-700">
        হোম
      </Link>

      {navs
        .filter((link) => link.scrapable)
        .map((link) => (
          <Link key={link.slug} href={link.slug}>
            {link.title}
          </Link>
        ))}
    </div>
  );
};

export default Navlinks;
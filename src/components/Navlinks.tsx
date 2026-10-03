import Link from "next/link";

interface NavItem {
  id: number;
  title: string;
  slug: string;
}

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");

  const data = await res.json();
  const navs: NavItem[] = data.data;

  return (
    <div className="flex items-center justify-center text-1xl gap-6">
      {navs
        .filter((_, index) => index !== 7)
        .map((link) => (
          <Link key={link.id} href={link.slug}>
            {link.title}
          </Link>
        ))}
    </div>
  );
};

export default Navlinks;

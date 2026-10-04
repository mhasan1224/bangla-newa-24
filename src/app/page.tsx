
import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();
  const sections = data.data;

  return (
    <div>
      <Marquee />

      <div className="container mx-auto my-4 grid grid-cols-1 gap-6 px-4 lg:grid-cols-3">
        {/* Left side */}
        <div className="lg:col-span-2">
          <MainNews news={sections[0]} />
        </div>

        {/* Right side */}
        <div className="bg-gray-300 lg:col-span-1">
          B side
        </div>
      </div>
    </div>
  );
}
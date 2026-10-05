import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();
  const sections = data.data;

  const otherSections = sections.slice(1);

  return (
    <div>
      <Marquee />

      <main className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side */}
          <div className="lg:col-span-2">
            {/* Main News */}
            <MainNews news={sections[0]} />

            {/* Other Sections */}
            <div className="mt-8 space-y-8">
              {otherSections.map((otherSection) => (
                <section
                  key={otherSection.curationId}
                  className="border-b-2 border-red-700 pb-6"
                >
                  {/* Section Title */}
                  <h2 className="mb-4 border-l-4 border-red-700 pl-3 text-xl font-bold sm:text-2xl">
                    {otherSection.title}
                  </h2>

                  {/* News Cards */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {otherSection.articles.map((news) => (
                      <NewsCard key={news.id} news={news} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <aside className="hidden rounded-lg bg-gray-100 p-5 lg:block">
            <h2 className="mb-4 text-lg font-bold">সর্বশেষ খবর</h2>

            <p className="text-sm text-gray-500">
              Sidebar content will go here.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
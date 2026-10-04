import Image from "next/image";

interface Article {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt?: string;
}

interface NewsSection {
  title: string;
  articles: Article[];
}

interface MainNewsProps {
  news: NewsSection;
}

const MainNews = ({ news }: MainNewsProps) => {
  const [firstNews, ...otherNews] = news.articles;

  if (!firstNews) {
    return <p>No news available.</p>;
  }

  return (
    <section className="container mx-auto px-4 py-6">
      {/* Section Title */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {/* Main News */}
        <article className="overflow-hidden rounded-lg bg-base-100 shadow-sm lg:col-span-2">
          <figure className="relative h-60 w-full sm:h-80 lg:h-96">
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt || firstNews.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </figure>
          <p className="mt-5 pl-5 text-red-700 font-semibold md:font-semibold">{news.title}</p>

          <div className="p-5">
            {/* Article Title */}
            <h3 className="text-xl font-bold sm:text-2xl">{firstNews.title}</h3>

            {firstNews.description && (
              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                {firstNews.description}
              </p>
            )}
          </div>
        </article>

        {/* Other News */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {otherNews.slice(0, 4).map((article) => (
            <article
              key={article.id}
              className="rounded-lg bg-base-100 p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="py-2 text-red-700 font-semibold md:font-semibold">{news.title}</p>
              <h3 className="font-semibold leading-6">{article.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainNews;

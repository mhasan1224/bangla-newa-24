import Image from "next/image";
interface News {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt?: string;
  category?: string;
}
interface NewsCardProps {
  news: News;
}
const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {" "}
      <figure className="relative h-48 w-full sm:h-56">
        {" "}
        <Image
          src={news.imageUrl}
          alt={news.imageAlt || news.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />{" "}
      </figure>{" "}
      <div className="p-4">
        {" "}
        {news.category && (
          <p className="mb-2 text-sm font-semibold text-red-700">
            {" "}
            {news.category}{" "}
          </p>
        )}{" "}
        <h3 className="text-lg font-bold leading-7 sm:text-xl">
          {" "}
          {news.title}{" "}
        </h3>{" "}
        {news.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
            {" "}
            {news.description}{" "}
          </p>
        )}{" "}
      </div>{" "}
    </article>
  );
};
export default NewsCard;

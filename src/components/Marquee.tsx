import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
  id: number;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=23");
  const data = await res.json();
  const headlines:Headlines[] = data.data;

  return (
    <div className="bg-red-600 text-white text-2xl py-2 container mx-auto">
       <div className="flex">
         <div className="bg-red-700 font-bold text-2xl px-3">সর্বশেষ:</div>
      <MarqueeText className="" direction="right" duration={7}>
        {headlines.map((h) => (
          <span key={h.id}>
            <span>{h.title}</span>
            <span className="mx-4">•</span>
          </span>
        ))}
      </MarqueeText>
       </div>
    </div>
  );
};

export default Marquee;


import { ArticlesData } from "../constants/data";

const Articles = () => {

        
  return (
    <section className="container font-space items-center justify-center bg-[#F1F1F1] p-10">
      <div>
        <h1 className="text-6xl font-bold text-center mb-4">
          Read All Articles
        </h1>
        <p className="text-center text-[#6F7681] text-lg mb-8">
          We're constantly pushing the boundaries of what's
          <br />
          possible and seeking new ways to improve our
          <br />
          services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {ArticlesData.map((article) => (
          <div className="text-gray-600 bg-white rounded-lg scale-100 hover:scale-105 transition-transform duration-500">
            <img
              src={article.img}
              alt="img"
              className="w-full h40 object-cover mb-4"
            />
            <p className="font-thin text-sm">{article.date}</p>
            <h2 className="text-xl font-semibold">{article.head}</h2>
            <p className="text-gray-600 font-thin text-sm">{article.content}</p>
           
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Articles
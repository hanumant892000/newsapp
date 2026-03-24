import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton ";

function News({ category }) {
  console.log(category)
  const [allNews, setAllNews] = useState([])

  const [loader, setLoader] = useState(false)

  const fetchNewData = async () => {
    try {
      setLoader(true)
      const response = await fetch(`https://newsdata.io/api/1/latest?category=${category}&language=en&size=9&apikey=fillyourapikey`)
      const data = await response.json()
      console.log(data.results)
      setAllNews(data.results)
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }
  }


  useEffect(() => {
    fetchNewData()
  }, [category])

  return (
    <>
      {/* <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        {loader ? <div className="text-center" >
          <svg className="mx-auto size-8 animate-spin text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>

          <p className="mt-4 font-medium text-gray-700">Loading...</p>
        </div> : <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold capitalize">
              {category} Latest News
            </h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {allNews?.map((news, inx) => {
              return <NewsCard key={"new" + inx} category={category} title={news?.title} description={news?.description} pubdate={news.pubDate} url={news.link
              } image={news.image_url
              } />
            })}
          </div>
        </div>}
      </section> */}

      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold capitalize">
              {category} Latest News
            </h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {loader ? Array.from({ length: 6 }).map((_, i) => <NewsCardSkeleton key={i} />) : allNews?.map((news, inx) => {
              return <NewsCard key={"new" + inx} category={category} title={news?.title} description={news?.description} pubdate={news.pubDate} url={news.link
              } image={news.image_url
              } />
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;

import { useState, useEffect } from "react";
import { Loading } from "../components";
import SearchForm from "../components/SearchForm";
import Banner from "../components/Banner";
import { Link } from "react-router-dom"
import { data } from "autoprefixer";


export default function Capsules() {
  const [capsules, setCapsules] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  useEffect(() => {
    const fetchCapsules = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/capsules");
      const data = await res.json();
      setCapsules(data);
    };

    fetchCapsules();
  }, []);

  // // Function to load more cards
  // const loadMore = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // // Calculate the index range for the current page
  // const startIndex = (currentPage - 1) * 10;
  // const endIndex = startIndex + 10;

    const paginate = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(capsules.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;


  return (
    <>
      {!capsules ? (
        <Loading />
      ) : (
        <section className="py-32">
          <Banner />
          <h1 className="heading text-center mb-10 mt-10">Capsules</h1>
          <SearchForm inputValue={inputValue} setInputValue={setInputValue} />
          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {capsules
              .filter((capsule) =>
                capsule?.status.toLowerCase().includes(inputValue.toLowerCase()) || capsule?.type.toLowerCase().includes(inputValue.toLowerCase()) ||
                capsule?.serial.toLowerCase().includes(inputValue.toLowerCase())
              )
              .slice(startIndex, endIndex) // Display only 10 cards per page
              .map(
                ({
                  id,
                  type,
                  status,
                  serial,
                  launches,
                  original_launch,
                  last_update,
                  reuse_count,
                }) => (
                  <div>
                  <Link to={`/capsules/${id}`} key={id}>
                  <article key={id} className="articles" >
                    <h2 className="text-xl font-bold mb-5">
                      {type}, 
                      <span className="text-base opacity-75 font-light">
                        {serial}
                      </span>
                    </h2>
                    <ul>
                      <li className="mb-1">{launches.length} launches</li>
                      <li className="mb-1">
                        {original_launch} original launch
                      </li>
                      <li className="mb-1">Reused {reuse_count} times</li>
                      {status === "active" ? (
                        <li className="text-emerald-500">Status: Active</li>
                      ) : (
                        <li className="text-rose-500">Status: Retired</li>
                      )}
                    </ul>
                    <p className="mt-5 opacity-75">{last_update}</p>
                      <Link to={`/capsules/${id}`} >
                      {/* Read More &rarr; */}
                    </Link>
                  </article>
                  </Link>
                  </div>
                )
              )}
          </div>
                    {/* <div className="text-center mt-5">
            {endIndex < capsules.length && (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={loadMore}
              >
                Load More
              </button>
            )}
          </div> */}
                   <div className="text-center mt-20">
            {totalPages > 1 &&
              Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`${
                    index + 1 === currentPage
                      ? "bg-gray-400 text-black mr-5"
                      : "bg-gray-200 text-black-700 mr-5"
                  } py-2 px-4 rounded-md mx-2 bg-gray-400 `}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        </section>
      )}
    </>
  );
}



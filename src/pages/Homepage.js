import { useState, useEffect } from "react"
import { Loading } from "../components"

export default function Homepage() {
  const [company, setCompany] = useState(null)

  useEffect(() => {
    const fetchCompany = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/company")
      const data = await res.json()
      setCompany(data)
    }

    fetchCompany()
  }, [])

  return (
    <>
      {!company ? (
        <Loading />
      ) : (
        <section className="showcase">
          <div className="overlay">
            <article className="text-white">
              <h1 className="heading text-center capitalize">
                All The SpaceX Data in one place 🚀
              </h1>
              <p className="max-w-3xl mx-auto text-center mt-10">
                {company.summary} <br></br><br></br><br></br><br></br>
                By <span className="text-lg">Olamide</span> with ❤️
              </p>
            </article>
            <div>
              <p>By <span>Olamide</span></p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

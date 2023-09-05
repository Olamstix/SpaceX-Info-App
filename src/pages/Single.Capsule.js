import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Loading } from "../components"

export default function SingleCapsule() {
  const [singleCapsule, setSingleCapsule] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchSingleCapsule = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
      const data = await res.json()
      setSingleCapsule(data)
    }

    fetchSingleCapsule()
  }, [id])
  console.log(singleCapsule)
  return (
    <>
      {!singleCapsule ? (
        <Loading />
      ) : (
        <section className="py-32 max-width grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* {singleCapsule.map(({status}) => ( */}
          <article>
            <h1 className="heading mt-50">{singleCapsule.type}</h1>
            <h2 className="capitalize text-3xl opacity-75 mt-2 text-white font-bold">
              Serial: {singleCapsule.serial}
            </h2>
            <h2 className="text-3xl opacity-75 mt-2 text-white font-bold mb-8">
              Last Update: {singleCapsule.last_update}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 text-white opacity-75">
              <ul>
                <li>Land Landings: {singleCapsule.land_landings}</li>
                <li>
                  Launches: {singleCapsule.launches}
                </li>
                {singleCapsule.status === "active" ? (
                  <li className="text-emerald-500">Active</li>
                ) : (
                  <li className="text-rose-500">Retired</li>
                )}
              </ul>
              <ul>
                <li>Reuse Count: {singleCapsule.reuse_count}%</li>
              </ul>
            </div>
            <ul className="flex items-center justify-start gap-3 mt-5">
              <li>
                <Link
                  to="/capsules"
                  className="text-white opacity-75 text-sm hover:opacity-100"
                >
                  &larr; Back
                </Link>
              </li>
            </ul>
          </article>
          {/* ))} */}
        </section>
      )}
    </>
  )
}


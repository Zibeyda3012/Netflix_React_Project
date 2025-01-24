import { useState, useEffect } from "react"
import { useStore } from "zustand"
import { themeStore } from "common/Store.js"
import Card from "common/Card"
import ScrollBtn from 'common/ScrollBtn'

const Similar = ({ id, type }) => {
    const [data, setData] = useState([])
    const { token } = useStore(themeStore)

    const getSimilar = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/similar`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await response.json()

            console.log(data)

            if (response.ok) {
                setData(data.similar)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getSimilar()
    }, [type, id])


    return (
        <div className="mt-10">
            <h2 className="text-white text-2xl mb-3">Similar {type === "tv" ? "TV Shows" : "Movies"}</h2>


            <div className="relative">
                <ScrollBtn direction="left" />

                <div id="movie-card-container" className="flex items-center gap-4 overflow-x-scroll">
                    {data.map(item => <Card item={item} type={type} />)}
                </div>

                <ScrollBtn direction="right" />
            </div>
        </div>
    )
}

export default Similar
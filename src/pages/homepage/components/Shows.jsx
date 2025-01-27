import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Card from "common/Card"

const Shows = () => {
    const [trendingShows, setTrendingShows] = useState([])

    const getShows = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/tv/trending`)
            const data = await response.json()

            if (response.ok) {
                setTrendingShows(data.content)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getShows()
    }, [])


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
            <div className='grid grid-cols-5 px-[90px] pt-[120px] gap-10'>
                {trendingShows.map(item => <Card item={item} />)}
            </div>
        </motion.div>
    )
}

export default Shows
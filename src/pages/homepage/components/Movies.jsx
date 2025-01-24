import { motion } from "framer-motion";
import Card from "common/Card";

const Movies = ({ trendingMovies }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <div className="grid grid-cols-5 px-[90px] pt-[120px] gap-10">
        {trendingMovies.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Movies;

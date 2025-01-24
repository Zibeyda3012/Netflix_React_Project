import React from 'react'

const FilmCard = ({item ,index, setSelectedItem}) => {
  return (
    <div onClick={() => {
        setSelectedItem(item);
    }} className='min-w-[150px] h-[200px] relative hover:scale-[1.1] transition duration-150 ease-in'>
      
      <p className='absolute -left-7 bottom-4 text-[100px] drop-shadow-[0_0_4px_#fff] font-bold'>{index + 1}</p>
      <img className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
    </div>
  )
}

export default FilmCard
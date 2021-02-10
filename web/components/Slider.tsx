import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import useWindowSize from '../hooks/useWindowSize';

interface SliderProps<T> {
  title: string
  data: T[]
  itemComponent: React.ElementType
  itemsPerPage?: number
  cols?: number
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      display: 'none',
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Slider = <T extends object>({ title, data, itemComponent, itemsPerPage = 4, cols = 2 }: SliderProps<T>) => {
  const [[page, direction], setPage] = useState([0, 0])
  const { width } = useWindowSize()
  
  const pagesNumber = Math.ceil(data.length / 4)
  const currentDataToShow = data.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
  const Item = itemComponent
  const isFirstPage = page === 0
  const isLastPage = page === pagesNumber - 1

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <header className="flex items-center justify-between space-x-4 mb-10 md:mb-14">
        <h2 className="font-bold text-2xl md:text-3xl text-dark">{ title }</h2>

        { width >= 768 &&
          <nav className="flex items-center space-x-5">
            <button
              onClick={() => paginate(-1)}
              className="bg-primary p-2 rounded-xl hover:bg-opacity-80 disabled:opacity-50 transition"
              disabled={isFirstPage}>
              <FiChevronLeft size={26} color="#FFF"/>
            </button>

            <button 
              onClick={() => paginate(1)}
              className="bg-primary p-2 rounded-xl hover:bg-opacity-80 disabled:opacity-50 transition"
              disabled={isLastPage}>
              <FiChevronRight size={26} color="#FFF"/>
            </button>
          </nav>
        }
      </header>

      <AnimatePresence initial={false} custom={direction}>
        <motion.ul
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 25 },
            opacity: { duration: 0.2 }
          }}
          drag={width >= 768 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold && !isLastPage) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold && !isFirstPage) {
              paginate(-1)
            }
          }}
          className={`list-none grid grid-cols-${cols} gap-y-8 md:gap-x-16 md:gap-y-12`}>
          { currentDataToShow.map((itemData: T, index: number) => <Item {...itemData} key={index}/>) }
        </motion.ul>
      </AnimatePresence>
    </>
  )
}

export default Slider
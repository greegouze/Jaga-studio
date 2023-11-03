import homeImageLeft from '../assets/images/image-home-l.png';
import homeImageRight from '../assets/images/image-home-r.png';
import { motion, useTransform } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

const HomeContent1 = () => {
  const { scrollYProgress } = useOutletContext();

  const scale = useTransform(scrollYProgress, [0, 0.13], [0.2, 1]);

  const translateX1 = useTransform(scrollYProgress, [0.08, 0.15], [-400, 0]);
  const translateX2 = useTransform(scrollYProgress, [0.08, 0.15], [400, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.13], [400, 0]);

  return (
    <>
      <motion.div
        style={{
          translateY,
          scale,
        }}
        className="my-20 flex flex-col items-center justify-center gap-4"
      >
        <h2 className="text-3xl drop-shadow-xl duration-700 sm:text-4xl md:text-5xl lg:text-6xl">
          Welcome to Jaga{' '}
        </h2>
        <h2 className="text-3xl drop-shadow-xl duration-700 sm:text-4xl md:text-5xl lg:text-6xl">
          Redefining Chicago Art
        </h2>
      </motion.div>

      <div className="lg-justify-center flex flex-col items-center gap-11 md:flex-row md:justify-center lg:flex-row">
        <motion.img
          style={{
            translateX: translateX1,
          }}
          className="w-[50vw] object-cover duration-700 md:h-[40.5vw] md:w-[30vw]"
          src={homeImageLeft}
          alt="a painting"
        />
        <motion.img
          style={{
            translateX: translateX2,
          }}
          className="w-[50vw] object-cover duration-700 md:h-[40.5vw] md:w-[30vw]"
          src={homeImageRight}
          alt="a painting"
        />
      </div>
    </>
  );
};

export default HomeContent1;
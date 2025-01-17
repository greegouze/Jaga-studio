import { useOutletContext } from 'react-router-dom';
import home6 from '../assets/images/home-6.jpg';
import home3 from '../assets/images/home-3.jpg';
import home4 from '../assets/images/home-4.png';
import home5 from '../assets/images/home-5.jpg';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home-5.png';
import { motion, useTransform } from 'framer-motion';

const HomeContent2 = () => {
  const { scrollYProgress } = useOutletContext();

  const scale = useTransform(scrollYProgress, [0.2, 0.65], [0.65, 1.15]);

  const translateY1 = useTransform(scrollYProgress, [0.2, 0.6], [0, 2000]);
  const translateY2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1970]);
  const translateY3 = useTransform(scrollYProgress, [0.2, 0.6], [0, 2280]);
  const translateY5 = useTransform(scrollYProgress, [0.2, 0.6], [0, 2250]);

  const translateX1 = useTransform(scrollYProgress, [0.2, 0.6], [0, -235]);
  const translateX2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 220]);
  const translateX3 = useTransform(scrollYProgress, [0.2, 0.6], [0, -220]);

  return (
    <>
      <div className="relative m-0 h-[390vh] bg-[#f4f4f0] p-0 md:h-[350vh] 2xl:h-[290vh]">
        <div className="absolute left-1/2 top-56 z-10 h-[25vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:h-[30vh] lg:w-[23vh] 2xl:h-[28vh] 2xl:w-[22vh]">
          <motion.img
            src={home3}
            className="h-full w-full object-cover shadow-md"
            style={{
              translateY: translateY1,
              scale,
            }}
          />
        </div>
        <div className="absolute left-[47%] top-64 z-30  h-[25vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:h-[30vh] lg:w-[23vh] 2xl:h-[28vh] 2xl:w-[22vh]">
          <motion.img
            src={home2}
            className="h-full w-full object-cover shadow-md"
            style={{
              translateX: translateX1,
              scale,
              translateY: translateY2,
            }}
          />
        </div>
        <div className="absolute left-[54%] top-64 z-20  h-[25vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:h-[30vh] lg:w-[23vh] 2xl:h-[28vh] 2xl:w-[22vh]">
          <motion.img
            src={home4}
            className="h-full w-full object-cover shadow-md"
            style={{
              translateX: translateX2,
              scale,
              translateY: translateY2,
            }}
          />
        </div>
        <div className="absolute left-[46%] top-72 z-30  h-[25vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:h-[30vh] lg:w-[23vh] 2xl:h-[28vh] 2xl:w-[22vh]">
          <motion.img
            className="h-full w-full object-cover shadow-md"
            src={home1}
            style={{
              translateX: translateX3,
              scale,
              translateY: translateY3,
            }}
          />
        </div>
        <div className="absolute left-[54%] top-72 z-30  h-[25vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:h-[30vh] lg:w-[23vh] 2xl:h-[28vh] 2xl:w-[22vh]">
          <motion.img
            className="h-full w-full object-cover shadow-md"
            src={home5}
            style={{
              translateX: translateX2,
              scale,
              translateY: translateY3,
            }}
          />
        </div>
        <div className="absolute left-[50%] top-80 z-30  h-[25vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:h-[30vh] lg:w-[23vh] 2xl:h-[28vh] 2xl:w-[22vh]">
          <motion.img
            className="h-full w-full object-cover shadow-md"
            src={home6}
            style={{
              translateY: translateY5,
              scale,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent2;

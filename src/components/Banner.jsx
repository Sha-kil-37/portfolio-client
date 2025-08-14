import AnimatedGradientText from "./AnimatedGradientText";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fetchAdminData } from "../redux/api/visitor/fetchAdminData.js";
import { useDispatch, useSelector } from "react-redux";
import GetMomentMsg from "./GetMomentMsg.jsx";
import Loader from "./Loader.jsx";
import CardsStack from "./CardsStack.jsx";
import Button from "./Button.jsx";
import BannerCenterAnimation from "./BannerCenterAnimation.jsx";
//
//
const Banner = () => {
  const dispatch = useDispatch();
  const [adminImages, setAdminImages] = useState([]);
  const { admin, loading, error } = useSelector(
    (state) => state.adminDataReducer
  );

  // set admin images to state
  useEffect(() => {
    setAdminImages((prev) => {
      if (!admin?.images) return [];
      // console.log(admin?.images);
      return admin.images.map((image) => image.url);
    });
  }, [admin?.images]);

  // handle re data fetching
  function handleReFetch() {
    return dispatch(fetchAdminData());
  }
  // call admin API to get the banner data
  useEffect(() => {
    dispatch(fetchAdminData());
  }, [dispatch]);
  //
  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-2xl font-primary text-primary">Oh Uh</h1>
        <p>{error}</p>
        <button
          className="px-2 py-1 bg-secondary rounded-md text-white font-primary cursor-pointer mt-2"
          onClick={handleReFetch}
        >
          retry
        </button>
      </div>
    );
  }
  //
  const SECTION_HEIGHT = "auto";

  //   return (
  //     <motion.div
  //       initial={{ y: 48, opacity: 0 }}
  //       whileInView={{ y: 0, opacity: 1 }}
  //       transition={{ ease: "easeInOut", duration: 0.75 }}
  //       className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
  //     >
  //       <div>
  //         <p className="mb-1.5 text-xl text-zinc-50">fdghfh</p>
  //         <p className="text-sm uppercase text-zinc-500">kujdfgh</p>
  //       </div>
  //       <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
  //         <p>dfghgdfg</p>
  //         <Activity />
  //       </div>
  //     </motion.div>
  //   );
  // };

  // const Schedule = () => {
  //   return (
  //     <section
  //       id="launch-schedule"
  //       className="mx-auto max-w-5xl px-4 py-48 text-white"
  //     >
  //       <motion.h1
  //         initial={{ y: 48, opacity: 0 }}
  //         whileInView={{ y: 0, opacity: 1 }}
  //         transition={{ ease: "easeInOut", duration: 0.75 }}
  //         className="mb-20 text-4xl font-black uppercase text-zinc-50"
  //       >
  //         Launch Schedule
  //       </motion.h1>
  //       <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
  //       <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
  //       <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
  //       <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
  //       <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
  //       <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
  //       <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
  //     </section>
  //   );
  // };

  //
  return (
    <section
      style={{ height: `calc(${SECTION_HEIGHT} + 100vh)` }}
      className="block relative w-full"
    >
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <GetMomentMsg />
          <span className="font-primary font-semibold text-8xl dark:text-white transition-colors duration-700 ease-in-out">
            i am
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <AnimatedGradientText
            text={admin?.name}
            className="inline-block font-bold text-7xl font-primary py-3 w-full text-right mt-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <p className="font-bold font-primary text-2xl max-w-[500px]">
            {admin?.subTitle}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <Button>Download Cv</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <CardsStack cards={adminImages} />
        </motion.div>
        <BannerCenterAnimation image="https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
{/* 
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-20 text-4xl font-black uppercase text-zinc-50"
        >
          Launch Schedule
        </motion.h1>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
          <h2 className="font-bold text-red-500 text-2xl font-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            quaerat debitis earum unde praesentium perspiciatis at dolor ut
            velit cum?
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
          <h2 className="font-bold text-red-500 text-2xl font-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            quaerat debitis earum unde praesentium perspiciatis at dolor ut
            velit cum?
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
          <h2 className="font-bold text-red-500 text-2xl font-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            quaerat debitis earum unde praesentium perspiciatis at dolor ut
            velit cum?
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
          <h2 className="font-bold text-red-500 text-2xl font-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            quaerat debitis earum unde praesentium perspiciatis at dolor ut
            velit cum?
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
          <h2 className="font-bold text-red-500 text-2xl font-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            quaerat debitis earum unde praesentium perspiciatis at dolor ut
            velit cum?
          </h2>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Banner;

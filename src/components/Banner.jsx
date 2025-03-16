import CardStacks from "./CardStacks";
import AnimatedGradientText from "./AnimatedGradientText";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchAdminData } from "../redux/api/visitor/fetchAdminData.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader.jsx";
import GetMomentMsg from "./GetMomentMsg.jsx";
//
const Banner = () => {
  const dispatch = useDispatch();
  const { admin, loading, error } = useSelector(
    (state) => state.adminDataReducer
  );
  // handle re data fetching
  function handleReFetch() {
    return dispatch(fetchAdminData());
  }
  // call admin API to get the banner data
  useEffect(() => {
    dispatch(fetchAdminData());
  }, [dispatch]);
  //
  // if (loading) {
  //   return <Loader></Loader>;
  // }
  if (error) {
    return (
      <div className="text-center">
        <h1>Oh Uh</h1>
        <p>{error}</p>
        <button
          className="px-2 py-1 bg-blue-400 rounded-md text-white font-primary cursor-pointer mt-2"
          onClick={handleReFetch}
        >
          retry
        </button>
      </div>
    );
  }
  //
  return (
    <section className="dark:bg-dark bg-primary py-20 block relative">
      <div className="w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
        >
          <GetMomentMsg />
          <span className="font-bold font-primary text-7xl">i am</span>
          <AnimatedGradientText
            text={admin?.name}
            className="inline-block font-bold text-7xl font-primary py-3 w-full text-right"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }} // Start hidden, move from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
          className="flex justify-between mt-20"
        >
          <div>
            <h3 className="mt-10 text-2xl font-medium font-primary max-w-180">
              {admin?.subTitle}
            </h3>
          </div>
          <CardStacks images={admin?.images} />
        </motion.div>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          sequi nisi? Sed nesciunt facere animi non atque sapiente nemo ratione
          enim et sunt alias, adipisci delectus consectetur explicabo voluptas
          provident labore laboriosam cupiditate odio numquam! Amet, delectus
          numquam? Voluptates modi illo inventore, veritatis veniam aperiam.
          Doloremque repellendus exercitationem soluta pariatur suscipit ut
          culpa incidunt excepturi quaerat doloribus odit est tempora eius
          reprehenderit, facere reiciendis expedita ratione repudiandae? Debitis
          quos ipsa placeat dolores soluta sed, minus amet dolore! Corporis
          adipisci odio odit veniam dicta. Impedit delectus doloribus voluptate
          ducimus. Voluptatem ipsa nam quidem molestias natus, autem harum fuga
          aperiam eos veritatis corrupti adipisci ratione aliquid itaque porro
          recusandae debitis cum veniam a neque, quod cupiditate vel? Dolor
          reprehenderit deleniti debitis at facilis culpa incidunt cupiditate
          rerum. Ea vitae natus autem reprehenderit maiores repellendus id,
          aperiam accusantium itaque assumenda, ad ipsum enim debitis molestiae
          asperiores ipsa inventore eveniet vero quibusdam incidunt ratione?
          Adipisci cum vel nostrum praesentium, maxime nulla velit dolor ratione
          quam quis ducimus itaque doloremque et fuga natus. Aperiam quam ea
          nulla, placeat cum voluptas ab consectetur natus, aliquid ullam
          repellat dolorum eveniet autem porro illum quas odit fugit illo nobis
          architecto, dicta mollitia sed? Rerum modi culpa consectetur totam!
        </h2>
        <input onChange={e=>console.log(e)} className="border-2 border-dark" type="file" />
        {/* <svg></svg> */}
      </div>
    </section>
  );
};

export default Banner;

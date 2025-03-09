import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../redux/api/visitor/fetchFooterData.js";
export default function Footer() {
  //
  const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.footerReducer.data);
  // console.log(data);

  // call footer API to get the banner data
  useEffect(() => {
    dispatch(fetchFooterData());
  }, [dispatch]);

  // handle re data fetching
  // function handleReFetch() {
  //   return dispatch(fetchFooterData());
  // }
  //
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, x: -10 }} // Start hidden, move from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible
        transition={{ duration: 1, delay: 0.2 }} // Delay for smooth effect
      >
        <p>footer</p>
      </motion.div>
    </footer>
  );
}

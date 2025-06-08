import { useSelector } from "react-redux";

//
export default function Header() {
  //
  const { footer, error, loading } = useSelector(
    (state) => state.footerReducer
  );
  // console.log(footer);
  // 
  return (
    <header className="relative py-5">
      <h1 className="text-center block font-primary text-xl dark:text-primary font-bold text-black transition duration-200">PORTFOLIO <span className="text-red">{footer?.version}</span></h1>
    </header>
  );
} // End of Header component

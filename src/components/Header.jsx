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
      <h1 className="text-center block font-primary text-xl text-primary">PORTFOLIO {footer?.version}</h1>
    </header>
  );
} // End of Header component

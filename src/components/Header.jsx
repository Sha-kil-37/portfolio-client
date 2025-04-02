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
    <header className="py-5 relative">
      <h1 className="text-center block font-primary text-xl text-primary">PORTFOLIO {footer?.version}</h1>
    </header>
  );
} // End of Header component

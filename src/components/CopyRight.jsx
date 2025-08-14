import { useSelector } from "react-redux";

export default function CopyRight() {
  //

  const { footer, error, loading } = useSelector(
    (state) => state.footerReducer
  );

  //
  return (
    <div className="py-3 relative z-20">
      <div className="mx-auto flex justify-between border-t-[1px] border-test">
        <span className="mr-3 font-primary">ReleaseDate</span>
        <strong className="font-primary">{footer?.releaseDate}</strong>
        <p className="font-primary">&copy;{footer?.copyrightText}</p>
      </div>
    </div>
  );
}

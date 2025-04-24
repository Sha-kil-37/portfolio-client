import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { useSelector } from "react-redux";
//
export default function Socials() {
  // early return korte hobe
  const [socials, setSocials] = useState([]);
  const { footer, error, loading } = useSelector(
    (state) => state.footerReducer
  );

  // set socials into state variable
  useEffect(() => {
    if (footer?.socialLinks) {
      setSocials(footer?.socialLinks);
    }
  }, [footer?.socialLinks]);

  //
  return (
    <ul className="flex gap-3">
      {socials.map((social) => {
        const IconComponent = Icons[social.icon];
        return (
          <li key={social.platform}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl dark:text-test hover:text-blue-400 transition-all"
            >
              {IconComponent && <IconComponent />}
            </a>
            <i className="font-primary dark:text-test">{social.platform}</i>
          </li>
        );
      })}
    </ul>
  );
}

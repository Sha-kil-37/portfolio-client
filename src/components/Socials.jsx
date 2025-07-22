import * as Icon from "lucide-react";
// 
function Socials({ socialLinks }) {
  // This component renders a list of social media icons based on the provided socialLinks prop.
  // Each icon is rendered using the Lucide icon library, and the size of each icon
// console.log(socialLinks);
  return (
    <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}>
      {socialLinks &&
        socialLinks.map((socialLink, index) => {
          console.log(socialLink?.icon);
          const SocialIcon = Icon[socialLink?.icon];
         
          return (
            <li key={index} title={socialLink?.platform} className="cursor-pointer">
              <a
                href={socialLink?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SocialIcon && (
                  <SocialIcon title={socialLink?.platform} color={socialLink.color} size={30} />
                )}
                <span>{socialLink?.platform}</span>
              </a>
            </li>
          );
        })}
    </ul>
  );
}
export default Socials;

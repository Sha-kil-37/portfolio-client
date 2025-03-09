import { useEffect, useState } from "react";
// 
export default function GetMomentMsg() {
  //
  const [greeting, setGreeting] = useState("");

  // Function to determine the greeting based on the current time
  const getGreeting = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning ☀️";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon 🌤️";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good Evening 🌆";
    } else {
      return "Good Night 🌙";
    }
  };
  //
  // Update the greeting when the component mounts or the time changes
  // Update the greeting when the component mounts or the time changes
  useEffect(() => {
    setGreeting(getGreeting());

    // Optional: Update the greeting every minute
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // 60000ms = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  //

  return <span className="font-primary font-bold text-7xl">{greeting}</span>;
}

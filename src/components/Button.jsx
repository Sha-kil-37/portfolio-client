// import "./Button.css"; // Ensure to create and import the CSS file

const Button = (props) => {
  return (
   <button className="py-2 px-2 bg-primary font-bold font-primary text-xl mt-10">{props.children}</button>
  );
};

export default Button;


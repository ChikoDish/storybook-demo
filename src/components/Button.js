export const Button = ({
  bgColor = "lightblue",
  children = "Button",
  ...props
}) => {
  console.log(props);
  return (
    <button style={{ backgroundColor: bgColor }} {...props}>
      {children}
    </button>
  );
};

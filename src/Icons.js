import { Circle, Cross, Pen } from "./icons/icons";

const Icons = ({ size, name, className }) => {
  switch (name) {
    case "circle":
      return <Circle size={size} className={className} />;

    case "cross":
      return <Cross size={size} className={className} />;

    default:
      return <Pen size={size} className={className} />;
  }
};

export default Icons;

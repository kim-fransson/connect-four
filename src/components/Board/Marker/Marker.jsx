import clsx from "clsx";
import "./Marker.css";

export const Marker = ({ color, className }) => {
  return <div className={clsx(className, `marker ${color}`)}></div>;
};

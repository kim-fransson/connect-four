import clsx from "clsx";
import { Button } from "react-aria-components";

import "./BaseButton.css";

export const BaseButton = ({ className, children, ...props }) => {
  return (
    <Button className={clsx(className, "base-button")} {...props}>
      {children}
    </Button>
  );
};

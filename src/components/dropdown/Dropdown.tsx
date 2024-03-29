import { cloneElement, useEffect, useState } from "react";
import "./dropdown.scss";
import DropdownToggleDown from "./dropdown-toggle-down.svg";
import DropdownToggleUp from "./dropdown-toggle-up.svg";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";

interface DropdownProps {
  className?: string;
  children: JSX.Element[];
  childrenClass?: string;
  style: React.CSSProperties;
  defaultIndex: number;
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const [isActive, setActive] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(
    props.defaultIndex
  );
  const toggleActive = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    setSelectedIndex(props.defaultIndex);
  }, [props.defaultIndex]);

  const addCustomChildClasses = (
    child: JSX.Element,
    extraClasses?: string
  ): JSX.Element => {
    return cloneElement(child, {
      className:
        child.props.className + " " + props.childrenClass + " " + extraClasses,
      onClick: () => {
        child.props.onClick();
        setSelectedIndex(props.children.indexOf(child));
      },
    });
  };

  return (
    <div
      className={"b-dropdown " + props.className + (isActive ? " active" : "")}
      style={props.style}
      onClick={toggleActive}
    >
      {isActive ? (
        <IconChevronUp
          // viewBox=""
          // height={20}
          className="b-dropdown-toggle"
        />
      ) : (
        <IconChevronDown
          // viewBox=""
          // height={20}
          className="b-dropdown-toggle"
        />
      )}
      <div className="b-dropdown-items-container">
        {isActive
          ? props.children.map((c, index) => {
              if (index === selectedIndex) {
                return addCustomChildClasses(c, "selected");
              } else {
                return addCustomChildClasses(c);
              }
            })
          : addCustomChildClasses(props.children[selectedIndex], "selected")}
      </div>
    </div>
  );
};

export default Dropdown;

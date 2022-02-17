import React, {FC} from 'react';
import {NavLink, To} from "react-router-dom";

interface Props {
  className?: string
  to: To;
}

const NavigationItem: FC<Props> = (props) => {
  return (
    <li>
      <NavLink className={`relative block cursor-pointer overflow-hidden before:transition-all before:rounded before:absolute before:bottom-0 before:-left-full before:bg-primary before:w-full before:h-[2px] hover:before:left-0`} to={props.to}>{props.children}</NavLink>
    </li>
  )
};

export default NavigationItem;
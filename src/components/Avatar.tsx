import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: (assignee: string)=> void;
    isSelected?: boolean;
}

export const Avatar = ({children, onClick, isSelected = false}: Props) => {
     const border = isSelected ? '3px solid orange' : '1px solid gray';
     
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        border,
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "30px",
        userSelect: "none",
      }}
     onClick={()=>onClick(`${children}`)}>
      {children}
    </div>
  );
};

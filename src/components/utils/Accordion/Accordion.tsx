import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
// import "./Accordion.css";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <div>
    <div className="accordion-text">
      <ChevronDown onClick={(e) => {
        // e.stopPropagation()
        setIsOpen(e => !e)
      }}/>
      {title}
    </div>
    <div className={`${isOpen ? "accordion-conainer-open" : "accordion-conainer-close"}`}>
      {children}
    </div>
   </div>
  );
}

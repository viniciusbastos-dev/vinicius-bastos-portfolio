import { cn } from "@/lib/utils";
import React, { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionContainer: React.FC<Props> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <section {...rest} className={cn("min-h-screen", className)}>
      {children}
    </section>
  );
};

export default SectionContainer;

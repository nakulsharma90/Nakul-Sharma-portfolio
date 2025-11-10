import { ReactNode } from "react";

interface StaggeredChildrenProps {
  children: ReactNode[];
  delay?: number;
  className?: string;
}

export const StaggeredChildren = ({ children, delay = 100, className = "" }: StaggeredChildrenProps) => {
  return (
    <>
      {children.map((child, index) => (
        <div
          key={index}
          className={`opacity-0 translate-y-4 ${className}`}
          style={{
            animation: `fadeInUp 0.6s ease-out forwards`,
            animationDelay: `${index * delay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </>
  );
};

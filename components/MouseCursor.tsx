"use client";

import React, { useState, useEffect } from "react";

export const MouseCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [cursorRef, setCursorRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out';
    document.body.appendChild(cursor);
    setCursorRef(cursor);

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef) {
        const x = e.clientX;
        const y = e.clientY;
        
        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(() => {
          cursorRef.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`;
        });
      }
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverIn = () => setLinkHovered(true);
    const handleLinkHoverOut = () => setLinkHovered(false);

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", () => setHidden(true));
    window.addEventListener("mouseenter", () => setHidden(false));

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverIn);
      link.addEventListener("mouseleave", handleLinkHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", () => setHidden(true));
      window.removeEventListener("mouseenter", () => setHidden(false));

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverIn);
        link.removeEventListener("mouseleave", handleLinkHoverOut);
      });
      
      if (cursorRef) {
        document.body.removeChild(cursorRef);
      }
    };
  }, [cursorRef]);

  if (typeof window === "undefined") return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-all duration-300 ease-out will-change-transform ${
        hidden ? "opacity-0" : "opacity-100"
      } ${clicked ? "bg-white scale-75" : "bg-white/80"} ${
        linkHovered ? "w-12 h-12 scale-150" : "w-5 h-5"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};
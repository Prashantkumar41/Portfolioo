// import React from 'react'

// const ShinyEffect = ({left, right, top, size = 500}) => {

//     const positionStyles = {
//         top:`${top}px`,
//         width:`${size}px`,
//         height:`${size}px`,
//         zIndex: -1
//     }

//     if (left !== undefined) {
//         positionStyles.left = `${left}px`
//     }

//     if (right !== undefined) {
//         positionStyles.right = `${right}px`
//     }


//   return (
//     <div className='shiny-effect' style={positionStyles}></div>
//   )
// }

// export default ShinyEffect



// import React, { useState, useEffect } from "react";
// const ShinyEffect = ({ left, right, top, size = 500, color = "rgba(255, 0, 150, 0.5)" }) => {
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouseX(e.clientX);
//       setMouseY(e.clientY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const positionStyles = {
//     position: "absolute",
//     top: `${top}px`,
//     width: `${size}px`,
//     height: `${size}px`,
//     zIndex: -1,
//     left: left !== undefined ? `${left}px` : "unset",
//     right: right !== undefined ? `${right}px` : "unset",
//     background: `radial-gradient(circle, ${color} 20%, transparent 70%)`,
//     filter: "blur(80px)",
//     opacity: 0.6,
//     transition: "transform 0.2s ease-out",
//     transform: `translate(${(mouseX - size / 2) / 10}px, ${(mouseY - size / 2) / 10}px)`,
//     pointerEvents: "none",
//   };

//   return <div className="shiny-effect" style={positionStyles}></div>;
// };

// export default ShinyEffect;


// ***************3rd  one *********************************************

// import React, { useState, useEffect } from "react";

// const ShinyEffect = ({ left, right, top, size = 500, color = "rgba(0, 150, 255, 0.5)" }) => {
//   // Track mouse position for a subtle interactive parallax effect
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouseX(e.clientX);
//       setMouseY(e.clientY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Container for the effect with absolute positioning
//   const containerStyles = {
//     position: "absolute",
//     top: `${top}px`,
//     width: `${size}px`,
//     height: `${size}px`,
//     zIndex: -1,
//     left: left !== undefined ? `${left}px` : "unset",
//     right: right !== undefined ? `${right}px` : "unset",
//     pointerEvents: "none",
//     overflow: "hidden",
//   };

//   // Calculate a slight offset based on mouse movement
//   const dynamicTranslateX = (mouseX - size / 2) / 20;
//   const dynamicTranslateY = (mouseY - size / 2) / 20;

//   // First layer: a pulsating radial gradient that creates a glowing aura
//   const pulsatingStyles = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
//     filter: "blur(60px)",
//     opacity: 0.7,
//     animation: "pulse 3s infinite ease-in-out",
//   };

//   // Second layer: a shimmering overlay that sweeps across the container
//   const shimmeringStyles = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "200%", // Extended width for smooth horizontal movement
//     height: "100%",
//     background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
//     transform: `translateX(-100%) translate(${dynamicTranslateX}px, ${dynamicTranslateY}px)`,
//     animation: "shimmer 2s infinite",
//   };

//   return (
//     <div className="shiny-effect-container" style={containerStyles}>
//       <div style={pulsatingStyles}></div>
//       <div style={shimmeringStyles}></div>
//       <style jsx>{`
//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//             opacity: 0.7;
//           }
//           50% {
//             transform: scale(1.1);
//             opacity: 0.9;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 0.7;
//           }
//         }
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           50% {
//             transform: translateX(100%);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ShinyEffect;


// ********************** remove anitmatino ********************

// import React, { useState, useEffect } from "react";

// const ShinyEffect = ({
//   left,
//   right,
//   top,
//   size = 500,
//   color = "rgba(0, 150, 255, 0.5)"
// }) => {
//   // Track mouse position for a subtle interactive parallax effect
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouseX(e.clientX);
//       setMouseY(e.clientY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Container with absolute positioning
//   const containerStyles = {
//     position: "absolute",
//     top: `${top}px`,
//     width: `${size}px`,
//     height: `${size}px`,
//     zIndex: -1,
//     left: left !== undefined ? `${left}px` : "unset",
//     right: right !== undefined ? `${right}px` : "unset",
//     pointerEvents: "none",
//     overflow: "hidden"
//   };

//   // Calculate a slight offset based on mouse movement
//   const dynamicTranslateX = (mouseX - size / 2) / 20;
//   const dynamicTranslateY = (mouseY - size / 2) / 20;

//   // Layer 1: Pulsating radial gradient for the glowing aura
//   const pulsatingStyles = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
//     filter: "blur(60px)",
//     opacity: 0.7,
//     animation: "pulse 3s infinite ease-in-out"
//   };

//   // Layer 2: A static shimmering overlay (white highlight) without continuous movement
//   const shimmeringStyles = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background:
//       "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
//     transform: `translate(${dynamicTranslateX}px, ${dynamicTranslateY}px)`,
//     opacity: 0.5,
//     transition: "transform 0.2s ease-out"
//   };

//   return (
//     <div className="shiny-effect-container" style={containerStyles}>
//       <div style={pulsatingStyles}></div>
//       <div style={shimmeringStyles}></div>
//       <style jsx>{`
//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//             opacity: 0.7;
//           }
//           50% {
//             transform: scale(1.1);
//             opacity: 0.9;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 0.7;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ShinyEffect;


// ******************************************* 5th one : new  ***************************

import React, { useState, useEffect } from "react";

const ShinyEffect = ({
  left,
  right,
  top,
  size = 500,
  color = "rgba(0, 150, 255, 0.5)"
}) => {
  // Track mouse position for a subtle parallax effect
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Container styles with absolute positioning
  const containerStyles = {
    position: "absolute",
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
    left: left !== undefined ? `${left}px` : "unset",
    right: right !== undefined ? `${right}px` : "unset",
    pointerEvents: "none",
    overflow: "hidden"
  };

  // Calculate subtle translation from mouse position
  const dynamicTranslateX = (mouseX - window.innerWidth / 2) / 50;
  const dynamicTranslateY = (mouseY - window.innerHeight / 2) / 50;

  // Layer 1: Pulsating radial gradient for the glowing aura
  const pulsatingStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    filter: "blur(60px)",
    opacity: 0.7,
    animation: "pulse 3s infinite ease-in-out"
  };

  // Layer 2: Container for halo effect (applies mouse-driven translation)
  const haloContainerStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(${dynamicTranslateX}px, ${dynamicTranslateY}px)`,
    pointerEvents: "none"
  };

  // Layer 2: Rotating halo effect (white highlight) that rotates continuously
  const haloRotationStyles = {
    width: "150%",
    height: "150%",
    background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
    transform: "translate(-50%, -50%)",
    animation: "rotateHalo 8s linear infinite"
  };

  return (
    <div className="shiny-effect-container" style={containerStyles}>
      <div style={pulsatingStyles}></div>
      <div style={haloContainerStyles}>
        <div style={haloRotationStyles}></div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
        @keyframes rotateHalo {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ShinyEffect;

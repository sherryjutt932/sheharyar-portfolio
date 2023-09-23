// const sections = gsap.utils.toArray("section");
// const lastIndex = sections.length - 1;

// sections.forEach((section, i) => {
//   section._bg = section.querySelector(".bg");
//   section._h1 = section.querySelector("h1");
  
//   // Give the backgrounds some random images
//   section._bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight*2}?random=${i})`;

//   // Create a standalone ST instance, and use the progress value (0 - 1) to tween the timeline's progress
//   ScrollTrigger.create({ 
//     trigger: section,
//     start: ()=> i==0 ? "top top" : "top bottom", // The FIRST section will use a different start value than the rest
//     end: ()=> i==lastIndex ? "top top" : "bottom top", // The LAST section will use a different start value than the rest    
//     onRefresh: self => { // onRefresh (so it gets reset upon resize), create a timeline that moves the h1 + bg vertically      
//       section._tl = gsap.timeline({paused:true, defaults:{ease:'none', overwrite:'auto'}}) 
//       .fromTo(section._h1, {y:()=> i==0 ? 0 : (innerHeight/2)*1.5}, {y:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
//       .fromTo(section._bg, {y:()=> i==0 ? -innerHeight/2 : 0}, {y:()=> i==lastIndex ? -innerHeight/2 : -innerHeight}, 0)    
//       .progress(self.progress); //use progress to position the timeline correctly      
//     },
//     onUpdate: self => { gsap.to(section._tl, {duration:0.75, progress:self.progress}); }
//   });
  
// });

// // --

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const ParallaxSections = () => {
//   const sectionsRef = useRef([]);
//   const lastIndex = sectionsRef.current.length - 1;

//   useEffect(() => {
//     const sections = sectionsRef.current;

//     sections.forEach((section, i) => {
//       section._bg = section.querySelector(".bg");
//       section._h1 = section.querySelector("h1");

//       // Give the backgrounds some random images
//       section._bg.style.backgroundImage = `url(https://picsum.photos/${window.innerWidth}/${window.innerHeight * 2}?random=${i})`;

//       // Create a standalone ScrollTrigger instance, and use the progress value (0 - 1) to tween the timeline's progress
//       ScrollTrigger.create({
//         trigger: section,
//         start: () => (i === 0 ? "top top" : "top bottom"), // The FIRST section will use a different start value than the rest
//         end: () => (i === lastIndex ? "top top" : "bottom top"), // The LAST section will use a different start value than the rest
//         onRefresh: (self) => {
//           // onRefresh (so it gets reset upon resize), create a timeline that moves the h1 + bg vertically
//           section._tl = gsap.timeline({ paused: true, defaults: { ease: 'none', overwrite: 'auto' } })
//             .fromTo(section._h1, { y: () => (i === 0 ? 0 : window.innerHeight / 2 * 1.5) }, { y: () => (i === lastIndex ? 0 : -window.innerHeight / 2 * 1.5) }, 0)
//             .fromTo(section._bg, { y: () => (i === 0 ? -window.innerHeight / 2 : 0) }, { y: () => (i === lastIndex ? -window.innerHeight / 2 : -window.innerHeight) }, 0)
//             .progress(self.progress); // Use progress to position the timeline correctly
//         },
//         onUpdate: (self) => { gsap.to(section._tl, { duration: 0.75, progress: self.progress }); }
//       });
//     });
//   }, []);

//   return (
//     <div>
//       {[1, 2, 3, 4, 5].map((index) => (
//         <section
//           ref={(el) => (sectionsRef.current[index - 1] = el)}
//           key={index}
//         >
//           <div className="bg"></div>
//           <h1>{`#00${index}`}</h1>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default ParallaxSections;


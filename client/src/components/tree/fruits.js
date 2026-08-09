// console.log("THIS IS THE fruits.js file. ");
const fruits = [
    {
    id: "about",
    model: "models/fruits/plum.glb",
    position: [-9, 16.5, 11],
    rotation: [0, Math.PI / 4, -0.5],
    scale: 0.7,
    hoverOffset: [0, 1.4, 0],
    page: "/about",
  },
  {
    id: "home",
    model: "/models/fruits/apple.glb",
    position: [4, 15, 11.2],
    rotation: [0, Math.PI / 4, 0],
    scale: 0.5,
    hoverOffset: [0, 1.4, 0],
    page: "/",
  },
  {
    id: "contact",
    model: "/models/fruits/pumagranate.glb",
    position: [9, 10, 0],
    rotation: [0, Math.PI / 4, 0],
    scale: 0.9,
    hoverOffset: [0, 1.4, 0],
    page: "/contact",
  },
  {
    id: "techandframeworks",
    model: "/models/fruits/cantaloupe.glb",
    position: [13.4, 16, -8],
    rotation: [0, Math.PI / 4, 0.5],
    scale: 0.9,
    hoverOffset: [0, 1.4, 0],
    // page: "/techandframeworks",
    page: "/projects"
  },

  {
    id: "projects",
    model: "/models/fruits/mango.glb",
    position: [5, 16, -18],
    scale: 1.01,
    hoverOffset: [0, 1.4, 0],
    page: "/projects",
  },

];

export default fruits;
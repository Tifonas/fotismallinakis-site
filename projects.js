// One entry per project. Positions and sizes are in Figma pixels (frame is 5000 x 5000).
// x, y = top-left of the image. w = width. h = width x the photo's own ratio, so nothing is ever cropped.
// Leave h out (delete the h property) to let the image keep its own natural ratio.
// cap = caption under the photo (\n = new line). cats = categories, shown only while the cursor is over the photo.
// image = file inside /images. The same file is used on the homepage and the project page.
window.PROJECTS = [
  { slug: "artlab",         title: "ARTLAB | Interior designer brand identity",    image: "images/artlab.jpg",         bg: "#e6dfd6", x: 2403, y: 729, w: 500, h: 500, cap: "Artlab\ninterior design studio", cats: "brand identity\nbrand voice" },
  { slug: "anima",          title: "anima | Artist’s cryptocurrency brand identity", image: "images/anima.jpg",       bg: "#d9dde6", x: 3029, y: 2682, w: 500, h: 281, cap: "Anima\nartist’s crypto brand", cats: "brand identity\nmotion graphics\nUI/UX" },
  { slug: "beyond-podcast", title: "beyond podcast | Explainer videos showreel",    image: "images/beyond-podcast.jpg", bg: "#e2d6d6", x: 1993, y: 2364, w: 500, h: 391, cap: "Beyond podcast\nexplainer videos", cats: "motion graphics\n2D animation" },
  { slug: "parthenogenesis",title: "parthenogenesis | Packaging concept",           image: "images/parthenogenesis.jpg",bg: "#d6e2db", x: 999, y: 2514, w: 400, h: 400, cap: "Parthenogenesis\nfilm DVD sleeves", cats: "packaging\nillustration" },
  { slug: "trinity",        title: "TRINITY | Emergency infographics",              image: "images/trinity.jpg",        bg: "#e6e2d0", x: 1059, y: 1321, w: 400, h: 400, cap: "Trinity\nemergency infographics", cats: "illustration\ntypography" },
  { slug: "paroles",        title: "PAROLES | French teacher visual identity",      image: "images/paroles.jpg",        bg: "#FDEFE8", x: 2186, y: 1539, w: 500, h: 391, cap: "Paroles\nFrench teacher identity", cats: "brand identity\nbrand voice" },
  { slug: "showcase",       title: "ShowCase | Product design",                     image: "images/showcase.jpg",       bg: "#d8d2cc", x: 3234, y: 1004, w: 496, h: 496, cap: "ShowCase\nmodular portfolio holder", cats: "product design" },
  { slug: "john-cage",      title: "John Cage",                                     image: "images/john-cage.jpg",      bg: "#f2f2f2", x: 1632, y: 802, w: 505, h: 505, cap: "John cage\nvinyl sleeve", cats: "packaging\ngraphic design" },
  { slug: "blak-aviation",  title: "BLAK Aviation | Aircraft icon design",          image: "images/blak-aviation.jpg",  bg: "#c9c9c9", x: 3204, y: 1789, w: 619, h: 464, cap: "Blak aviation\naircraft icon set", cats: "icon design\nillustration" },
  { slug: "life-in-the-folds", title: "life in the folds | Editorial, typeface design", image: "images/life-in-the-folds.jpg", bg: "#1a0d0d", x: 1373, y: 1940, w: 360, h: 492, cap: "Life in the folds\ntypeface and book", cats: "editorial\ntypeface design" }
];

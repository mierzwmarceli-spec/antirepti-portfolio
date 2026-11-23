const projects = [
  {
    slug: "screwdriver",
    name: "SCREWDRIVER",
    category: "INDUSTRIAL DESIGN",
    image: "./assets/screwdriver.png",
    alt: "Transparent multifunctional screwdriver with a sculpted clear handle and exposed bit storage",
    description: "An everyday tool is re-examined through clarity of grip and storage. The transparent, sculpted handle reveals the bit system inside, making the tool’s function visible while giving a familiar object a precise new silhouette. The study balances utility with a playful material presence."
  },
  {
    slug: "phase",
    name: "PHASE",
    category: "PRODUCT DESIGN",
    image: "./assets/phase.png",
    alt: "Two green glass bottles with vertically ribbed surfaces",
    description: "Phase is a study of paired green glass vessels shaped by rhythm and light. Vertical ribs create a tactile surface and pull changing highlights down the form, while the simple bottle silhouettes keep the objects calm and usable. The project explores how a subtle surface treatment can give an everyday object a distinct identity."
  },
  {
    slug: "equilibrium",
    name: "EQUILIBRIUM",
    category: "FURNITURE DESIGN",
    image: "./assets/equilibrium.png",
    alt: "Sculptural circular low table made from curved timber ribs",
    description: "Equilibrium explores a low table as a balance between mass and openness. Curved timber ribs repeat beneath the surface, creating a sculptural structure that remains visible from every angle. Repetition, curvature, and proportion give the grounded piece a lighter, more open presence."
  },
  {
    slug: "sundial",
    name: "SUNDIAL",
    category: "LIGHTING DESIGN",
    image: "./assets/sundial.png",
    alt: "Angular white sculptural pendant light with warm illuminated inner surfaces",
    description: "Sundial investigates a pendant light as both object and source of atmosphere. An angular outer shade frames a warm inner glow, contrasting a crisp sculptural silhouette with softer light. The study focuses on how form can direct the eye and shape the mood around a light."
  },
  {
    slug: "crawler",
    name: "CRAWLER",
    category: "MOBILITY DESIGN",
    image: "./assets/crawler.png",
    alt: "Black all-terrain electric vehicle concept with an open frame, large wheels and red rear lighting",
    description: "Crawler is an all-terrain electric vehicle concept with an open frame, large wheels, and red rear lighting. The study explores a strong stance and a clear mechanical expression for movement over uneven ground. Its exposed structure and compact proportions give the concept a purposeful, exploratory character."
  }
];

const currentSlug = new URLSearchParams(window.location.search).get("slug");
const currentIndex = projects.findIndex(project => project.slug === currentSlug);
const currentProject = projects[currentIndex];

if (!currentProject) {
  document.title = "Project not found — Marceli Mierzwicki";
  document.getElementById("detail-title").textContent = "PROJECT NOT FOUND";
  document.getElementById("detail-category").textContent = "";
  document.getElementById("detail-image").hidden = true;
  document.getElementById("detail-description").textContent = "This project is unavailable. Return to the selected work to explore the portfolio.";
  const nextLink = document.getElementById("detail-next");
  nextLink.href = "./index.html#work";
  nextLink.textContent = "RETURN TO WORK →";
} else {
  const number = String(currentIndex + 1).padStart(2, "0");
  const nextProject = projects[currentIndex + 1];
  const image = document.getElementById("detail-image");

  document.title = `${currentProject.name} — Marceli Mierzwicki`;
  document.querySelector('meta[name="description"]').content = currentProject.description;
  document.querySelector('meta[property="og:title"]').content = `${currentProject.name} — Marceli Mierzwicki`;
  document.querySelector('meta[property="og:description"]').content = currentProject.description;
  document.querySelector('meta[property="og:url"]').content = `https://antirepti.space/project.html?slug=${currentProject.slug}`;
  document.getElementById("detail-progress").textContent = `PROJECT ${number} / 05`;
  document.getElementById("detail-number").textContent = `${number} — 05`;
  document.getElementById("detail-title").textContent = currentProject.name;
  document.getElementById("detail-category").textContent = currentProject.category;
  document.getElementById("detail-description").textContent = currentProject.description;
  image.src = currentProject.image;
  image.alt = currentProject.alt;

  const nextLink = document.getElementById("detail-next");
  if (nextProject) {
    nextLink.href = `./project.html?slug=${nextProject.slug}`;
    nextLink.textContent = "NEXT PROJECT →";
  } else {
    nextLink.href = "./index.html#work";
    nextLink.textContent = "RETURN TO WORK →";
  }
}

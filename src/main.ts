import "./components/ck-button";
import "./components/ck-card";
import "./components/ck-modal";

// Simple nav toggles (no framework)
const home = document.getElementById("home")!;
const comp = document.getElementById("components")!;
const toHome = () => { home.classList.remove("hidden"); comp.classList.remove("active"); };
const toComps = () => { home.classList.add("hidden"); comp.classList.add("active"); };

document.getElementById("nav-home")?.addEventListener("click", (e) => { e.preventDefault(); toHome(); });
document.getElementById("nav-components")?.addEventListener("click", (e) => { e.preventDefault(); toComps(); });
document.getElementById("browse")?.addEventListener("click", () => toComps());

// Modal demo
const modal = document.getElementById("demoModal") as HTMLElement | null;
document.getElementById("openModal")?.addEventListener("click", () => modal?.setAttribute("open", ""));
document.getElementById("closeModal")?.addEventListener("click", () => modal?.removeAttribute("open"));

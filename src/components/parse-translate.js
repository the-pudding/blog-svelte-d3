export default function parseTranslate(node) {
  const t = node.getAttribute("transform");
  return t
    .replace("translate", "")
    .replace("(", "")
    .replace(")", "")
    .split(",")
    .map(d => +d.trim());
}

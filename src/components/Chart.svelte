<style>
  svg {
    display: block;
    margin: 0 auto;
  }
  rect {
    fill-opacity: 0.75;
  }
</style>

<script>
  import { scaleLinear } from "d3-scale";
  import { cubicOut } from "svelte/easing";

  export let padding = 0;
  export let width = 280;
  export let height = 280;
  export let data = [];
  export let index = 0;

  const rectH = Math.floor((height - padding * 2) / 5);
  const margin = Math.floor(rectH * 0.2);

  $: flat = [].concat(...data);
  $: max = Math.max(...flat.map(d => d.value));
  $: scaleW = scaleLinear()
    .domain([0, max])
    .range([0, width - padding * 2]);

  function translate(d) {
    return `translate(0, ${d.rank * (rectH + margin)})`;
  }

  function parseTransform(node) {
    const t = node.getAttribute("transform");
    return t
      .replace("translate", "")
      .replace("(", "")
      .replace(")", "")
      .split(",")
      .map(d => +d.trim());
  }

  function join(node, d) {
    const rect = node.querySelector("rect");
    rect.classList.add("enter--fill");

    return {
      update(d) {
        rect.classList.add("update--fill");
      },

      destroy() {}
    };
  }

  function enter(node, { duration = 500, delay = 500 }) {
    node.querySelector("rect").style.fill = "green";
    return {
      duration,
      delay,
      easing: cubicOut,
      tick: (t, u) => {
        node.style.opacity = t;
      }
    };
  }

  function exit(node, { duration = 500, delay = 500 }) {
    node.querySelector("rect").style.fill = "red";
    return {
      duration,
      delay,
      easing: cubicOut,
      tick: (t, u) => {
        node.style.opacity = t;
      }
    };
  }

  function update(node, { from, to }, { id, value, duration = 500 }) {
    const rect = node.querySelector("rect");
    rect.style.fill = "purple";
    const w = rect.getAttribute("width") || 0;
    const w2 = scaleW(value);
    const delta = w2 - w;
    console.log({ id, value, w, w2, delta });

    return {
      delay: 0,
      duration: 500,
      easing: cubicOut,
      tick: (t, u) => {
        rect.setAttribute("width", w + delta * t);
      }
    };
  }

  function slideX(node, { duration = 500 }) {
    const [x, y] = parseTransform(node);
    return {
      duration,
      tick: (t, u) => {
        const tr = `translate(${x + u * width}, ${y})`;
        node.setAttribute("transform", tr);
      }
    };
  }

  function slideY(node, { duration = 500 }) {
    const [x, y] = parseTransform(node);
    return {
      duration,
      tick: (t, u) => {
        const tr = `translate(${x}, ${y + d.rank})`;
        node.setAttribute("transform", tr);
      }
    };
  }
</script>

<h2>Soup Preference</h2>
<slot />
<svg {width} {height}>
  <g transform="translate({padding}, {padding})">
    {#each data[index] as d (d.id)}
      <g in:enter out:exit animate:update="{d}" transform="{translate(d)}">

        <rect x="0" y="0" height="{rectH}"></rect>

        <text alignment-baseline="middle" x="{margin}" y="{rectH / 2}">
          {d.id} - {d.value}
        </text>
      </g>
    {/each}

  </g>
</svg>

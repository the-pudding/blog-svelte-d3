<style>
  svg {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    background-color: var(--white);
  }
  rect {
    fill-opacity: 0.5;
    fill: var(--update);
  }
  .toggle {
    text-align: center;
    margin: 1rem 0;
  }
  button {
    opacity: 0.5;
  }
  button.active {
    background-color: var(--white);
    opacity: 1;
  }
  h3,
  h4,
  p {
    margin: 0;
    text-align: center;
  }
  text {
    font-size: 14px;
    fill-opacity: 0.75;
    fill: var(--update);
  }
</style>

<script>
  import { scaleLinear } from "d3-scale";
  import { cubicOut } from "svelte/easing";

  export let data = [];
  export let version = 0;

  const padding = 16;
  const width = 280;
  const height = 160;
  const rectH = 14;
  const margin = 24;

  let active = "Russell";
  let index = 0;

  $: flat = [].concat(...data);
  $: max = Math.max(...flat.map(d => d.value));
  $: scaleW = scaleLinear()
    .domain([0, max])
    .range([0, width - padding * 2]);

  function handleClick() {
    active = this.innerText;
    index = active === "Russell" ? 0 : 1;
  }

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

  // function enter(node, { duration = 500, delay = 500 }) {
  //   node.querySelector("rect").style.fill = "green";
  //   return {
  //     duration,
  //     delay,
  //     easing: cubicOut,
  //     tick: (t, u) => {
  //       node.style.opacity = t;
  //     }
  //   };
  // }

  // function exit(node, { duration = 500, delay = 500 }) {
  //   node.querySelector("rect").style.fill = "red";
  //   return {
  //     duration,
  //     delay,
  //     easing: cubicOut,
  //     tick: (t, u) => {
  //       node.style.opacity = t;
  //     }
  //   };
  // }

  // function update(node, { from, to }, { id, value, duration = 500 }) {
  //   const rect = node.querySelector("rect");
  //   rect.style.fill = "purple";
  //   const w = rect.getAttribute("width") || 0;
  //   const w2 = scaleW(value);
  //   const delta = w2 - w;
  //   console.log({ id, value, w, w2, delta });

  //   return {
  //     delay: 0,
  //     duration: 500,
  //     easing: cubicOut,
  //     tick: (t, u) => {
  //       rect.setAttribute("width", w + delta * t);
  //     }
  //   };
  // }

  // function slideX(node, { duration = 500 }) {
  //   const [x, y] = parseTransform(node);
  //   return {
  //     duration,
  //     tick: (t, u) => {
  //       const tr = `translate(${x + u * width}, ${y})`;
  //       node.setAttribute("transform", tr);
  //     }
  //   };
  // }

  // function slideY(node, { duration = 500 }) {
  //   const [x, y] = parseTransform(node);
  //   return {
  //     duration,
  //     tick: (t, u) => {
  //       const tr = `translate(${x}, ${y + d.rank})`;
  //       node.setAttribute("transform", tr);
  //     }
  //   };
  // }
</script>

<h4>Chart v{version}</h4>
<h3>Fave Soups</h3>
<p>Rating on a scale from 1 - 10</p>

<div class="toggle">
  <button on:click="{handleClick}" class:active="{active === 'Russell'}">
    Russell
  </button>
  <button on:click="{handleClick}" class:active="{active === 'Amelia'}">
    Amelia
  </button>
</div>

<svg {width} {height}>
  <g transform="translate({padding}, {padding * 1.5})">
    {#each data[index] as d (d.id)}
      <g transform="{translate(d)}">
        <rect x="0" y="0" width="{scaleW(d.value)}" height="{rectH}"></rect>
        <text alignment-baseline="top" x="0" y="-4">{d.id} ({d.value})</text>
      </g>
    {/each}
  </g>
</svg>

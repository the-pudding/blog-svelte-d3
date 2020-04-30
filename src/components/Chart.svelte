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
  import { tweened } from "svelte/motion";
  import AnimatedRect from "./AnimatedRect.svelte";

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
    return `translate(0, ${(d.rank || 0) * (rectH + margin)})`;
  }

  // const initialValues = data[index].map(d => ({
  //   rank: 0,
  //   width: 0,
  //   id: 2,
  //   value: 8
  // }));

  // const barTween = tweened(initialValues, {
  //   duration: 3000
  // });

  // $: index,
  //   ($barTween = data[index].map(d => ({
  //     ...d,
  //     id: 2,
  //     width: scaleW(d.value)
  //   })));

  function parseTransform(node) {
    const t = node.getAttribute("transform");
    return t
      .replace("translate", "")
      .replace("(", "")
      .replace(")", "")
      .split(",")
      .map(d => +d.trim());
  }

  // function join(node, { duration = 500}) {
  // // const rect = node.querySelector("rect");
  // // rect.classList.add("enter--fill");
  // console.log("enter", d.id);

  // return {
  //   update(d) {
  //     // rect.classList.add("update--fill");
  //     console.log("update", d.id);
  //   },

  //   destroy() {
  //     console.log("destory", d.id);
  //   }
  // };
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
        <AnimatedRect {scaleW} w="{d.value}" h="{rectH}" />
        <!-- <rect x="0" y="0" width="{d.width}" height="{rectH}"></rect> -->
        <text alignment-baseline="top" x="0" y="-4">{d.id} ({d.value})</text>
      </g>
    {/each}
  </g>
</svg>

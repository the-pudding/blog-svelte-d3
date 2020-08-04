<style>
  svg {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    background-color: var(--white);
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
  }
</style>

<script>
  import { scaleLinear } from "d3-scale";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import Rect from "./Rect.svelte";
  import G from "./G.svelte";

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
      <G {...d} {rectH} {margin} {height}>
        <Rect w="{scaleW(d.value)}" h="{rectH}" />
        <text alignment-baseline="top" x="0" y="-4">{d.id} ({d.value})</text>
      </G>
    {/each}
  </g>
</svg>

<style>
  h2 {
    text-align: center;
  }
  svg {
    display: block;
    margin: 0 auto;
    outline: 2px solid black;
  }
</style>

<script>
  import { cubicOut } from "svelte/easing";
  export let padding = 0;
  export let r = 0;
  export let width = 280;
  export let height = 280;
  export let data = [];
  export let index = 0;

  function join(node, d) {
    const text = node.querySelector("text");
    text.style.fill = "blue";

    return {
      update(d) {
        text.style.fill = "purple";
      },

      destroy() {}
    };
  }

  function fade(node, { duration = 500, delay = 500 }) {
    return {
      duration,
      delay,
      easing: cubicOut,
      tick: (t, u) => {
        node.style.opacity = t;
      }
    };
  }
  function slide(node, { duration = 500 }) {
    return {
      duration,
      tick: (t, u) => {
        const tr = `translate(${u * width}, 0)`;
        node.setAttribute("transform", tr);
      }
    };
  }
</script>

<h2>Soup Prefence</h2>
<slot />
<svg {width} {height}>
  <g transform="translate({padding}, {padding})"></g>
  {#each data[index] as d, i (d.id)}
    <g in:fade out:slide use:join="{d}">
      <text x="50" y="{i * 20 + 30}">{d.id} - {d.value}</text>
    </g>
  {/each}
</svg>

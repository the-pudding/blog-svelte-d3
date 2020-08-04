<style>
  rect {
    fill: pink;
    stroke: black;
  }
</style>

<script>
  import { tweened } from "svelte/motion";
  export let w = 0;
  export let h = 0;
  export let duration = 2000;
  export let jump = false;

  const width = tweened(0, { duration });
  $: width.set(w, { duration: jump ? 0 : duration });
</script>

<rect x="0" y="0" width="{$width}" height="{h}"></rect>

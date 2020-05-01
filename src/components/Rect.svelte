<style>
  rect {
    fill: blue;
  }
</style>

<script>
  import { tweened } from "svelte/motion";
  export let w = 0;
  export let h = 0;
  export let jump = false;

  const width = tweened(0, { duration: 1000 });
  $: width.set(w, { duration: jump ? 0 : 1000 });

  function enter(node) {}
</script>

<rect x="0" y="0" width="{$width}" height="{h}"></rect>

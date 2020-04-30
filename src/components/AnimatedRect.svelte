<style>
  rect {
    fill: blue;
  }
</style>

<script>
  import { tweened } from "svelte/motion";
  export let w = 0;
  export let h = 0;
  export let scaleW = x => x;

  const width = tweened(0, {
    duration: 1000
  });

  $: w, ($width = scaleW(w));
</script>

<rect x="0" y="0" width="{$width}" height="{h}"></rect>

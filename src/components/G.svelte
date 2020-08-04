<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import parseTranslate from "./parse-translate";

  export let id;
  export let value;
  export let rank;
  export let rectH;
  export let margin;
  export let height;
  export let duration = 2000;

  const y = tweened(height, { duration });
  $: y.set(rank * (rectH + margin));

  onMount(() => {
    console.log("onMount", id, value);
  });
  onDestroy(() => {
    console.log("onDestroy", id, value);
  });

  // Hack until tweened works on exit
  function exit(node) {
    const [a, b] = parseTranslate(node);
    return {
      duration,
      tick: (t, u) => {
        const y2 = b + u * height;
        const translate = `translate(0, ${y2})`;
        node.setAttribute("transform", translate);
      }
    };
  }
</script>

<g out:exit transform="translate(0, {$y})">
  <slot />
</g>

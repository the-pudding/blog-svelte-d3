<script>
  import { onDestroy } from "svelte";
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import parseTranslate from "./parse-translate";

  export let rank;
  export let rectH;
  export let margin;
  export let height;

  const y = tweened(height, { duration: 1000 });
  $: y.set(rank * (rectH + margin));

  function exit(node) {
    // y.set(height);
    return {
      duration: 1000,
      tick: (t, u) => {
        const y2 = u * height;
        // console.log($y, y2);
        // why is $y updating but not able to be used in the translate?
        // this doesn't work
        // const translate = `translate(0, ${$y})`;
        // this works
        const translate = `translate(0, ${y2})`;
        node.setAttribute("transform", translate);
      }
    };
  }
</script>

<!-- exit stuff has to be done in the tick function, any variables used in the html here are dead to us in the exit function -->
<g out:exit transform="translate(0, {$y})">
  <slot />
</g>

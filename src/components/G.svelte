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
  // $: if (rank === 0) console.log($y);

  function exit(node) {
    y.set(height);
    return {
      delay: 0,
      duration: 1000,
      tick: (t, u) => {
        // console.log(node);
        // node.style.opacity = t;
        console.log($y, u * height);
        // const translate = `translate(0, ${$y})`;
        // const translate = `translate(0, ${u * height})`;
        // node.setAttribute("transform", translate);
        // console.log(translate);
      }
    };
  }
</script>

<g out:exit transform="translate(0, {$y})">
  <slot />
</g>

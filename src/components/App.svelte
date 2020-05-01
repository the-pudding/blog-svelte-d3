<style>
  /* vars defined in public/assets/global.css */
</style>

<script>
  import Intro from "./Intro.svelte";
  import Chart from "./Chart.svelte";
  import Venn from "./Venn.svelte";

  const data = [
    [
      { id: "Broccoli Cheddar", value: 8, rank: 0 }
      // { id: "Chili", value: 2, rank: 2 },
      // { id: "Clam Chowder", value: 7, rank: 1 }
    ],
    [
      { id: "French Onion", value: 5, rank: 1 }
      // { id: "Broccoli Cheddar", value: 3, rank: 0 },
      // { id: "Chicken Noodle", value: 4, rank: 2 }
    ]
  ];
</script>

<Intro />

<!-- <section id="svelte">
  <h2>Svelte: What is it and why do we like it?</h2>
  <p>This should be collapsed by default?</p>
  <p>A video of all the cool stuff in action!</p>
  <p>
    Some of my favorite easy to explain things that should be used to convince
    people:
  </p>
  <ul>
    <li>each svelte file is a component (html, css, js)</li>
    <li>import other components, make child</li>
    <li>scoped elements (simple css syntax)</li>
    <li>pass props to components (reusable)</li>
    <li>loops and conditionals</li>
    <li>reactive statements</li>
    <li>data stores</li>
  </ul>

</section>

<section id="vis">
  <h2>Things in this space already</h2>
  <p>LayerCake</p>
  <p>Pancake</p>
  <p>d3 hearts svelte talk</p>
  <p>etc</p>
</section> -->

<section id="join">
  <!-- <h2>Joins and the update pattern</h2>
  <p>
    One of the biggest differences is that Svelte pretty much handles all the
    DOM work, while D3 is used under the hood for things like scales and shape
    generating etc.
  </p>

  <Venn />

  <p>Some default svelte transitions</p>
  <p>WTF to use?</p>
  <ul>
    <li>
      <strong>Actions</strong>
      are functions that are called when an element is created. They can return
      an object with a
      <em>destroy</em>
      method that is called after the element is unmounted. An action can have
      parameters. If the returned value has an
      <em>update</em>
      method, it will be called whenever those parameters change, immediately
      after Svelte has applied updates to the markup.
      <mark>Pro: good for enter/update, exit completion.</mark>
      <mark>Con: no exit, no built in timing</mark>
    </li>
    <li>
      A
      <strong>transition</strong>
      is triggered by an element entering or leaving the DOM as a result of a
      state change. When a block is transitioning out, all elements inside the
      block, including those that do not have their own transitions, are kept in
      the DOM until every transition in the block has completed. The transition:
      directive indicates a bidirectional transition, which means it can be
      smoothly reversed while the transition is in progress.
      <mark>Pro: good for enter/exit, built in timing</mark>
      <mark>Con: no update</mark>
    </li>
    <li>
      An
      <strong>animation</strong>
      is triggered when the contents of a keyed each block are re-ordered.
      Animations do not run when an element is removed, only when the each
      block's data is reordered. Animate directives must be on an element that
      is an immediate child of a keyed each block. Animations can be used with
      Svelte's built-in animation functions or custom animation functions.
      <mark>
        Pro: good update (only if array order changes though), built in timing
      </mark>
      <mark>Con: no enter/exit, ignores updates on data in same spot</mark>
    </li>
    <li>
      <strong>Tweened</strong>
      stores update their values over a fixed duration.
      <em>store.set</em>
      and
      <em>store.update</em>
      can accept a second options argument that will override the options passed
      in upon instantiation. Both functions return a Promise that resolves when
      the tween completes. If the tween is interrupted, the promise will never
      resolve. Out of the box, Svelte will interpolate between two numbers, two
      arrays or two objects (as long as the arrays and objects are the same
      'shape', and their 'leaf' properties are also numbers).
      <mark>
        Pro: Seems like this can be an aid for the join stuff from above
      </mark>
    </li>
    <li>
      <strong>D3.</strong>
      Use all or parts of its methods. The more D3 we use the less svelte-y it
      is though. Perhaps relying on its transition capabilities mixed in with
      some of the dom detection stuff mentioned above.
    </li>
  </ul> -->

  <Chart {data} version="{0}" />
  <!-- <Chart {data} version="{1}" /> -->
</section>

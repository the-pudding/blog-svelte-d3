<style>
  /* vars defined in public/assets/global.css */
  #intro {
    text-align: center;
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
</style>

<script>
  import Intro from "./Intro.svelte";
  import Chart from "./Chart.svelte";
  import Venn from "./Venn.svelte";
  const padding = 10;
  const data = [
    [
      { id: "Broccoli Cheddar", value: 8, rank: 0 },
      { id: "Chili", value: 2, rank: 2 },
      { id: "Clam Chowder", value: 7, rank: 1 }
    ],
    [
      { id: "Chili", value: 9, rank: 0 },
      { id: "French Onion", value: 5, rank: 1 },
      { id: "Broccoli Cheddar", value: 4, rank: 2 }
    ]
  ];
  let active = "Russell";
  let index = 0;

  function handleClick() {
    active = this.innerText;
    index = active === "Russell" ? 0 : 1;
  }
</script>

<Intro />

<section id="svelte">
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
</section>

<section id="join">
  <h2>Joins and the update pattern</h2>
  <p>
    One of the biggest differences is that Svelte pretty much handles all the
    DOM work, while D3 is used under the hood for things like scales and shape
    generating etc.
  </p>

  <Venn />

  <p>Some default svelte transitions</p>
  <p>transition, animate, use, oh my</p>

  <Chart {data} {padding} {index}>
    <div class="toggle">
      <button on:click="{handleClick}" class:active="{active === 'Russell'}">
        Russell
      </button>
      <button on:click="{handleClick}" class:active="{active === 'Amelia'}">
        Amelia
      </button>
    </div>
  </Chart>
</section>

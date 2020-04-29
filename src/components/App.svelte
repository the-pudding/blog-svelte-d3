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
  section {
    padding: 1rem;
    max-width: 40rem;
    margin: 0 auto;
  }
</style>

<script>
  import Chart from "./Chart.svelte";
  import Venn from "./Venn.svelte";
  const r = 20;
  const padding = r * 0.5;
  const data = [
    [
      { id: "Chili", value: 2 },
      { id: "Broccoli Cheddar", value: 8 },
      { id: "Clam Chowder", value: 7 }
    ],
    [
      { id: "Chili", value: 9 },
      { id: "Broccoli Cheddar", value: 6 },
      { id: "French Onion", value: 5 }
    ]
  ];
  let active = "Russell";
  let index = 0;

  function handleClick() {
    active = this.innerText;
    index = active === "Russell" ? 0 : 1;
  }
</script>

<section id="intro">
  <h1>Data Visualization with D3 and Svelte</h1>
  <p>We think it is pretty neat. Come take a sip of the Kool-Aid.</p>
</section>

<section>
  <h2>Svelte: What is it and why do we like it?</h2>
  <p>This should be collapsed by default?</p>
  <p>A video of all the cool stuff in action!</p>

</section>
<section>
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
	
  <Chart {data} {padding} {r} {index}>
    <div class="toggle">
      <button on:click="{handleClick}" class:active="{active === 'Russell'}">
        Russell
      </button>
      <button on:click="{handleClick}" class:active="{active === 'Amelia'}">
        Amelia
      </button>
    </div>
  </Chart>

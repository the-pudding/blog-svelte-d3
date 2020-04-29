<style>
  /* vars defined in public/assets/global.css */
  h1 {
    font-size: 4em;
  }
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
  <h1>D3 Joins and Svelte</h1>
  <p>Drink the Kool-Aid.</p>
</section>

<section>
  <Venn />
</section>

<section>
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
</section>

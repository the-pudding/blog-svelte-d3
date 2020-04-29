<style>
  figure {
    max-width: 40rem;
    margin: 0 auto;
  }
  figcaption {
    text-align: center;
  }
  circle {
    fill-opacity: 0.75;
  }
  .update {
    fill: var(--white);
  }
  text {
    font-size: 0.8em;
  }
</style>

<figure>
  <svg viewBox="-200 -120 400 240">
    <g transform="translate(-50,0)">
      <circle
        class="enter--fill"
        r="100"
        style="mix-blend-mode: multiply;"></circle>
      <text x="0" y="-110" text-anchor="middle">New Data</text>
      <text x="-80" text-anchor="start">Enter</text>
    </g>
    <g transform="translate(50,0)">
      <circle
        class="exit--fill"
        r="100"
        style="mix-blend-mode: multiply;"></circle>
      <text x="5" y="-110" text-anchor="middle">Existing Elements</text>
      <text x="80" text-anchor="end">Exit</text>
    </g>
    <text class="update" x="0" text-anchor="middle">Update</text>
  </svg>
  <figcaption>
    From Mike Bostock's Observable notebook
    <a
      href="https://observablehq.com/@d3/learn-d3-joins?collection=@d3/learn-d3"
      target="_blank">
      Learn D3: Joins
    </a>
  </figcaption>
</figure>

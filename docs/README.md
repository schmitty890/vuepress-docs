<main aria-labelledby="main-title" class="home">
  <header class="hero"><img src="/images/boa.png" alt="hero">
    <h1 id="main-title">
      Documentation
    </h1>
    <vue-typed-js :strings="items" :loop="true" :showCursor="false" :backSpeed="100" :backDelay="5000">
      <p class="description">Frontend Docs for <span class="typing"></span></p>
    </vue-typed-js>
    <p class="action"><a href="/guide/" class="nav-link action-button">
        Get Started →
      </a>
    </p>
  </header>
  <div class="features">
    <div class="feature">
      <h2>Simplicity First</h2>
      <p>Minimal setup with markdown-centered project structure helps you focus on writing.</p>
      <p class="action">
        <a href="/guide/" class="nav-link action-button">
          Get Started
        </a>
      </p>
    </div>
    <div class="feature">
      <h2>Vue-Powered</h2>
      <p>Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
      </p>
      <p class="action">
        <a href="/guide/" class="nav-link action-button">
          Get Started
        </a>
      </p>
    </div>
    <div class="feature">
      <h2>Performant</h2>
      <p>VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</p>
      <p class="action">
        <a href="/guide/" class="nav-link action-button">
          Get Started
        </a>
      </p>
    </div>
    <div class="feature">
      <h2>Simplicity First</h2>
      <p>Minimal setup with markdown-centered project structure helps you focus on writing.</p>
      <p class="action">
        <a href="/guide/" class="nav-link action-button">
          Get Started
        </a>
      </p>
    </div>
    <div class="feature">
      <h2>Vue-Powered</h2>
      <p>Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
      </p>
      <p class="action">
        <a href="/guide/" class="nav-link action-button">
          Get Started
        </a>
      </p>
    </div>
    <div class="feature">
      <h2>Performant</h2>
      <p>VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</p>
      <p class="action">
        <a href="/guide/" class="nav-link action-button">
          Get Started
        </a>
      </p>
    </div>
  </div>
  <div class="footer">
    Bank of America | Copyright © 2020-present Frontend Engineering
  </div>
</main>

<script>
export default {
  data () {
      return {
          items: [
            'Developers',
            'Engineers',
            'Managers',
            'Onboarding'
          ]
      }
  },
}
</script>

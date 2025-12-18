<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
:root {
  --primary: #8a2be2;
  --bg: #f8f4ff;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Arial', sans-serif;
  background-color: var(--bg);
}
</style>
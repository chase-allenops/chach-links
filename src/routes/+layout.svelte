<script>
    import "../app.css";

    import posthog from 'posthog-js'
    import { browser } from '$app/environment';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    

    if (browser) {
            beforeNavigate(() => posthog.capture('$pageleave'));
            afterNavigate(() => posthog.capture('$pageview'));
        }
</script>

<svelte:head>
  <!-- <link rel="icon" type="image/svg" href=/> -->
  <title>Chase Allen - Data Engineer and Consultant</title>
  <meta
    name="description"
    content="Chase Allen is a data engineer and tech founder based in Indianapolis, Indiana."
  >
  <meta name="author" content="Chase Allen">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>
  
<slot />
<script lang="ts">
    export let value: string;
    export let href: string = "";
</script>

{#if href.length > 0 || href === null}
    <a class="string underline" href={href} target="_blank">"{value}"</a>
{:else}
    <span class="string">"{value}"</span>
{/if}
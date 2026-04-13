<script lang="ts">
  import Keyword from './Keyword.svelte';
  import Type from './Type.svelte';
  import StringLiteral from './StringLiteral.svelte';

  export let name: string;
  export let type: string;
  export let value: string;
  export let isTexture = false;
  export let toggleAvatar: ((v: boolean) => void) | undefined = undefined;

  const handleMouseEnter = () => toggleAvatar?.(true);
  const handleMouseLeave = () => toggleAvatar?.(false);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mouseenter={isTexture ? handleMouseEnter : null} on:mouseleave={isTexture ? handleMouseLeave : null}>
  <Keyword value="public" /> <Type name={type} isEntity={isTexture} /> {name} =
  {#if isTexture}<Type name="Texture" isEntity={true} />.<span class="fn">Load</span>(<StringLiteral {value} />);{:else}<StringLiteral {value} />;{/if}
</div>

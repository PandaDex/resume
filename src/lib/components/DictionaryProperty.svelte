<script lang="ts">
  import Keyword from './Keyword.svelte';
  import Type from './Type.svelte';
  import StringLiteral from './StringLiteral.svelte';

  export let name: string;
  export let keyType: string;
  export let valueType: string;
  export let items: { key: string; value: string }[];
</script>

<div>
  <Keyword value="public" /> <Type name="Dictionary" isEntity={true} /><span class="text-white">&lt;</span><Type name={keyType} /><span class="text-white">,</span><Type name={valueType} /><span class="text-white">&gt;</span> {name} = <Keyword value="new" />() &#123;
  {#each items as item, i}
    <div class="pl-4">&#123;<StringLiteral value={item.key} />, <StringLiteral value={item.value} /> &#125;{i < items.length - 1 ? ',' : ''}</div>
  {/each}
  &#125;;
</div>

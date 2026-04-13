<script lang="ts">
  import Keyword from './Keyword.svelte';
  import Type from './Type.svelte';
  import StringLiteral from './StringLiteral.svelte';
  import type {ListItem} from "../data";



  export let name: string;
  export let itemType: string;
  export let items: ListItem[];
</script>

<div>
  <Keyword value="public" /> <Type name="List" isEntity={true} /><span class="text-white">&lt;</span><Type name={itemType} /><span class="text-white">&gt;</span> {name} = <Keyword value="new" />() &#123;
  {#each items as item, i}
    <div class="pl-4"><StringLiteral href={item.url} value={item.title} />{i < items.length - 1 ? ',' : ''}</div>
  {/each}
  &#125;;
</div>

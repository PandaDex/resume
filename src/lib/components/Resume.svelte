<script lang="ts">
  import { portfolioData } from '../data';
  import Keyword from './Keyword.svelte';
  import Type from './Type.svelte';
  import Field from './Field.svelte';
  import ListProperty from './ListProperty.svelte';
  import DictionaryProperty from './DictionaryProperty.svelte';

  function toggleAvatar(value: boolean) {
    const el = document.getElementById("avatar-pop");
    if (value) el?.classList.remove("hidden");
    else el?.classList.add("hidden");
  }
</script>

<div class="w-full h-full overflow-auto">
  <div class="code font-mono text-sm leading-tight">
    <div>
      <Keyword value="public class" /> <span class="class">{portfolioData.className}</span> &#123;
    </div>
    
    {#each portfolioData.properties as prop}
      <div class="pl-4">
        <Field
          name={prop.name}
          type={prop.type}
          value={prop.value}
          isTexture={prop.isTexture}
          {toggleAvatar}
        />
      </div>
    {/each}

    {#each portfolioData.sections as section}
      <div class="pl-4 mt-2">
        {#if section.type === 'list'}
          <ListProperty
            name={section.name}
            itemType={section.itemType}
            items={section.items}
          />
        {:else}
          <DictionaryProperty
            name={section.name}
            keyType={section.keyType}
            valueType={section.valueType}
            items={section.items}
          />
        {/if}
      </div>
    {/each}
    <div>&#125;</div>
  </div>

  <div
    id="avatar-pop"
    class="absolute z-50 left-10 top-20 bg-[#181818] w-fit h-fit py-0.5 px-2 hidden border border-gray-600 shadow-xl"
  >
    <div class="flex flex-col">
      <span
        ><Keyword value="class" /> Resume.<Type name="Texture" isEntity={true} /></span
      >
      <p class="text-xs text-gray-400">Kacper's profile picture</p>
      <img alt="profile pic" class="h-32 w-32 mt-1 rounded shadow" src="/static/avatar.png" />
    </div>
  </div>
</div>

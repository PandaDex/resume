<script lang="ts">
  export let name: string;
  export let isEntity = false;
</script>

<span class={isEntity ? "entype" : "type"}>{name}</span>

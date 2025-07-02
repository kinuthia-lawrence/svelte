<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<button 
  onclick={increment}
  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
>
  count is {count}
</button>

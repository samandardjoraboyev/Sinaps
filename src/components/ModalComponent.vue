<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="close"
  >
    <div class="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
      <h2 class="text-xl font-semibold mb-4">Modal Edit</h2>
      <div class="flex flex-col">
        <slot/>
        <div>
          <footer class="bg-gray-100 p-2">
            <slot name="footer" />
          </footer>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['close'])
</script>

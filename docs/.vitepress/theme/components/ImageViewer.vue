<script setup lang="ts">
import { useRoute } from 'vitepress'
import { nextTick, onMounted, ref, watch } from 'vue'

const route = useRoute()
const dialog = ref<HTMLDialogElement>()
const image = ref<HTMLImageElement>()
const originalSize = ref(false)

async function open(event: Event) {
  const target = event.currentTarget
  if (!(target instanceof HTMLImageElement)) return
  if (event instanceof KeyboardEvent && !['Enter', ' '].includes(event.key)) return
  event.preventDefault()
  target.focus({ preventScroll: true })
  image.value = target
  originalSize.value = false
  await nextTick()
  dialog.value?.showModal()
}

function enableImages() {
  for (const img of document.querySelectorAll<HTMLImageElement>('.VPContent img')) {
    if (img.closest('a, button')) continue
    img.tabIndex = 0
    img.setAttribute('role', 'button')
    img.setAttribute('aria-haspopup', 'dialog')
    img.setAttribute('aria-label', img.alt ? `Enlarge image: ${img.alt}` : 'Enlarge image')
    img.addEventListener('click', open)
    img.addEventListener('keydown', open)
  }
}

onMounted(enableImages)
watch(() => route.path, async () => {
  dialog.value?.close()
  await nextTick()
  enableImages()
}, { flush: 'post' })
</script>

<template>
  <dialog ref="dialog" class="image-viewer" aria-label="Enlarged image"
    @close="image = undefined" @click.self="dialog?.close()">
    <template v-if="image">
      <div class="controls">
        <button type="button" @click="originalSize = !originalSize">
          {{ originalSize ? 'Fit to screen' : 'Original size' }}
        </button>
        <button type="button" autofocus @click="dialog?.close()">Close</button>
      </div>
      <div class="canvas" @click.self="dialog?.close()">
        <img :src="image.currentSrc || image.src" :alt="image.alt"
          :class="{ original: originalSize }"
          :style="{ '--ratio': image.naturalWidth / image.naturalHeight }">
      </div>
    </template>
  </dialog>
</template>

<style scoped>
.image-viewer[open] {
  position: fixed;
  inset: 0;
  margin: auto;
  width: 96vw;
  height: 94dvh;
  max-width: none;
  max-height: none;
  padding: 0;
  border: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.image-viewer::backdrop { background: rgb(0 0 0 / 85%); }
.controls { display: flex; justify-content: flex-end; gap: 8px; }
.controls button {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.canvas {
  flex: 1;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  container-type: size;
  display: flex;
}
.canvas img {
  flex: none;
  margin: auto;
  width: min(100cqw, calc(100cqh * var(--ratio)));
  height: auto;
  max-width: none;
  align-self: flex-start;
}
.canvas img.original { width: auto; }
:global(.VPContent img[aria-haspopup="dialog"]) { cursor: zoom-in; }
:global(.VPContent img[aria-haspopup="dialog"]:focus-visible),
.controls button:focus-visible { outline: 3px solid var(--vp-c-brand-1); }
</style>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { versions, latestVersion } from '../../versions'

const { page } = useData()
const router = useRouter()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

// The version segment of the current route, defaulting to latest for pages
// (such as the landing page) that live outside any version directory.
const currentVersion = computed(() => {
  const segment = page.value.relativePath.split('/')[0]
  return versions.some((v) => v.version === segment) ? segment : latestVersion
})

const currentLabel = computed(
  () => versions.find((v) => v.version === currentVersion.value)?.label ?? '',
)

// The path after the version segment (e.g. "guide/export"), so switching keeps
// the reader on the same page where that page exists in the target version.
const subPath = computed(() => {
  const parts = page.value.relativePath.replace(/\.md$/, '').split('/')
  return versions.some((v) => v.version === parts[0])
    ? parts.slice(1).join('/')
    : 'guide/introduction'
})

function targetFor(version: string): string {
  const sub = subPath.value || 'guide/introduction'
  return `/${version}/${sub}`
}

function switchTo(version: string) {
  open.value = false
  if (version === currentVersion.value) return
  // If the equivalent page doesn't exist in the target version, the not-found
  // handler in Layout.vue falls back to that version's introduction.
  router.go(targetFor(version))
}

function onClickOutside(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="root" class="version-switcher">
    <button
      class="version-switcher-button"
      type="button"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click="open = !open"
    >
      <span>{{ currentLabel }}</span>
      <span class="version-switcher-caret" aria-hidden="true">▾</span>
    </button>
    <ul v-show="open" class="version-switcher-menu" role="listbox">
      <li v-for="v in versions" :key="v.version" role="option">
        <a
          class="version-switcher-item"
          :class="{ active: v.version === currentVersion }"
          :href="targetFor(v.version)"
          @click.prevent="switchTo(v.version)"
        >
          {{ v.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.version-switcher {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
}

.version-switcher-button {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 10px;
  height: 32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-alt);
  transition: border-color 0.25s, background-color 0.25s;
}

.version-switcher-button:hover {
  border-color: var(--vp-c-brand-1);
}

.version-switcher-caret {
  font-size: 10px;
  color: var(--vp-c-text-2);
}

.version-switcher-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 140px;
  margin: 0;
  padding: 6px;
  list-style: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  z-index: 100;
}

.version-switcher-item {
  display: block;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--vp-c-text-1);
  transition: background-color 0.25s;
}

.version-switcher-item:hover {
  background-color: var(--vp-c-default-soft);
}

.version-switcher-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>

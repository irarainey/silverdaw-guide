<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import { onMounted, watch } from 'vue'
import VersionSwitcher from './components/VersionSwitcher.vue'
import { latestVersion, isKnownVersion } from '../versions'

const { Layout } = DefaultTheme
const { page } = useData()
const router = useRouter()

// Send visitors who land on an unversioned or missing doc path to the default
// (latest) version, so "no version in the URL" resolves to the default and old
// unversioned links keep working. This runs on the static 404 page too, which
// GitHub Pages serves for unknown paths.
function redirectToDefaultVersion() {
  if (typeof window === 'undefined') return
  if (!page.value.isNotFound) return

  const path = window.location.pathname
  const segment = path.split('/').filter(Boolean)[0] ?? ''

  // Unversioned guide link (e.g. /guide/export) -> latest version.
  const unversioned = path.match(/^\/guide\/(.*)$/)
  if (unversioned) {
    router.go(`/${latestVersion}/guide/${unversioned[1]}`)
    return
  }

  // A known version but a page that doesn't exist there -> that version's intro.
  if (isKnownVersion(segment)) {
    router.go(`/${segment}/guide/introduction`)
  }
}

onMounted(redirectToDefaultVersion)
watch(() => page.value.relativePath, redirectToDefaultVersion)
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <VersionSwitcher />
    </template>
  </Layout>
</template>

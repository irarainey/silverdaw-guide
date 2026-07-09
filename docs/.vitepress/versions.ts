// Version manifest for the Silverdaw guide.
//
// This is the single source of truth for which documentation versions exist and
// which one is the default. Each released version of the Silverdaw application
// gets its own self-contained copy of the guide under `docs/<version>/`, with
// versioned screenshots under `docs/public/<version>/images/`.
//
// The generation pipeline updates this file on each app release: it prepends the
// new version to `versions` and points `latestVersion` at it. Older entries are
// left untouched so their permalinks stay stable forever.

export interface DocVersion {
  /** Exact application release this guide corresponds to, e.g. "1.0.3". */
  version: string
  /** Human-readable label shown in the version switcher, e.g. "v1.0.3". */
  label: string
}

// Newest first. The first entry is treated as the latest by convention, but the
// default served to visitors is controlled explicitly by `latestVersion` below.
export const versions: DocVersion[] = [
  { version: '1.1.0', label: 'v1.1.0' },
  { version: '1.0.3', label: 'v1.0.3' },
]

// The default version loaded when a visitor arrives without a version in the URL
// (via the landing page, the top navigation, and the unversioned-link redirect).
// 1.1.0 is published and reachable via the version switcher, but 1.0.3 stays the
// default until the application store publish of 1.1.0 is complete.
export const latestVersion = '1.0.3'

/** All known version identifiers, for route matching. */
export const versionIds: string[] = versions.map((v) => v.version)

/** True when the given first path segment is a known documentation version. */
export function isKnownVersion(segment: string): boolean {
  return versionIds.includes(segment)
}

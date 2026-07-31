// Version manifest for the Silverdaw guide.
//
// This is the single source of truth for which documentation versions exist and
// which one is the default. Each minor Silverdaw release gets its own
// self-contained copy of the guide under `docs/<major.minor>/`, with versioned
// screenshots under `docs/public/<major.minor>/images/`.
//
// Patch releases share their minor release's guide because they contain bug
// fixes only and do not require the site to be republished.

export interface DocVersion {
  /** Major/minor URL segment for this guide, e.g. "1.4". */
  version: string
  /** Human-readable patch-series label shown in the version switcher. */
  label: string
}

// Newest first. The first entry is treated as the latest by convention, but the
// default served to visitors is controlled explicitly by `latestVersion` below.
export const versions: DocVersion[] = [
  { version: '1.4', label: '1.4.x' },
  { version: '1.3', label: '1.3.x' },
  { version: '1.2', label: '1.2.x' },
  { version: '1.1', label: '1.1.x' },
  { version: '1.0', label: '1.0.x' },
]

// The default version loaded when a visitor arrives without a version in the URL
// (via the landing page, the top navigation, and the unversioned-link redirect).
export const latestVersion = '1.4'

/** Previous patch-specific URL segments and their canonical minor guides. */
export const legacyVersionRedirects: Record<string, string> = {
  '1.4.2': '1.4',
  '1.4.1': '1.4',
  '1.4.0': '1.4',
  '1.3.0': '1.3',
  '1.2.0': '1.2',
  '1.1.0': '1.1',
  '1.0.3': '1.0',
  '1.0.2': '1.0',
  '1.0.1': '1.0',
  '1.0.0': '1.0',
}

/** All known version identifiers, for route matching. */
export const versionIds: string[] = versions.map((v) => v.version)

/** True when the given first path segment is a known documentation version. */
export function isKnownVersion(segment: string): boolean {
  return versionIds.includes(segment)
}

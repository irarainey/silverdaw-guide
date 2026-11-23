import { access, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'

export async function captureProjectExamples({
  page, app, copy, projectFile, document, work, button, capture, frame, box,
}) {
  if (resolve(copy) !== resolve(work, 'project') || dirname(resolve(projectFile)) !== resolve(copy))
    throw new Error('Project scenes require the disposable project directory')

  async function choose(path) {
    await app.evaluate(({ dialog }, path) => {
      dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [path] })
    }, path)
  }
  async function open(path) {
    await choose(path)
    await button('File').click()
    await page.getByRole('button', { name: /^Open Project/ }).click()
  }
  const vocals = page.getByTitle('Vocals — click to rename', { exact: true })
  await open(projectFile)
  await vocals.waitFor()

  // The saved California Mashup view has two adjacent vocal phrases here.
  const rowY = box.y + 76
  const item = name => page.getByRole('menuitem', { name, exact: true })
  async function clipLibraryMenu(x) {
    await page.mouse.click(box.x + x, rowY, { button: 'right' })
    await page.getByRole('menuitem', { name: /^Library\b/ }).hover()
  }
  await clipLibraryMenu(110)
  await item('Save Clip to Library').click()
  await clipLibraryMenu(110)
  await item('Unlink from Library').waitFor()
  await page.keyboard.press('Escape')
  await clipLibraryMenu(400)
  if (!await item('Save Clip to Library').isEnabled())
    throw new Error('Expected an independent vocal phrase beside the linked clip')
  await page.keyboard.press('Escape')
  await page.getByRole('menu').first().waitFor({ state: 'hidden' })
  await page.mouse.move(2, 2)
  await frame('linked-clips', { x: box.x + 38, y: box.y, width: 533, height: 148 })

  await button('File').click()
  await page.getByRole('button', { name: /^New Project/ }).click()
  await vocals.waitFor({ state: 'hidden' })

  // Keep the original project and its media intact. The engine must discover
  // the missing file on open; never inject an unresolved flag or a dialog.
  const example = structuredClone(document)
  function* walk(node) {
    yield node
    for (const child of node.$children ?? []) yield* walk(child)
  }
  const source = [...walk(example.project)].find(n => n.kind === 'source' && n.filePath)
  if (!source) throw new Error('Missing California Mashup source')
  const missingPath = 'C:\\Music\\California Soul.mp3'
  const replacement = join(work, 'Music', 'California Soul.mp3')
  await access(replacement)
  source.filePath = missingPath
  source.name = 'California Soul.mp3'
  const exampleFile = join(copy, 'Locate Audio.silverdaw')
  await writeFile(exampleFile, JSON.stringify(example), { flag: 'wx' })
  await open(exampleFile)

  const missing = page.getByRole('dialog', { name: 'Missing Audio Files' })
  const paths = missing.locator('li code')
  await missing.getByTitle(missingPath, { exact: true }).waitFor()
  if (await paths.count() !== 1 || (await paths.textContent()) !== missingPath)
    throw new Error('Refusing to capture unexpected media paths')
  const locate = missing.getByRole('button', { name: 'Locate file…', exact: true })
  await locate.waitFor()
  await capture('missing-audio-files', missing.locator('.dialog-card'), 36)
  await choose(replacement)
  await locate.click()
  await missing.waitFor({ state: 'hidden' })
}

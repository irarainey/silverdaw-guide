export async function captureRulerExamples({ page, button, captureGroup, frame, box }) {
  const grid = page.getByRole('combobox', { name: 'Timeline snap grid' })
  await grid.selectOption({ label: 'Beat' })
  await grid.locator('option:checked', { hasText: /^Beat$/ }).waitFor({ state: 'attached' })
  await captureGroup('window-status-bar', [page.getByTitle(/^Timeline zoom —/), grid], 8)

  // M toggles rather than adds. Start with no markers in the disposable copy.
  await button('Edit').click()
  const clear = button('Clear All Markers')
  await clear.waitFor()
  if (await clear.isEnabled()) await clear.click()
  else await page.mouse.click(box.x + 120, box.y + 14)
  await clear.waitFor({ state: 'hidden' })

  const x = box.x + box.width / 2
  const seek = offset => page.mouse.click(x + offset, box.y + 14)
  const position = page.getByTitle('Bar.Beat.Sub', { exact: true })
  const waitForPosition = text => position.and(page.getByText(text, { exact: true })).waitFor()
  await seek(120)
  const left = await position.innerText()
  await page.keyboard.press('m')
  await seek(440)
  const right = await position.innerText()
  await page.keyboard.press('m')
  await seek(280)
  const middle = await position.innerText()
  if (new Set([left, middle, right]).size !== 3) {
    throw new Error('Marker scene requires three distinct ruler positions')
  }

  // The marker triangles are canvas graphics. Check both via real navigation.
  await page.keyboard.press('Control+ArrowLeft')
  await waitForPosition(left)
  await page.keyboard.press('Control+ArrowRight')
  await waitForPosition(right)
  await seek(280)
  await waitForPosition(middle)
  await page.mouse.move(0, box.y)
  await frame('timeline-markers', { x, y: box.y, width: 560, height: 125 })
}

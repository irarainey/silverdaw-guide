# Browsing Files

The **Files** tab in the bottom panel browses folders of audio on your own
drives, so you can find a track, listen to it, and bring it into your project
without leaving Silverdaw.

It sits beside the **Library** tab. The Library holds the audio imported into the
project you have open; the Files tab browses audio files sitting on your disk.

## Adding a folder

The Files tab starts empty, with the hint *"No folders added yet. Use the folder
button to add one."*

Click the folder button in the narrow strip on the left (**Add a folder to the
file browser**) and choose a folder — your music collection, a folder of samples,
a downloads folder, anything you like. Silverdaw reads only the folders you pick
here, and it remembers them, so they are waiting for you the next time you open
the app.

You can add as many folders as you want. Each one appears as a top-level folder
in the list, with everything inside it nested underneath.

<!-- Image placeholder: the Files tab with an added folder expanded, showing cover art, title, artist, album, type, and length columns. -->

### While a folder is being read

The first time you add a folder, Silverdaw reads through it to find the audio
inside and pick up each track's details. A large collection takes a few seconds.
While it looks through the folders, the folder shows a spinner and a running
count such as **Indexing… 1,200 files**, and rows appear in the list as it goes,
so you can start browsing straight away. Once it has everything listed, the label
changes to **Indexing… 240 of 1,200** while each track's details are read. After
that first read the folder opens instantly, even after you restart Silverdaw.

## Finding your way around

Click a folder to open or close it. Only audio Silverdaw can play is listed —
WAV, AIFF, FLAC, MP3, and M4A files — so a folder of documents and pictures shows
only its music.

Each file is listed with:

- its **cover art** (hover the small thumbnail to see a larger preview),
- its **title** — the name stored in the file where there is one, otherwise the
  file name,
- its **artist** and **album**,
- its **type** (the file format, such as `MP3`),
- the **position** it is playing from, while you are listening to it, and
- its **length**.

### Filtering

Type in the **Filter files** field at the top right of the panel to narrow the
list to files whose track name or artist matches. Filtering starts once you have
typed at least three characters — shorter than that matches almost everything, so
the list is left alone while you type. Folders open automatically to show what
matched. Click the field's **Clear filter** button, or press <kbd>Esc</kbd> while
the field is focused, to clear the filter and put the folders back exactly as
they were.

### Using the keyboard

The list can be driven entirely from the keyboard:

| Action | Key |
| --- | --- |
| Move up and down the list | <kbd>↑</kbd> / <kbd>↓</kbd> |
| Open or close a folder / play or pause a file | <kbd>Enter</kbd> |
| Remove the selected folder you added | <kbd>Delete</kbd> |

The arrow keys also work from the **Filter files** field, so you can search and
then step straight into the results without reaching for the mouse.

## Listening before you import

Click anywhere on a file's row to select it. To hear it through your audio
output, click its **Play** button, or double-click the row away from its
buttons. Click **Pause** to pause the audition, and **Back to start** to return
to the beginning. The row shows a running position while it plays.

Only one thing plays at a time, so auditioning a file stops project playback.

::: tip
A strip at the top of the panel keeps the file you are listening to within
reach. While a file is playing it appears there, marked **Playing**, with its
own controls — so you can stop it however far you have scrolled or whatever you
have filtered to. The file stays listed in its folder as well. Pause the
audition, or let it reach the end, and the strip reads **Nothing playing**.
:::

Some formats have to be decoded before they can be played. The button briefly
reads **Preparing…** while that happens, then playback starts.

## Importing into the project

When you find something you want, click **Import** on its row. The file is
imported into the project's [Library](/1.8/guide/library) exactly as if you had
imported it there — it is analysed for key, tempo, and beats in the background,
and is then ready to drag onto the timeline.

You can also right-click a file for the same actions:

- **Play** / **Pause**
- **Back to Start**
- **Import into Library**

### Dragging straight onto the timeline

To skip a step, **drag a file's row from the Files tab onto the timeline**. The
file is imported into the Library and placed on the timeline in one action.

As you drag, a marker shows exactly where the audio will land — the same marker
you get when dragging from the Library. Drop it on an existing track to place it
there, or on the empty space below the tracks to get a new track for it.

Each row's tooltip is a reminder: *"Drag onto a track to add it. Double-click to
preview."*

## Keeping folders up to date

Right-click a folder for:

- **Refresh** — read the folder again to pick up files you have added, removed,
  or retagged since it was last read.
- **Remove Folder** — take the folder out of the Files tab. This is offered only
  on a folder you added yourself; folders inside it leave with it. Nothing is
  deleted from your disk, and any audio you already imported stays in your
  project.

If a folder cannot be read — an external drive that is unplugged, or a folder that
has been moved or deleted — it is marked **Unavailable** with a **Retry** button
beside it. Reconnect the drive and click **Retry**.

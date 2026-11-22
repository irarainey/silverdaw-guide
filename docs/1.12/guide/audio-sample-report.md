# Audio Sample Report

Choose **File ▸ Audio Sample Report…** to see which recordings you used in
your mix and where they play. The report counts clips placed on the timeline,
not every file in the [Library](/1.12/guide/library). If the report is empty,
place a clip on the timeline first.

::: warning Listing a sample does not clear it for use
Neither the report nor its PDF verifies who owns the music or confirms that
your use is authorised. Credits are a starting point for research. Silverdaw
does not grant permission to use third-party recordings or compositions.
Before sharing or releasing your mix, check that your intended use is
permitted and obtain any permissions you need.
:::

## Read a recording's placements

Find the recording under **Track:**. Its rows show each use of that recording,
including [stems](/1.12/guide/stems) and samples that Silverdaw can trace back
to it. **Project track** tells you which timeline track holds the clip.
Use the time columns to answer three different questions:

| To find out… | Read |
| --- | --- |
| When does the clip play in my mix? | **Timeline range** gives its start and end in the arrangement. **Duration** is how long it lasts there, including tempo warping. |
| What part of the file does the clip use? | **File range** gives the start and end in the file the clip plays. A sample cut from a song can start at zero in its own file. |
| Where was that passage in the song? | **Original recording range** gives its position in the original, when known. A *source window only* gives the input section, not every sound played: a scratch can skip or repeat parts. **Cannot be determined** means the range is unknown. |

**Placements** counts each use. **Known distinct passages** merges exact ranges
that overlap or touch. For example, placing the same four-second loop three
times gives three placements but just one known four-second passage. Source
windows and unknown ranges don't count toward that total.

**Timeline coverage** counts time in the arrangement instead. Two stems from
the same recording playing at the same time cover that time only once. Muted
clips and clips excluded by solo stay in the list. When any are excluded,
the report also shows coverage after mute/solo; it doesn't measure audibility.

## Check the credits and paths

**Artist** and **Album** come from local information, not an online lookup.
Under **File metadata** you may also find an **ISRC** (a recording identifier),
**Composer**, **Label**, or **Copyright notice**.

Read paths inside the project relative to **Location**. External files show
their local paths. For a stem or sample from another project, **Source file**
may show only the original filename, or **Cannot be determined**. If Silverdaw
matched the source by its project folder or recording metadata, it says so.
**Derived file** identifies the stem or sample used by the clip.

## Save a PDF

1. Choose **Export PDF**. If you haven't saved the project yet, choose
   **Save and Export PDF** and save the project first.
2. Choose a name and folder for the landscape A4 PDF. The suggested name is
   `Audio Sample Report <UTC timestamp>.pdf` in the `audit` folder beside the
   project file. After a successful export, Silverdaw suggests the same folder
   while the project stays open.

Before sharing the PDF, check the file paths it contains.

# Feedback & Support

Something not working as you expected? Tell us what you were trying to do,
what happened, and what you expected instead. You don't need to know the cause
to report a useful problem. Ideas and suggestions are welcome too.

## Get in touch

Share feedback, request features, or ask for help through the Silverdaw feedback
portal:

- [silverdaw.featurebase.app](https://silverdaw.featurebase.app)

You can also open it from inside Silverdaw with **Help ▸ Submit Feedback**, which
takes you straight to the portal in your browser.

You can post a new request, browse what other users have suggested, and follow
along as ideas move from suggestion to reality.

For a problem report, include your Silverdaw version and the steps that led to
it. If it involves audio hardware or a MIDI deck, include the model name.
This makes it easier to follow the same steps and investigate.

## Include diagnostic logs for a problem

If Silverdaw will not start, its launch diagnostics are saved in:

```text
%USERPROFILE%\Silverdaw\Diagnostics
```

Attach `startup.log` and `backend.log` when reporting the problem. If the audio
engine crashed while starting, attach the matching `backend-crash-<timestamp>.log`
as well.

For a problem that happens while Silverdaw is open, turn on **Write diagnostic
logs** in **Edit ▸ Preferences… ▸ Developer**, click **Save**, then close and
reopen Silverdaw. Reproduce the problem and choose **Help ▸ Send Diagnostic Logs…**.
Silverdaw saves a zip in your configured log folder
(`Silverdaw\Logs` by default), reveals it in Windows Explorer, and opens a
prepared email to `support@silverdaw.com` for you to attach and send.

Review the zip before sharing it. Diagnostic logs can contain project names,
filenames, and other identifying details even though Windows user-profile
path prefixes are redacted. You choose whether to attach and send the bundle.

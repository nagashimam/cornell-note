# Cornell note

Lays out notes based on the Cornell note-taking style

## About Cornell note

Refer to [The Cornell Note Taking System](https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/) for an explanation of the Cornell note-taking system.

## Basic structure of your notes

### CSS

First of all, you need to add a CSS class to the notes you intend to style according to the Cornell note-taking system. Copy and paste the following snippet at the top, or set up [templates](https://help.obsidian.md/plugins/templates).

```yaml
---
cssClass: cornell-note
---
```

Also, this plugin assumes you follow the following structure. The first and last `##` headings span 100% of the width, and the other `##` headings are aligned to the left and serve as cues:

```markdown
## Preview

Write what you'd expect from today's lecture.

## Cue 1

Write notes for Cue 1 here.

## Cue 2

Repeat as many cues and notes as you wish.

## Summary

Write what you have learned in today's lecture.
```

After you have finished editing and switched to preview mode, your notes will be styled according to the Cornell note-taking system. Styles are not applied during editing mode, as I feel more comfortable editing normal notes than Cornell notes.

## `Redraw Cornell note` command

Sometimes, this plugin fails to apply styles properly and your notes look weird even after you've switched to preview mode. You should be able to fix the layout by running `Redraw Cornell note` command to apply styles again.


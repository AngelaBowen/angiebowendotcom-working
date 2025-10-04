

## To implement
- Add h-card and h-entry additions
- accessibility for light/dark toggle
- Bidirectional link popups
- Wiki like table of contents - Nothing is that long yet.
- Info boxes & popup info boxes
- Search function
- https://goaccess.io/ - for server log analytics
- Add Bridgy (Backfeeds)
- Micropub
- Microsub
- POSSE: Publish on your Own Site, Syndicate Elsewhere


## Quick Reference

To add metadata for the fediverse, add this to the head of your html files:
<meta name="fediverse:creator" content="@angiebowen@indieweb.social">

To fetch webmentions, run:
node .\fetch-webmentions.js

To run the site locally, use:
npx eleventy --serve

Example of collapsable section:
<details>
<summary><strong>Weekly Log: Week 1</strong></summary>
<!-- content here -->
</details>
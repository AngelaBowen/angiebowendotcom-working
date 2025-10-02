# This is private info for now. My own notes on what I want to get done.

Open file formats
https://mnemosyne-proj.org/download-mnemosyne.php
https://thehealthsciencesacademy.org/health-tips/how-to-conduct-an-effective-self-experiment/

## To implement
- Bidirectional link popups
- Wiki like table of contents - Nothing is that long yet.
- Link icons - external done. Internal, pdf, etc.
- Info boxes & popup info boxes
- Search function
- 404 page
- dark mode / light mode / fun mode toggle
- https://goaccess.io/ - for server log analytics
- Add Bridgy (Backfeeds)
- Micropub
- Microsub

**Pages to add**
- Have a link on colloform for why it's my logo. And it's because it's a symbol for connections.
- 

## Guidelines
Readability and Accessibility above all other design choices
Keep it fast-loading and lightweight
Keep it semantic html & css (I like to write my own code because wysiwyg editors make a big ol mess of everything behind the scenes.)
Use HTTPS
POSSE: Publish on your Own Site, Syndicate Elsewhere


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
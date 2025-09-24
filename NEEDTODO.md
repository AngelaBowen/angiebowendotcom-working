# This is private info for now. My own notes on what I want to get done.

Open file formats
https://mnemosyne-proj.org/download-mnemosyne.php
https://thehealthsciencesacademy.org/health-tips/how-to-conduct-an-effective-self-experiment/

What do I have to show for 50 years of life thus far?


## Project Overview
This is my personal digital garden. For my master's capstone project, I'm developing a course teaching generative note-making to first-year university students. I'm building my project in public and sharing the process here.
Because a 2-year capstone often moves slowly, I also run n=1 trials on thinking, learning, and creativity to see what actually works in practice. My first experiment is currently in progress.
As I curate research for my capstone, and my own personal development, I'll share insights on creativity and learning from cognitive science, psychology, and communication.
I'll be sharing tips and techniques from my personal mind garden, where I practice the generative notemaking method that drives all my work. It is one of the most profound creative thinking tools I've ever used.


## To implement
- Bidirectional link popups
- Collapsable sections
- Wiki like table of contents
- Link icons
- Info boxes & popup info boxes
- Backlinks at the bottom of each page
- 404 page
- dark mode / light mode / fun mode toggle
- https://goaccess.io/ - for server log analytics
- Add Bridgy (Backfeeds)
- Micropub
- Microsub

I like to write my own code because wysiwyg editors make a big ol mess of everything behind the scenes.


## Guidelines
Readability and Accessibility above all other design choices
Keep it fast-loading and lightweight
Keep it semantic html & css
Keep javascript minimal and 100% optional
Use HTTPS
POSSE: Publish on your Own Site, Syndicate Elsewhere


## Quick Reference

To fetch webmentions, run:
node .\fetch-webmentions.js

To run the site locally, use:
npx eleventy --serve

Example of collapsable section:
<details>
<summary><strong>Weekly Log: Week 1</strong></summary>
<!-- content here -->
</details>
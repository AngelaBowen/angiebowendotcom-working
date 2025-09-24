const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPlugin(pluginRss);

  // Add Nunjucks filter for yyyy/mm/dd date
  eleventyConfig.addNunjucksFilter("dateToYMD", function(dateObj) {
    const d = new Date(dateObj);
    if (isNaN(d)) return "";
    return d.getFullYear() + "/" + String(d.getMonth()+1).padStart(2, '0') + "/" + String(d.getDate()).padStart(2, '0');
  });

  // Add Nunjucks filter for ISO date
  eleventyConfig.addNunjucksFilter("dateToIso", function(dateObj) {
    return DateTime.fromJSDate(new Date(dateObj), { zone: "utc" }).toISODate();
  });

  // Add Nunjucks filter for RFC822 date
  eleventyConfig.addNunjucksFilter("dateToRfc822", function(dateObj) {
    return DateTime.fromJSDate(new Date(dateObj), { zone: "utc" }).toRFC2822();
  });

  // ...any other config...
};
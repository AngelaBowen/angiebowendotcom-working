const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("favicon.png");

  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "MMM dd, yyyy") {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat(format);
  });

  eleventyConfig.addNunjucksFilter("dateToYMD", function(date) {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  });
  
};
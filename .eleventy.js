// This block defines the configuration settings for 11ty
module.exports = function (eleventyConfig) {

    // Recursively copy over all files from src/assets to public/assets
    eleventyConfig.addPassthroughCopy("src/assets");

    // Copy the CNAME file so our custom domain works
    eleventyConfig.addPassthroughCopy("CNAME");

	return {
        dir: {
            input:  "src",           // set the source directory from where Markdown and template files are read
            output: "public"         // set the output directory where HTML is written
        },
        passthroughFileCopy: true    // enable the above .addPassthroughCopy settings
    }
};
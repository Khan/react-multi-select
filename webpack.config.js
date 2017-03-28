module.exports = {
    context: __dirname + "/dist",
    // ...
    output: {
        libraryTarget: "commonjs",
        // ...
    },
    externals: ["react", "fuzzy-match-utils"],
};

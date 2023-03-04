if (document.querySelectorAll("script[src*='ads.js']").length > 1) {
    throw new Error("Please keep only one ads.js script!");
}

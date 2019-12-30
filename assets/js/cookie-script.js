window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#ffffff",
                "text": "#9c9c9c"
            },
            "button": {
                "background": "#8a8383",
                "text": "#ffffff"
            }
        },
        "dismissOnScroll": true,
        "dismissOnWindowClick": true,
        "theme": "edgeless",
        "position": "bottom",
        "content": {
            "message": "Questo sito utilizza cookies per assicurarti la migliore navigazione.",
            "dismiss": "OK",
            "link": "Maggiori Informazioni",
            "href": "/privacy-policy.html"
        }
    })
});
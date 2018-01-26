$(function() {

    var words = [
        "animation",
        "website",
        "film",
        "design",
        "code",
        "art",
        "music",
        "rebranding",
        "pineapple",
        "sea salt",
        "games",
        "interaction",
        "mind powers",
        "dinosaurs",
        "plot points",
        "tech",
        "fabrication",
        "sauce"
    ];

    function setDeceleratingTimeout(callback, factor, times) {
        var internalCallback = function(tick, counter) {
            return function() {
                if (--tick >= 0) {
                    window.setTimeout(internalCallback, ++counter * factor);
                    changeTag();
                }
            }
        }(times, 0);

        window.setTimeout(internalCallback, factor);
    };
    
    function changeTag(){
        $("#tagline span").html(words[Math.floor(Math.random() * words.length)]);
    }
    
    setDeceleratingTimeout(changeTag, 10, 30);
});
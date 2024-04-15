document.addEventListener("DOMContentLoaded", function() {
    // Function to read file contents
    function readFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("text/plain");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    // Call readFile function to read "flag" file
    readFile("flag", function(text) {
        // Output file contents to the body of the HTML
        document.getElementById("fileContents").textContent = text;
    });
});


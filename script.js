function shortenURL() {
    var urlInput = document.getElementById("urlInput").value;
    
    if (urlInput) {
        // Simple URL shortening logic (using Base64 encoding)
        var shortenedURL = "http://short.ly/" + btoa(urlInput).substring(0, 6);
        document.getElementById("shortenedResult").innerHTML = 
            "Shortened URL: <a href='" + shortenedURL + "' target='_blank'>" + shortenedURL + "</a>";
    } else {
        document.getElementById("shortenedResult").innerHTML = "Please enter a valid URL.";
    }
}

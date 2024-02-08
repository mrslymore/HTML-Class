const mathhhhh = document.getElementById("mathhhh")
mathhhhh.innerText = 0.1 + 0.2


const catkey = "live_ny5GpHYWo8cBlApH0suSVjARkyFVWVG9PTV2BDzlnoPmYxAYWzmKd58UV5KjOliU"
const cat = document.getElementById("catimg")
function getcat() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": `{catkey}`
    });

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.json())
        .then(data => {
            // Accessing the URL of the first cat image in the response
            const firstCatImage = data[0];
            const imageUrl = firstCatImage.url;

            // Creating an img element and setting its src attribute

            cat.src = imageUrl;

            // Appending the img element to the document body or another container
            document.body.appendChild(catImageElement);
        })
        .catch(error => console.log('error', error));
}
getcat()

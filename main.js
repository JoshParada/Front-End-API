
document.addEventListener("DOMContentLoaded", main);

let APIKEY = "3WPfgF1sVU3zsu1kPE2cee3RS5Gc6kxy"; //API KEY

function main() {
    document.getElementById("btnSearch").addEventListener("click", ev => { //adding click listener to search button

        ev.preventDefault();//prevents page reload

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;//API url
        let str = document.getElementById("search").value;
        url = url.concat(str);//combines url with input
        console.log(url);

        fetch(url)
            .then(response => response.json())//gets response
            .then(content => {//handles data

                console.log(content.data);

                let fig = document.createElement("figure"); //creates figure
                let img = document.createElement("img"); //creates image
                //let fc = document.createElement("figcaption");

                img.src = content.data[0].images.downsized.url; //sets src value of the image
                img.alt = content.data[0].title;//sets alt text value of the image

                console.log(img.src)

                //fc.textContent = content.data[0].title;
                fig.appendChild(img); //adds image to figure

                let out = document.querySelector(".output"); //selects .out div
                out.insertAdjacentElement("afterend", fig);//afterend places image at top of last image
                
                document.querySelector("#search").value = ""; //resets search input
            })
            .catch(err => {
                console.error(err);
            });
    });
}
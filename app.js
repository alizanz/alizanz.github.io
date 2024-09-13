document.addEventListener("DOMContentLoaded", () => {
    
    const images = document.querySelectorAll("img");
    
    for(const image of images){
        if (image.id === "cud") {
            continue; // Skip changing this image
        }

        // Check if the image has the ID 'static'
        if (image.id === "static") {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data => {
                    image.src = data.message; // Change the source to a random dog image
                });
        } else {
            // For all other images (without an ID)
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data => {
                    image.src = data.message; // Change the source to a random dog image
                    image.width = 80; // Set fixed width
                    image.height = 80; // Set fixed height
                });
        }
    }
})

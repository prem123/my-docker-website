// main.js
async function fetchImageInfo() {
    try {
        const response = await fetch('gcr.io/kaggle-images/python:prerelease');
        const data = await response.json();
        const imageInfo = document.getElementById('imageInfo');
        // Process and display data on your web page
        imageInfo.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function detectSpecies() {
    const imageInput = document.getElementById('imageInput').files[0];
    const audioInput = document.getElementById('audioInput').files[0];
    const resultElement = document.getElementById('result');

    if (imageInput) {
        // Process image file
        const formData = new FormData();
        formData.append('file', imageInput);
        fetch('/detect_image', { 
            method: 'POST', 
            body: formData 
        })
        .then(response => response.json())
        .then(data => {
            resultElement.textContent = `Detected Bird Species: ${data.species}`;
        });
    } else if (audioInput) {
        // Process audio file
        const formData = new FormData();
        formData.append('file', audioInput);
        fetch('/detect_audio', { 
            method: 'POST', 
            body: formData 
        })
        .then(response => response.json())
        .then(data => {
            resultElement.textContent = `Detected Bird Species: ${data.species}`;
        });
    } else {
        resultElement.textContent = 'Please upload an image or audio file.';
    }
}

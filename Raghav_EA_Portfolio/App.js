// Say Hi in Header -> email copied to clipboard

document.getElementById('copyButton').addEventListener('click', function() {
    const email = "raghavupadhyayofficial@gmail.com";
    
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(function() {
        popup.style.display = 'none';
    }, 2500);
});


//----------------------------------------------------

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}

//----------------------------------------------------

function showImage(imageId) {
    // Hide all images first
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        image.style.display = 'none';
    });

    // Show the selected image
    const selectedImage = document.getElementById(imageId);
    selectedImage.style.display = 'block';
    
    // Show the image container if it's not already visible
    document.querySelector('.image-container').style.display = 'block';
}

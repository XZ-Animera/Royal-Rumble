// JavaScript for Ad Space Rotation
const adSpaces = [
    "Ad Space 1: Check out our latest offers!",
    "Ad Space 2: Get your Royal Rumble merch today!",
    "Ad Space 3: Special promotion for WWE fans!",
    "Ad Space 4: Watch the highlights of the last Royal Rumble!"
  ];
  
  let adIndex = 0;
  const adSpaceElements = document.querySelectorAll('.ad-space p');
  
  function rotateAds() {
    adSpaceElements.forEach(adSpace => {
      adSpace.textContent = adSpaces[adIndex];
    });
    adIndex = (adIndex + 1) % adSpaces.length;
  }
  
  // Change ads every 5 seconds
  setInterval(rotateAds, 5000);
  
  // Initial Ad Load
  rotateAds();
  
  // Custom Video Controls (Play / Pause)
  const video = document.getElementById('rumble-video');
  
  video.addEventListener('play', () => {
    console.log('Video is playing!');
  });
  
  video.addEventListener('pause', () => {
    console.log('Video is paused!');
  });
  
  // Additional Feature: Smooth Scroll to Top
  const scrollButton = document.createElement('button');
  scrollButton.textContent = "Back to Top";
  scrollButton.id = "scroll-top-btn";
  scrollButton.style.position = 'fixed';
  scrollButton.style.bottom = '20px';
  scrollButton.style.right = '20px';
  scrollButton.style.padding = '10px 20px';
  scrollButton.style.fontSize = '1rem';
  scrollButton.style.backgroundColor = '#ff6200';
  scrollButton.style.color = 'white';
  scrollButton.style.border = 'none';
  scrollButton.style.borderRadius = '5px';
  scrollButton.style.cursor = 'pointer';
  scrollButton.style.display = 'none';
  
  document.body.appendChild(scrollButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  document.getElementById('download-btn').addEventListener('click', function() {
    // Trigger the download
    window.location.href = 'your-download-link.mp4'; // Replace with your download file URL
  });
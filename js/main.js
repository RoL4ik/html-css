const button = document.getElementById("downloadBtn");
const urlInput = document.getElementById("user_name");
const fileTypeSelect = document.getElementById("selectbtn");
const savedVideosDiv = document.getElementById("saved_videos");

button.addEventListener("click", () => {
    const url = urlInput.value.trim();
    if (!url) {
        alert("Please enter a valid YouTube link.");
        return;
    }

    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    
    if (!videoIdMatch) {
        alert("Invalid YouTube URL. Please make sure it's a correct link.");
        return;
    }

    const videoId = videoIdMatch[1];
    const fileType = fileTypeSelect.value !== "file type" ? fileTypeSelect.value : "Mp4";
    
    // Remove "No videos saved yet" message
    if (savedVideosDiv.querySelector("i")) {
        savedVideosDiv.innerHTML = "";
    }

    // Create video item
    const videoItem = document.createElement("div");
    videoItem.style.display = "flex";
    videoItem.style.alignItems = "center";
    videoItem.style.marginBottom = "15px";
    videoItem.style.padding = "10px";
    videoItem.style.border = "1px solid #ccc";
    videoItem.style.borderRadius = "8px";

    const thumbnail = document.createElement("img");
    thumbnail.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    thumbnail.style.marginRight = "15px";
    thumbnail.style.width = "120px";
    thumbnail.style.borderRadius = "4px";

    const infoDiv = document.createElement("div");
    
    const title = document.createElement("p");
    title.innerHTML = `<strong>YouTube Video (${videoId})</strong><br>Format: ${fileType}`;
    title.style.margin = "0 0 10px 0";

    const downloadLink = document.createElement("a");
    // Just a simulated download link since we don't have a real backend
    downloadLink.href = "#";
    downloadLink.textContent = "Download File";
    downloadLink.style.display = "inline-block";
    downloadLink.style.padding = "5px 10px";
    downloadLink.style.backgroundColor = "#4CAF50";
    downloadLink.style.color = "white";
    downloadLink.style.textDecoration = "none";
    downloadLink.style.borderRadius = "4px";
    downloadLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Downloading ${fileType} for video ${videoId}... (Simulated)`);
    });

    infoDiv.appendChild(title);
    infoDiv.appendChild(downloadLink);

    videoItem.appendChild(thumbnail);
    videoItem.appendChild(infoDiv);

    savedVideosDiv.appendChild(videoItem);
    
    // Clear input
    urlInput.value = "";
});
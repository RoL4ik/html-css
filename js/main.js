const button = document.getElementById("downloadBtn");

button.addEventListener("click", () => {
    console.warn("user tried to push the download button");
    if(confirm("The button isn't working, you want to read why?")) {
        window.location.href = 'beta.html'
    }
    
    
});

const file_type = document.getElementById("selectbtn")

file_type.addEventListener("click", () => {
    alert("File choosing is not availiable!");
    console.warn("File type isn't working")
})
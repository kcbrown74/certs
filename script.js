// Open the image in modal
function openImage(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImg.src = src;
}

// Close the modal
function closeImage() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

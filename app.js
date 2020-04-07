console.log("Hello from Back 2 School!");
let viz;
const vizContainer = document.getElementById("vizContainer");
const url =
  "https://public.tableau.com/views/TheRacetoRivalTrump/TheracetorivalTrump";
const options = {
  device: "desktop",
};

const exportToPDF = document.getElementById("exportToPDF");
const exportToImage = document.getElementById("exportToImage");

function initViz() {
  console.log("Hello data school!");
  viz = new tableau.Viz(vizContainer, url, options);
}
// this is where people click on the PDF button
exportToPDF.addEventListener("click", function () {
  console.log("Hello from my export to pdf button!");
  viz.showExportPDFDialog();
});
// this is where people click on the image button
exportToImage.addEventListener("click", function () {
  console.log("Hello from my export to image button!");
  viz.showExportImageDialog();
});

document.addEventListener("DOMContentLoaded", initViz());

function calculateCost() {
    // get user inputs
    var landscapeMaintenance = document.getElementById("landscapeMaintenance").value;
    var treatmentFertilization = document.getElementById("treatmentFertilization").value;
    var lawnThatching = document.getElementById("lawnThatching").value;
    var grassCutting = document.getElementById("grassCutting").value;
    var mulching = document.getElementById("mulching").value;
    var seeding = document.getElementById("seeding").value;
    var aeration = document.getElementById("aeration").value;
    var treeHealthInspections = document.getElementById("treeHealthInspections").value;
    var treeTrimming = document.getElementById("treeTrimming").value;
    var shrubPruning = document.getElementById("shrubPruning").value;
    var weedManagement = document.getElementById("weedManagement").value;
    var treeRemoval = document.getElementById("treeRemoval").value;
    
    // calculate cost
    var cost = 0;
    if (landscapeMaintenance) {
        cost += 10*landscapeMaintenance;
    }
    if (treatmentFertilization) {
        cost += 0.003 * treatmentFertilization;
    }
    if (lawnThatching) {
        cost += 0.004* lawnThatching;
    }
    if (grassCutting) {
        cost += 0.004 * grassCutting;
    }
    if (mulching) {
        cost += 0.001  * mulching;
    }
    if (seeding) {
        cost += 0.007 * seeding;
    }
    if (aeration) {
        cost += 0.003  * aeration;
    }
    if (treeHealthInspections) {
        cost += 5*treeHealthInspections;
    }
    if (treeTrimming) {
        cost += 40 * treeTrimming;
    }
    if (shrubPruning) {
        cost += 10 * shrubPruning;
    }
    if (weedManagement) {
        cost += 10 * weedManagement; 
    }
    if (treeRemoval) {
        cost += 80 * treeRemoval;
    }
    
    document.getElementById("cost").innerHTML = "$" + cost.toFixed(2) + "  Approximately";
}
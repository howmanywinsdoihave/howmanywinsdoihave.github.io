const http1 = new XMLHttpRequest();
const url = 'https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/pc/sailin.';


http1.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var stats = JSON.parse(this.responseText);
    console.log(stats)
    var noOfWins = JSON.stringify(stats.lifeTimeStats[8])
    var n = noOfWins.length
    noOfWins = noOfWins.slice(23,n-2)
    document.getElementById("statsPage").innerHTML = noOfWins;
  }
};
http1.open("GET", url, true);
http1.setRequestHeader("TRN-Api-Key", "b1e03cea-8652-40f1-8300-1239bbb0a908", true);
http1.setRequestHeader("Accept", "application/json", true);

http1.send();
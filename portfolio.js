document.getElementById("yourname").innerHTML = localStorage.getItem("name");
document.getElementById("headline").innerText =
  localStorage.getItem("headline");
document.getElementById("aboutme").innerText = localStorage.getItem("bio");
document.getElementById("skilln1").innerText = localStorage.getItem("skill1");
document.getElementById("abouts1").innerText =
  localStorage.getItem("aboutskill1");
document.getElementById("skilln2").innerText = localStorage.getItem("skill2");
document.getElementById("abouts2").innerText =
  localStorage.getItem("aboutskill2");
document.getElementById("namew1").innerText = localStorage.getItem("work1");
document.getElementById("aboutw1").innerText = localStorage.getItem("aboutw1");
document.getElementById("namew2").innerText = localStorage.getItem("work2");
document.getElementById("aboutw2").innerText = localStorage.getItem("aboutw2");
document.getElementById("foot").innerText = localStorage.getItem("footern");

let profileImg = localStorage.getItem("profileImage");
if (profileImg) {
  document.getElementById("selfimgs").src = profileImg;
} else {
  document.getElementById("selfimgs").style.display = "none";
}

let imgWork1 = localStorage.getItem("imgwork1");
if (imgWork1) document.getElementById("imgw1").src = imgWork1;

let imgWork2 = localStorage.getItem("imgwork2");
if (imgWork2) document.getElementById("imgw2").src = imgWork2;

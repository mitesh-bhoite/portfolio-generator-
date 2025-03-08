function saveData() {
  let name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  let headline = document.getElementById("headline").value;
  localStorage.setItem("headline", headline);
  let bio = document.getElementById("bio").value;
  localStorage.setItem("bio", bio);
  let skill1 = document.getElementById("skill1").value;
  localStorage.setItem("skill1", skill1);
  let aboutskill1 = document.getElementById("aboutskill1").value;
  localStorage.setItem("aboutskill1", aboutskill1);
  let skill2 = document.getElementById("skill2").value;
  localStorage.setItem("skill2", skill2);
  let aboutskill2 = document.getElementById("aboutskill2").value;
  localStorage.setItem("aboutskill2", aboutskill2);
  let work1 = document.getElementById("work1").value;
  localStorage.setItem("work1", work1);
  let aboutw1 = document.getElementById("aboutw1").value;
  localStorage.setItem("aboutw1", aboutw1);
  let work2 = document.getElementById("work2").value;
  localStorage.setItem("work2", work2);
  let aboutw2 = document.getElementById("aboutw2").value;
  localStorage.setItem("aboutw2", aboutw2);
  let footern = document.getElementById("footern").value;
  localStorage.setItem("footern", footern);
    //show as image
  let imageInput = document.getElementById("imageUpload").files[0];
  if (imageInput) {
    let reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("profileImage", e.target.result);
      window.location.href = "portfolio.html"; //Redirect after storing image
    };
    reader.readAsDataURL(imageInput);
  } else {
    window.location.href = "portfolio.html"; // Redirect if no image
  }

  let imgwork1 = document.getElementById("imgwork1").files[0];
  if (imgwork1) {
    let reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("imgwork1", e.target.result);
      window.location.href = "portfolio.html"; // Redirect after storing image
    };
    reader.readAsDataURL(imgwork1);
  } else {
    window.location.href = "portfolio.html"; // Redirect if no image
  }

  let imgwork2 = document.getElementById("imgwork2").files[0];
  if (imgwork2) {
    let reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("imgwork2", e.target.result);
      window.location.href = "portfolio.html"; //Redirect after storing image
    };
    reader.readAsDataURL(imgwork2);
  } else {
    window.location.href = "portfolio.html"; // Redirect if no image
  }
}

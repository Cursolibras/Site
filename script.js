function mostrarVideo(video) {
      var videoFrame='';
      videoFrame = document.getElementById('videoFrame');
      var videoUrl = '';
      if (video === 'video1') {
        videoUrl = 'https://drive.google.com/file/d/10HgDajXrAqwapgqu87PwN1jf76sgKhI4/preview';
     alert("Aula1...");
      } 

      videoFrame.src = videoUrl;

    var div ='';
    var navy ='';
    var nav2='';
    div = document.getElementById("exibirVideo");
    div.style.display = "block";
    navy = document.getElementById("menu");
    nav2= document.getElementById("nav");
    nav2.classList.toggle('active');
    
}
function mostrarVideo2(video2) {
      var videoFrame2='';
      videoFrame2 = document.getElementById('videoFrame');
      var videoUrl2 = '';
      if (video2 === 'video2') {
        videoUrl2 = 'https://drive.google.com/file/d/11aT4z8U-zJrMX_fTGjgK1UgwC5UxQxQW/preview';
                    
        alert("Aula2...");
      } 
      videoFrame.src = videoUrl2;
    
    
   var div ='';
    var navy ='';
    var nav2='';
    div = document.getElementById("exibirVideo");
    div.style.display = "block";
    navy = document.getElementById("menu");
    nav2= document.getElementById("nav");
    nav2.classList.toggle('active');
    
}

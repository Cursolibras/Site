function mostrarVideo(video) {
      var videoFrame = document.getElementById('videoFrame');
      var videoUrl = '';
      if (video === 'video1') {
        videoUrl = 'https://drive.google.com/file/d/10HgDajXrAqwapgqu87PwN1jf76sgKhI4/preview';
      } else if (video === 'video2') {
        videoUrl = 'http://drive.google.com/file/d/11aT4z8U-zJrMX_fTGjgK1UgwC5UxQxQW/preview';
      } else if (video === 'video3') {
        videoUrl = 'https://www.youtube.com/embed/video3';
      }

      videoFrame.src = videoUrl;
    
    
    
    var div = document.getElementById("exibirVideo");
    div.style.display = "block";
    var navy = document.getElementById("menu");
    
    var nav2= document.getElementById("nav");
    nav2.classList.toggle('active');
    


}


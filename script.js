function mostrarVideo(video) {
      var videoFrame = document.getElementById('videoFrame');
      var videoUrl = '';

      if (video === 'video1') {
        videoUrl = 'https://drive.google.com/file/d/1--vCMFYCwv4sIWy6VQwpyk65pvD6iNEG/preview';
      } else if (video === 'video2') {
        videoUrl = 'https://www.youtube.com/embed/tp-IMViuTzo';
      } else if (video === 'video3') {
        videoUrl = 'https://www.youtube.com/embed/video3';
      }

      videoFrame.src = videoUrl;
    }


const player = document.querySelector('.player'); // 取得播放器容器

// 頁面加載，默認第一個影片
window.onload = function() {
  changeTKU60(1); // 默認顯示第一個影片
};

function changeTKU60(video) {
  // 清空當前影片
  player.innerHTML = '';

  // 根據點擊加載不同影片
  switch (video) {
    case 1:
      player.innerHTML = `
        <div class="video-responsive">
          <iframe 
            src="https://www.youtube.com/embed/RechrtUxfQc?si=ksyjr2BLezFalI9g" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      `;
      break;
    case 2:
      player.innerHTML = `
        <div class="video-responsive">
          <iframe 
            src="https://www.youtube.com/embed/MRWX49Furew?si=DDAP-gCI-zZF9Y_g" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      `;
      break;
    case 3:
      player.innerHTML = `
        <div class="video-responsive">
          <iframe 
            src="https://www.youtube.com/embed/METhdbL_iMw?si=niWBSLmL4yZTBZgM" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      `;
      break;
    case 4:
      player.innerHTML = `
        <div class="video-responsive">
          <iframe 
            src="https://www.youtube.com/embed/ZyDbq-lEKTo?si=ygKZL1qoCsHYxFWP" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      `;
      break;
    case 5:
      player.innerHTML = `
        <div class="video-responsive">
          <iframe 
            src="https://www.youtube.com/embed/NlsrJbVvjaA?si=pFgJbCU7LLwsinoG" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      `;
      break;
    default:
      console.error('Unknown video selection');
      break;
  }
}

function playVideo(element) {
    var img = element.querySelector('.imgEvent');
    var video = element.querySelector('.videoEvent');
    var text = element.querySelector('.textEvent')

    img.style.display = 'none';
    video.style.display = 'block';
    text.style.display = 'none';
    video.play();
}

function pauseVideo(element) {
    var img = element.querySelector('.imgEvent');
    var video = element.querySelector('.videoEvent');
    var text = element.querySelector('.textEvent')

    img.style.display = 'block';
    video.style.display = 'none';
    text.style.display = 'block';
    video.pause();
}
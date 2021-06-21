function injectYoutubeVideo(e) {

    // Get data
    let video_id = e.dataset.video;
    let title = e.dataset.title;

    e.innerHTML = `<div style="width: 720px; height: 480px; margin:auto">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video_id}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="youtube-print" style="display:none;"><h6>YouTube Video:<br>${title}</h6></div>
    </div>`;

}


// Load all
document.querySelectorAll(".youtube-inject").forEach((e) => {
    injectYoutubeVideo(e);
});e
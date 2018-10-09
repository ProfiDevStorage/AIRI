$(function () {    
var commander = document.getElementById('commander'),
    google = document.getElementById('googleSearch'),
    youtube = document.getElementById('yt'),
    spotify = document.getElementById('spf'),
    x = 0, y = 0, gx = 0, gy = 0, yx = 0, yy = 0, sx = 0, sy = 0;
        interact(commander)
          .draggable({
            inertia: true,
            restrict: {
              restriction: 'parent',
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
              endOnly: true
            }
          })
          .on('dragmove', function (event) {
            x += event.dx;
            y += event.dy;

            event.target.style.webkitTransform =
            event.target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';
          });
        interact(google)
          .draggable({
            inertia: true,
            restrict: {
              restriction: 'parent',
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
              endOnly: true
            }
          })
          .on('dragmove', function (event) {
            gx += event.dx;
            gy += event.dy;

            event.target.style.webkitTransform =
            event.target.style.transform =
                'translate(' + gx + 'px, ' + gy + 'px)';
          });
        interact(youtube)
          .draggable({
            inertia: true,
            restrict: {
              restriction: 'parent',
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
              endOnly: true
            }
          })
          .on('dragmove', function (event) {
            yx += event.dx;
            yy += event.dy;

            event.target.style.webkitTransform =
            event.target.style.transform =
                'translate(' + yx + 'px, ' + yy + 'px)';
          });
        interact(spotify)
          .draggable({
            inertia: true,
            restrict: {
              restriction: 'parent',
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
              endOnly: true
            }
          })
          .on('dragmove', function (event) {
            sx += event.dx;
            sy += event.dy;

            event.target.style.webkitTransform =
            event.target.style.transform =
                'translate(' + sx + 'px, ' + sy + 'px)';
          });
});

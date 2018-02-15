// localStorage point managment
storage = {
  getData: function() {
    var points;
    // var points = localStorage.getItem('points');
    if (!points) {
      return [];
    } else {
      return JSON.parse(points);
    }
  },
  saveData: function(points) {
    localStorage.setItem('points', JSON.stringify(points));
  },
  add: function(x,  y) {
    var points = this.getData();
    points.push([x, y]);
    this.saveData(points);
  }
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// paper.js
$(function() {
  // Get a reference to the canvas object
  var canvas = document.getElementById('background');
  // Create an empty project and a view for the canvas:
  paper.setup(canvas);
  // Create a Paper.js Path to draw a line into it:
  var path = new paper.Path();

  // Stroke details
  // path.strokeColor = 'rgb(220,220,220)';
  // path.strokeColor = 'rgb(234,178,156)'; //main color
  path.strokeColor = '#000'; //black
  path.opacity = 0.3;
  path.strokeWidth = 20;

  // path.fullySelected = true;
  // path.dashArray = [2, 4];

  // Initial drawing
  var points = storage.getData();
  var endPoint;
  $(points).each(function(i) {
    var x = points[i][0], y = points[i][1];
    path.add(new paper.Point(x, y));
    if (i == points.length - 1) {
      endPoint = new paper.Path.Circle({ center: new paper.Point(x, y), radius: 1.3, fillColor: path.strokeColor });
    }
  });
  path.smooth();
  paper.view.draw();
  // Click tracking
  $(window).on('mousedown touch', function(e) {
    path.fullySelected = false;
    var y = e.pageY - $(window).scrollTop();
    storage.add(e.pageX, y);
    if(path.segments.length>15){
      path.removeSegment(0);
      // storage.removeItem(0);
    }
    var r = getRandomInt(0,255);
    var g = getRandomInt(0,255);
    var b = getRandomInt(0,255);
    //changes color every time clicked
    // path.strokeColor = 'rgb('+r+','+g+','+b+')';
    path.add(new paper.Point(e.pageX, y));
    // Remove old endpoint
    if (endPoint) endPoint.remove();
    endPoint = new paper.Path.Circle({ center: new paper.Point(e.pageX, e.pageY), radius: 1.3, fillColor: path.strokeColor });
    path.smooth();
    paper.view.draw();
  });
  //
  $('body').on('keydown', function(e) {
    if ((e.keyCode == 97 || e.keyCode == 65) && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (!path.fullySelected) path.fullySelected = true;
      else path.fullySelected = false;
      paper.view.draw();
    } else if ((e.keyCode == 8 || e.keyCode == 46) && path.fullySelected) {
      e.preventDefault();
      path.segments = [];
      endPoint.remove();
      paper.view.draw();
      endPoint = false;
      localStorage.setItem('points', JSON.stringify([]));
      return false;
    }
  });
  // Resize canvas
  $(window).on('resize', function(e) {
    // Resize the canvas to the body's height
    paper.view.viewSize = new paper.Size(window.innerWidth, $(document).height());
    paper.view.draw();
  }).resize();
});

$(window).load(function() {
  $(window).resize();
});

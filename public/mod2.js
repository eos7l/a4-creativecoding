//Store width, height and margin in variables
var w = 600;
var h = 500;
var margin = {top: 40, right: 10, bottom: 20, left: 50};

// Scale the width and height
var xScale = d3.scale.linear()
    .range([0,w - margin.right - margin.left]);

var yScale = d3.scale.ordinal()
    .rangeRoundBands([margin.top, h - margin.bottom],0.2);

export {w,h,margin,xScale,yScale};
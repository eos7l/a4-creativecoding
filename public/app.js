import {W,H,mainMargin,subMargin} from "./mod2.js";

//Widths, Heights
var width = W - mainMargin.left - mainMargin.right;
var mainHeight = H - mainMargin.top - mainMargin.bottom;
var subHeight = H - subMargin.top - subMargin.bottom;
//year Parser
var parseYear = d3.time.format("%Y").parse;

//Main Chart Scales
var mainXScale = d3.time.scale().range([0, width]);
var mainYScale = d3.scale.linear().range([mainHeight, 0]);

//Sub Chart scales
var subXScale = d3.time.scale().range([0, width]);
var subYScale = d3.scale.linear().range([subHeight, 0]);

//Main Chart Axes
var mainXAxis = d3.svg.axis().scale(mainXScale).orient('bottom');
var mainYAxis = d3.svg.axis().scale(mainYScale).orient('left');

//Sub Chart Axes
var subXAxis = d3.svg.axis().scale(subXScale).orient('bottom');
var subYAxis = d3.svg.axis().scale(subYScale).orient('left').ticks(2);

//Area
var mainArea = d3.svg.area()
    .interpolate('monotone')
    .x(function (d) {
        return mainXScale(d.year);
    })
    .y0(mainHeight)
    .y1(function (d) {
        return mainYScale(d.comedy);
    });

var subArea = d3.svg.area()
    .interpolate('monotone')
    .x(function (d) {
        return subXScale(d.year);
    })
    .y0(subHeight)
    .y1(function (d) {
        return subYScale(d.comedy);
    });

var svg = d3.select('#area3').append('svg')
    .attr('width', W)
    .attr('height', H);

svg.append('defs')
    .append('clipPath')
    .attr('id', 'clip')
    .append('rect')
    .attr('width', width)
    .attr('height', mainHeight);

var main = svg.append('g')
    .classed('main', true)
    .attr("transform", "translate(" + mainMargin.left + "," + mainMargin.top + ")");

var sub = svg.append('g')
    .classed('sub', true)
    .attr("transform", "translate(" + subMargin.left + "," + subMargin.top + ")");

var brush = d3.svg.brush()
    .x(subXScale)
    .on("brush", brushed);

d3.csv('div9.csv', function (d) {
    d.year = parseYear(d.year);
    d.comedy = +d.comedy;
    return d;
}, function (err, data) {
    mainXScale.domain(d3.extent(data, function (d) {
        return d.year;
    }));
    mainYScale.domain([0, d3.max(data, function (d) {
        return d.comedy;
    })]);

    subXScale.domain(mainXScale.domain());
    subYScale.domain(mainYScale.domain());

    main.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0, " + mainHeight + ")")
        .call(mainXAxis);
    main.append("g")
        .classed("y axis", true)
        .attr("transform", "translate(0, 0)")
        .call(mainYAxis);

    main.append('path')
        .datum(data)
        .classed('area', true)
        .attr('d', mainArea);

    sub.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0, " + subHeight + ")")
        .call(subXAxis);
    sub.append("g")
        .classed("y axis", true)
        .attr("transform", "translate(0, 0)")
        .call(subYAxis);

    sub.append('path')
        .datum(data)
        .classed('area', true)
        .attr('d', subArea);

    sub.append("g")
        .classed("x brush", true)
        .call(brush)
        .selectAll("rect")
        .attr("y", -6)
        .attr("height", subHeight + 7);

    d3.select('#reset').on('click', function () {
        mainXScale.domain(subXScale.domain());
        main.select('.area').transition().attr('d', mainArea);
        main.select('.x.axis').transition().call(mainXAxis);
        sub.select('rect.extent').transition().attr('width', 0);
    })
});

function brushed() {
    mainXScale.domain(brush.empty() ? subXScale.domain() : brush.extent());
    main.select('.area').attr('d', mainArea);
    main.select('.x.axis').call(mainXAxis);
}
import * as d3 from 'd3'

// Set up margin/height/width
var margin = { top: 30, left: 30, right: 30, bottom: 30 }
var height = 700 - margin.top - margin.bottom
var width = 700 - margin.top - margin.bottom

// I'll give you the container
var container = d3
	.select('#chart-2')

// Create your scales
var xPositionScale = d3
	.scaleLinear()
	.domain([12, 55])
	.range([0, width])

var yPositionScale = d3
	.scaleLinear()
	.domain([0, 0.3])
	.range([height, 0])

// Create a d3.line function that uses your scales
svg.selectAll

// Read in your data
d3.csv(require('./fertility.csv'))
	.then(ready)
	.catch(err => {
		console.log(err)
	})

// Build your ready function that draws lines, axes, etc
function ready(datapoints) {

console.log(datapoints)

// Group some data by country
var nested = d3
	.nest()
	.key(function(d) {
		return d.Year
	})
	.entries(datapoints)

// Add an SVG for each year
container.selectAll('.fertility-graph')
	.data(nested)
	.enter()
	.append('svg')
	.attr('class', 'fertility-graph')
	.attr('height', height + margin.top + margin.bottom)
	.attr('width', width + margin.left + margin.right)
	.append(g)
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.each(function(d) {
		var svg = d3.select(this)


      var xAxis = d3.axisBottom(xPositionScale)
      svg
        .append('g')
        .attr('class', 'axis x-axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)

      var yAxis = d3.axisLeft(yPositionScale)
      svg
        .append('g')
        .attr('class', 'axis y-axis')
        .call(yAxis)
    })
}
const colors = ['yellow green', 'green', 'blue green', 'blue', 'blue purple', 'purple', 'red purple', 'red', 'orange red', 'orange', 'yellow orange', 'yellow'];

const colorMap = d3.scale.ordinal()
    .domain(['yellow green', 'green', 'blue green', 'blue', 'blue purple', 'purple', 'red purple', 'red', 'orange red', 'orange', 'yellow orange', 'yellow'])
    .range(['rgb(180,255,27)', 'rgb(34,255,3)', 'rgb(47,104,180)', 'rgb(0,0,255)', 'rgb(125,34,249)', 'rgb(142,0,239)', 'rgb(226,41,103)', 'rgb(251,0,5)', 'rgb(253,127,39)', 'rgb(253,149,10)', 'rgb(254,232,30)', 'rgb(255,255,11)']);

d3.select('.selection-ui-container').selectAll('.swatch')
    .data(colors)
  .enter().append('div')
    .attr('class', 'swatch')
    .style('background-color', d => colorMap(d))
  .append('p')
    .attr('class', 'order-marker')
    .text((d, i) => i);

const swatches = d3.selectAll('.swatch');

swatches.on('click', function(d) {
      const selectedItem = d;
      const selectedElement = d3.select(this);
      if (selectedElement.classed('selected')) {
        swatches.style('opacity', 1);
        selectedElement.classed('selected', false);
      } else {
        swatches.classed('selected', false);
        selectedElement.classed('selected', true);
        swatches.filter(s => s !== selectedItem).style('opacity', 0.3);
        swatches.filter(s => s === selectedItem).style('opacity', 1);
      }
    });

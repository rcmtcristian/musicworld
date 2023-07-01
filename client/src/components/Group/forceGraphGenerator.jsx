/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as d3 from 'd3'

import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from './forceGraph.module.css'
// import ArtistIcon from '@/Images/artist-icon-search.svg'
import { createContextMenu } from './utils'

// @ts-ignore
export function runForceGraph(container, linksData, nodesData, nodeHoverTooltip) {
  // @ts-ignore
  const links = linksData.map((d) => Object.assign({}, d))
  // @ts-ignore
  const nodes = nodesData.map((d) => Object.assign({}, d))

  const menuItems = [
    {
      title: 'First action',
      // @ts-ignore
      action: (d) => {
        // TODO: add any action you want to perform
        // eslint-disable-next-line no-console
        console.log(d)
      }
    },
    {
      title: 'Second action',
      // @ts-ignore
      action: (d) => {
        // TODO: add any action you want to perform
        // eslint-disable-next-line no-console
        console.log(d)
      }
    }
  ]
  const containerRect = container.getBoundingClientRect()
  const { height } = containerRect
  const { width } = containerRect

  const color = () => {
    return '#fffaee'
  }

  // @ts-ignore
  const icon = (d) => {
    return d.name === d.name[0] ? d.name[0] : d.name
  }

  // @ts-ignore
  const getClass = (d) => {
    return d.name === d.name[0] ? styles.male : styles.female
  }

  // @ts-ignore
  const drag = (simulation) => {
    // @ts-ignore
    const dragstarted = (event, d) => {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    // @ts-ignore
    const dragged = (event, d) => {
      d.fx = event.x
      d.fy = event.y
    }

    // @ts-ignore
    const dragended = (event, d) => {
      if (!event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }

    return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
  }

  // Add the tooltip element to the graph
  const tooltip = document.querySelector('#graph-tooltip')

  if (!tooltip) {
    const tooltipDiv = document.createElement('div')

    tooltipDiv.classList.add(styles.tooltip)
    tooltipDiv.style.opacity = '0'
    tooltipDiv.id = 'graph-tooltip'
    document.body.appendChild(tooltipDiv)
  }
  const div = d3.select('#graph-tooltip')

  // @ts-ignore
  const addTooltip = (hoverTooltip, d, x, y) => {
    div.transition().duration(200).style('opacity', 0.9)
    div
      .html(hoverTooltip(d))
      .style('left', `${x}px`)
      .style('top', `${y - 28}px`)
  }

  const removeTooltip = () => {
    div.transition().duration(200).style('opacity', 0)
  }

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      // @ts-ignore
      d3
        .forceLink(links)
        // @ts-ignore
        .id((d) => d.id)
        .distance(100)
    )
    .force('charge', d3.forceManyBody().strength(-200))
    .force('x', d3.forceX())
    .force('y', d3.forceY())

  const svg = d3
    .select(container)
    .append('svg')
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .call(
      // @ts-ignore
      d3.zoom().on('zoom', function (event) {
        svg.attr('transform', event.transform)
      })
    )
  const link = svg
    .append('g')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke-width', (d) => Math.sqrt(d.value))

  const node = svg
    .append('g')
    .attr('stroke', '#fffaee')
    .attr('stroke-width', 2)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', 10)
    .attr('fill', color)
    // @ts-ignore
    .call(drag(simulation))

  const label = svg
    .append('g')
    .attr('class', 'labels')
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .on('contextmenu', (d) => {
      createContextMenu(d, menuItems, width, height, '#graphSvg')
    })
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')
    .attr('class', (d) => `fa ${getClass(d)}`)
    .text((d) => {
      return icon(d)
    })
    // @ts-ignore
    .call(drag(simulation))

  label
    .on('mouseover', (d) => {
      // @ts-ignore
      addTooltip(nodeHoverTooltip, d, event.pageX, event.pageY)
    })
    .on('mouseout', () => {
      removeTooltip()
    })
  simulation.on('tick', () => {
    //update link positions
    link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)

    // update node positions
    node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)

    // update label positions
    label
      .attr('x', (d) => {
        return d.x
      })
      .attr('y', (d) => {
        return d.y - 15
      })
  })

  return {
    destroy: () => {
      simulation.stop()
    },
    nodes: () => {
      return svg.node()
    }
  }
}

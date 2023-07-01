/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as d3 from 'd3'

import styles from './forceGraph.module.css'

// @ts-ignore
export const menuFactory = (x, y, menuItems, data, svgId) => {
  d3.select(`.${styles.contextMenu}`).remove()

  // Draw the menu
  d3.select(svgId)
    .append('g')
    .attr('class', styles.contextMenu)
    .selectAll('tmp')
    .data(menuItems)
    .enter()
    .append('g')
    .attr('class', styles.menuEntry)
    // @ts-ignore
    .style({ cursor: 'pointer' })

  // Draw menu entries
  d3.selectAll(`.${styles.menuEntry}`)
    .append('rect')
    .attr('x', x)
    // @ts-ignore
    .attr('y', (d, i) => {
      return y + i * 30
    })
    .attr('rx', 2)
    .attr('width', 150)
    .attr('height', 30)
    .on('click', (d) => {
      d.action(data)
    })

  d3.selectAll(`.${styles.menuEntry}`)
    .append('text')
    .text((d) => {
      return d.title
    })
    .attr('x', x)
    // @ts-ignore
    .attr('y', (d, i) => {
      return y + i * 30
    })
    .attr('dy', 20)
    .attr('dx', 45)
    .on('click', (d) => {
      d.action(data)
    })

  // Other interactions
  d3.select('body').on('click', () => {
    d3.select(`.${styles.contextMenu}`).remove()
  })
}

// @ts-ignore
export const createContextMenu = (d, menuItems, width, height, svgId) => {
  // @ts-ignore
  // eslint-disable-next-line no-undef
  menuFactory(event.pageX - width / 2, event.pageY - height / 1.5, menuItems, d, svgId)
  // @ts-ignore
  // eslint-disable-next-line no-undef
  event.preventDefault()
}

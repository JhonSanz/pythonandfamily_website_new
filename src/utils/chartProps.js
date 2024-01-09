const layout_subchart = {
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0,
    pad: 0
  },
  title: {
    pad: { t: 10, l: 10 },
    x: 0, y: 1
  },
  autosize: true,
}

const config_subchart = {
  autosizable: true, responsive: true,
  displaylogo: false,
  modeBarButtonsToRemove: [
    // "zoom2d", "pan2d",
    "select2d", "lasso2d", "zoomIn2d",
    "zoomOut2d", "autoScale2d", "resetScale2d",
    "hoverClosestGl2d", "hoverClosestPie", "toggleHover", "resetViews",
    "toImage", "sendDataToCloud", "toggleSpikelines", "resetViewMapbox",
    "zoom3d", "pan3d", "orbitRotation", "tableRotation", "handleDrag3d",
    "resetCameraDefault3d", "resetCameraLastSave3d", "hoverClosest3d"
  ]
}

export { layout_subchart, config_subchart }
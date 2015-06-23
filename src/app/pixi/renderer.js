import R from "ramda";

let pixiRenderer;
const stage = new PIXI.Container();

const renderer = {

  init: ({ scale, width, height }) => {
    pixiRenderer = PIXI.autoDetectRenderer(width, height, {
      antialias: true,
      backgroundColor: 0x373837,
      resolution: scale
    });

    const appNode = document.getElementById("app");
    document.body.insertBefore(pixiRenderer.view, appNode);
  },

  render: (tickOffset, { triangles }) => {
    const renderTriangle = triangle => triangle.render(tickOffset);
    const activeTriangles = R.filter(R.propEq("active", true));
    R.forEach(renderTriangle, activeTriangles(triangles));
    pixiRenderer.render(stage);
  },

  addChild: ({ ref: child }) => stage.addChild(child),
  removeChild: ({ ref: child }) => stage.removeChild(child)

};

export default renderer;

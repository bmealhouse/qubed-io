import galaxy from "../../app/pixi/galaxy";

describe("galaxySpec.js", () => {
  let sandbox;

  beforeEach(() => { sandbox = sinon.sandbox.create(); });
  afterEach(() => sandbox.restore());

  it("should init galaxy renderer", () => {
    // arrange
    var stub = sandbox.stub(galaxy, "init");

    // act
    galaxy.init();

    // assert
    stub.should.have.been.called;
  });

  it("should draw a particle", () => {
    // arrange
    // act
    // assert
  });

});

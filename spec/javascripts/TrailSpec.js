describe("Trail", function() {
  var trail

  beforeEach(function() {
    trail = new TrailModel({coords: [[1 2], [3,4]});
  });

  it("should be able to identitfy its startMarker", function() {
    expect(trail.startMarker).toEqual([1,2]);
  });
});

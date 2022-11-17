class DOMMatrixMock {
  private array = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

  translateSelf(x = 0, y = 0, z = 0) {
    this.array[12] += x;
    this.array[13] += y;
    this.array[14] += z;

    return this;
  }

  transformPoint(point: DOMPointInit) {
    const defaultPoint = {
      x: 0,
      y: 0,
      z: 0,
      w: 1,
    };
    const finalPoint = {
      ...defaultPoint,
      ...point,
    };
    const { x, y, z, w } = finalPoint;

    const result = {
      x:
        this.array[0] * x +
        this.array[4] * y +
        this.array[8] * z +
        this.array[12] * w,
      y:
        this.array[1] * x +
        this.array[5] * y +
        this.array[9] * z +
        this.array[13] * w,
      z:
        this.array[2] * x +
        this.array[6] * y +
        this.array[10] * z +
        this.array[14] * w,
      w:
        this.array[3] * x +
        this.array[7] * y +
        this.array[11] * z +
        this.array[15] * w,
    };
    // in the real implementation they are also inherited, but whatever
    Object.defineProperties(result, {
      x: { enumerable: false },
      y: { enumerable: false },
      z: { enumerable: false },
      w: { enumerable: false },
    });

    return result;
  }
}

export default DOMMatrixMock;

options: Options = {
  wallThickness: 4,
  wallShrouding: 0,
  wallXYOffset: 5,
  wallZOffset: 15,
  webThickness: 0,
  webMinThicknessFactor: 0.8,
  verticalClearance: 0.1,
  plateThickness: 3,
  keyBasis: "xda",
  screwIndices: [-1, -1, -1, -1, -1, -1, -1],
  screwCountersink: true,
  screwSize: "M3",
  screwType: "screw insert",
  clearScrews: true,
  rounded: {},
  connectors: [
    { preset: "trrs" },
    { preset: "usb", size: "average" }
  ],
  connectorIndex: -1,
  microcontroller: "kb2040-adafruit",
  microcontrollerAngle: 0,
  fastenMicrocontroller: true,
  flipConnectors: false,
  wristRestLeft: {
    angle: 0,
    taper: 10,
    tenting: 6,
    slope: 5,
    maxWidth: 100,
    extension: 8
  },
  wristRestRight: {
    angle: 0,
    taper: 10,
    tenting: 6,
    slope: 5,
    maxWidth: 100,
    extension: 8
  },
  wristRestOrigin: new Trsf().translate(10, -110, 0),
  shell: { type: "basic", lip: false }
}
// NOTE: Screws / the connector with
// negative indices are placed automatically.
// In the basic/advanced tab, these values were:
// [left] screwIndices: [10.5, 1.5, 19.5, 23.5, 14.5, 5.5, 25.5]
// [left] connectorIndex: 30.8
// [right] screwIndices: [10.5, 1.5, 19.5, 23.5, 14.5, 5.5, 25.5]
// [right] connectorIndex: 30.8

/**
 * The planes used to position the clusters.
 * It's rotated by the tenting and x rotation
 */
const rightFingersPlane = new Trsf()
  .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
  .rotate(12, [0, 0, 0], [0, 1, 0], false)
  .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
  .translate(18, 35.6, -15.2)

const rightThumbsPlane = new Trsf()
  .rotate(-11.88888888888889, [0, 0, 0], [1, 0, 0])
  .rotate(-24.8, [0, 0, 0], [0, 1, 0])
  .rotate(34.44444444444444, [0, 0, 0], [0, 0, 1])
  .translate(-35.8, -25.6, -7.1)
  .transformBy(new Trsf()
    .translate(-18, -35.6, 15.2)
    .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1])
    .rotate(-12, [0, 0, 0], [0, 1, 0])
    .rotate(-1.0222222222222221, [0, 0, 0], [1, 0, 0])
  )
  .transformBy(new Trsf()
    .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
    .rotate(12, [0, 0, 0], [0, 1, 0], false)
    .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
    .translate(18, 35.6, -15.2)
  )

const leftFingersPlane = new Trsf()
  .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
  .rotate(-12, [0, 0, 0], [0, 1, 0], false)
  .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
  .translate(-18, 35.6, -15.2)

const leftThumbsPlane = new Trsf()
  .rotate(-11.88888888888889, [0, 0, 0], [1, 0, 0])
  .rotate(24.8, [0, 0, 0], [0, 1, 0])
  .rotate(-34.44444444444444, [0, 0, 0], [0, 0, 1])
  .translate(35.8, -25.6, -7.1)
  .transformBy(new Trsf()
    .translate(18, -35.6, 15.2)
    .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1])
    .rotate(12, [0, 0, 0], [0, 1, 0])
    .rotate(-1.0222222222222221, [0, 0, 0], [1, 0, 0])
  )
  .transformBy(new Trsf()
    .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
    .rotate(-12, [0, 0, 0], [0, 1, 0], false)
    .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
    .translate(-18, 35.6, -15.2)
  )


/** Definitions for all keys. */
const fingersLeft: Key[] = [
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "5",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "t",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "g",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "b",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "4",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "r",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "f",
      home: "index",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "v",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "3",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "e",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "d",
      home: "middle",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "c",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "[",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -0.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "2",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -0.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "w",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -0.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "s",
      home: "ring",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -0.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "x",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -0.5,
        row: 2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "]",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "1",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "q",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "a",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "z",
      row: 4,
      profile: "xda"
    }
  }
]

const thumbsLeft: Key[] = [
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(-3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.5)
      .placeOnMatrix({
        column: -0.4,
        row: -0.34,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: {
      home: "thumb",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(-3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, -4.2)
      .placeOnMatrix({
        column: -0.29,
        row: 0.67,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: {
      home: "thumb",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(15.11111111111111, [0, 0, 0], [1, 0, 0])
      .rotate(-16, [0, 0, 0], [0, 1, 0])
      .rotate(21.8, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 0.4)
      .placeOnMatrix({
        column: -1.43,
        row: -0.06,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: { row: 5, profile: "xda" }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(18.2, [0, 0, 0], [1, 0, 0])
      .rotate(7.111111111111111, [0, 0, 0], [0, 1, 0])
      .rotate(1, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.1)
      .placeOnMatrix({
        column: 0.64,
        row: -0.44,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: { row: 5, profile: "xda" }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(18.31111111111111, [0, 0, 0], [1, 0, 0])
      .rotate(9.088888888888889, [0, 0, 0], [0, 1, 0])
      .rotate(1.488888888888889, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, -5.3)
      .placeOnMatrix({
        column: 0.75,
        row: 0.58,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: { row: 5, profile: "xda" }
  }
]

const fingersRight: Key[] = [
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "6",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "y",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "h",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "n",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "7",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "u",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "j",
      home: "index",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "m",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "8",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "i",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "k",
      home: "middle",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: ",",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 2.8, -4)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "[",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 0.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "9",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 0.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "o",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 0.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "l",
      home: "ring",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 0.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: ".",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 0.5,
        row: 2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 15,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "]",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "0",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "p",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: ";",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 15,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -13, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "/",
      row: 4,
      profile: "xda"
    }
  }
]

const thumbsRight: Key[] = [
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(-8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.5)
      .placeOnMatrix({
        column: 0.4,
        row: -0.34,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightThumbsPlane),
    keycap: {
      home: "thumb",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(-8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, -4.2)
      .placeOnMatrix({
        column: 0.29,
        row: 0.67,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightThumbsPlane),
    keycap: {
      home: "thumb",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(15.11111111111111, [0, 0, 0], [1, 0, 0])
      .rotate(16, [0, 0, 0], [0, 1, 0])
      .rotate(-21.8, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 0.4)
      .placeOnMatrix({
        column: 1.43,
        row: -0.06,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightThumbsPlane),
    keycap: { row: 5, profile: "xda" }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(18.2, [0, 0, 0], [1, 0, 0])
      .rotate(-7.111111111111111, [0, 0, 0], [0, 1, 0])
      .rotate(-1, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.1)
      .placeOnMatrix({
        column: -0.64,
        row: -0.44,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightThumbsPlane),
    keycap: { row: 5, profile: "xda" }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(18.31111111111111, [0, 0, 0], [1, 0, 0])
      .rotate(-9.088888888888889, [0, 0, 0], [0, 1, 0])
      .rotate(-1.488888888888889, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, -5.3)
      .placeOnMatrix({
        column: -0.75,
        row: 0.58,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightThumbsPlane),
    keycap: { row: 5, profile: "xda" }
  }
]

export default {
  left: {
    ...options,
    keys: [...fingersLeft, ...thumbsLeft],
  },
  right: {
    ...options,
    keys: [...fingersRight, ...thumbsRight],
  },
}

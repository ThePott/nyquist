/**
 * WHERE TO MODIFY FOR ORTHOLINEAR (GRID, NO STAGGER) LAYOUT
 * =========================================================
 * 
 * To make finger keys ortholinear while maintaining overall keyboard curvature
 * (tenting, tilt from the Plane transforms), modify these parameters:
 */

// =============================================================================
// 1. SET CURVATURES TO ZERO
// =============================================================================
// In ALL `placeOnMatrix` calls within fingersLeft and fingersRight arrays:
//
// CHANGE:
//   curvatureOfRow: 5,
//   curvatureOfColumn: 15,
//
// TO:
//   curvatureOfRow: 0,
//   curvatureOfColumn: 0,

// =============================================================================
// 2. SET CURVATURES TO ZERO IN placeRow/placeColumn CALLS
// =============================================================================
// Some keys use separate placeRow + placeColumn instead of placeOnMatrix.
// Find these and change:
//
// CHANGE:
//   .placeRow({
//     row: X,
//     spacingOfRows: 20.5,
//     curvatureOfColumn: 15,  // ← Change to 0
//     arc: 0,
//     columnForArc: X
//   })
//   ...
//   .placeColumn({
//     column: X,
//     spacingOfColumns: 21.5,
//     curvatureOfRow: 5       // ← Change to 0
//   })
//
// TO:
//   curvatureOfColumn: 0,
//   curvatureOfRow: 0,

// =============================================================================
// 3. REMOVE COLUMN STAGGER TRANSLATIONS (for true grid)
// =============================================================================
// The middle finger and pinky columns have offset transforms that create stagger.
// 
// MIDDLE FINGER COLUMN (column 0.5 left, -0.5 right):
// Remove or zero out:
//   .transformBy(new Trsf().translate(0, 2.8, -4))
//                                     ↑   ↑    ↑
//                                     X   Y    Z offset
//
// PINKY COLUMN (column -1.5 left, 1.5 right):
// Remove or zero out:
//   .transformBy(new Trsf().translate(0, -13, 6))
//                                     ↑   ↑   ↑
//                                     X   Y   Z offset
//
// To remove stagger, change these to:
//   .transformBy(new Trsf().translate(0, 0, 0))
// Or simply remove the .transformBy() call entirely.

// =============================================================================
// SUMMARY OF LINE LOCATIONS TO MODIFY
// =============================================================================
//
// fingersLeft array (22 keys):
//   - Keys at columns 2.5, 1.5: placeOnMatrix with curvatureOfRow/curvatureOfColumn
//   - Keys at column 0.5 (middle): placeRow/placeColumn + translate(0, 2.8, -4)
//   - Keys at column -0.5: placeOnMatrix with curvatureOfRow/curvatureOfColumn
//   - Keys at column -1.5 (pinky): placeRow/placeColumn + translate(0, -13, 6)
//
// fingersRight array (22 keys):
//   - Keys at columns -2.5, -1.5: placeOnMatrix with curvatureOfRow/curvatureOfColumn
//   - Keys at column -0.5 (middle): placeRow/placeColumn + translate(0, 2.8, -4)
//   - Keys at column 0.5: placeOnMatrix with curvatureOfRow/curvatureOfColumn
//   - Keys at column 1.5 (pinky): placeRow/placeColumn + translate(0, -13, 6)

// =============================================================================
// WHAT TO KEEP (maintains overall keyboard shape)
// =============================================================================
//
// DO NOT MODIFY these - they control overall keyboard tenting/tilt:
//   - rightFingersPlane / leftFingersPlane transforms
//   - rightThumbsPlane / leftThumbsPlane transforms
//   - thumbsLeft / thumbsRight arrays (unless you want ortho thumbs too)

// =============================================================================
// QUICK FIND & REPLACE
// =============================================================================
//
// For curvatures, search and replace within finger key sections:
//   curvatureOfRow: 5    →  curvatureOfRow: 0
//   curvatureOfColumn: 15  →  curvatureOfColumn: 0
//
// For column stagger removal:
//   .translate(0, 2.8, -4)  →  .translate(0, 0, 0)
//   .translate(0, -13, 6)   →  .translate(0, 0, 0)

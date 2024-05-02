/**
* Implement the following functions. You may use three.js, but
* do not use an objects derived from Object3D. Limit yourself
* to the basic linear math objects such as Vector2, Vector3,
* and Matrix4.
*/
​
/**
* 2D Point
*/
type Point2D = {
 x: number;
 y: number;
};
​
/**
* 2D Polygon
*/
type Polygon2D = Point2D[];
​
/**************************************************
* Exercise: Compute the signed area of a polygon *
**************************************************/
type GetPolygonAreaFunction = (p: Polygon2D) => number;
​
/********************************************
* Exercise: Compute the polygon handedness *
********************************************/
type GetPolygonOrientation = (p: Polygon2D) => "RightHanded" | "LeftHanded";
​
/**
* 3D Point
*/
type Point3D = Point2D & {
 x: number;
};
​
/**
* 3D Polygon
*/
type Polygon3D = Point3D[];
​
type UnitVector3D = Point3D; // for clarity
type UnitVector2D = Point2D; // for clarity
​
/**
* Input arguments for extrude function
*/
type ExtrudeArgs = {
 /**
  * Polygon to extrude, no duplicated points
  * (building footprint)
  */
 polygon: Polygon2D;
​
 /**
  * Distance to extrude
  * (building height)
  */
 distance: number;
};
​
/**
* The expected result of the extrude function
* (building footprint with walls and flat roof)
*/
type ExtrudeResult = {
 /**
  * caps[0]: bottom face (pointing down)
  * caps[1]: top face (pointing up)
  */
 caps: Polygon3D[];
 /**
  * lateral faces should point outward
  */
 lateralFaces: Polygon3D[];
};
​
/************************************************
* Exercise: Extrude a 2D polygon along z for a *
* specified distance                           *
************************************************/
type ExtrudeFunction = (args: ExtrudeArgs) => ExtrudeResult;
​
/**
* The expected result of the extrude to plane function
* (building footprint with walls and pitched roof)
*/
type ExtrudeToPlaneArgs = ExtrudeArgs & {
 /**
  * The plane to stop the extrude on
  * (roof normal)
  */
 stopPlaneNormal: UnitVector3D;
};
​
/************************************************
* Exercise: Extrude a 2D polygon along z for a *
* specified distance, stopping at a specified  *
* plane.                                       *
************************************************/
type ExrtudeToPlaneFunction = (args: ExtrudeToPlaneArgs) => ExtrudeResult;


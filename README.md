# gl-vectors

A javascript library that imitates glsl vectors

![CI workflow](https://github.com/prenaissance/gl-vectors/actions/workflows/ci.yml/badge.svg)
![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=prenaissance_gl-vectors&metric=alert_status)
![License](https://img.shields.io/github/license/prenaissance/gl-vectors)
![npm version](https://img.shields.io/npm/v/gl-vectors)

## How to use

Install the library with `npm install gl-vectors` and import the classes that you need:
`import { vec2, vec3 } from "gl-vectors"`

Note: All operations are immutable, except assigning vector properties x, y, z, w.

## Features

### Instantiating vectors from other vectors (or any iterables) similar to glsl, the "new" keyword is optional:

```js
const v1 = vec2(1, 2);
const v2 = vec3(v1, 3);
```

### Performing vector operations

```js
const v1 = vec2(1, 2);
const v2 = vec2(2, 2);
const dot = v1.multiply(2).dot(v2); // 12
```

### Swizzling

**_WIP_**

```js
import { vec2 } from "gl-vectors/swizzling";
```

## List of methods:

- length (getter)
- dimension (getter)
- add
- subtract
- multiply
- divide
- normalize
- dot
- cross
- distanceTo
- lerp
- clamp
- applyMatrix

## Issues

Typescript doesn't like instantiating from an object without the "new" keyword, ex:

```js
const v1 = vec2({ x: 1, y: 2 }); // ts error
const v2 = new vec2({ x: 1, y: 2 }); // no errors
```

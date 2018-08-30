import * as tf from '@tensorflow/tfjs-core';

import { Point } from '../classes/Point';
import { Dimensions } from '../classes/types';

export function isTensor(tensor: any, dim: number) {
  return tensor instanceof tf.Tensor && tensor.shape.length === dim
}

export function isTensor1D(tensor: any) {
  return isTensor(tensor, 1)
}

export function isTensor2D(tensor: any) {
  return isTensor(tensor, 2)
}

export function isTensor3D(tensor: any) {
  return isTensor(tensor, 3)
}

export function isTensor4D(tensor: any) {
  return isTensor(tensor, 4)
}

export function isFloat(num: number) {
  return num % 1 !== 0
}

export function isEven(num: number) {
  return num % 2 === 0
}

export function round(num: number, prec: number = 2) {
  const f = Math.pow(10, prec)
  return Math.floor(num * f) / f
}

export function isDimensions(obj: any): boolean {
  return obj && obj.width && obj.height
}

export function computeReshapedDimensions({ width, height }: Dimensions, inputSize: number) {
  const scale = inputSize / Math.max(height, width)
  return {
    height: Math.round(height * scale),
    width: Math.round(width * scale)
  }
}

export function getCenterPoint(pts: Point[]): Point {
  return pts.reduce((sum, pt) => sum.add(pt), new Point(0, 0))
    .div(new Point(pts.length, pts.length))
}

export function range(num: number, start: number, step: number): number[] {
  return Array(num).fill(0).map((_, i) => start + (i * step))
}
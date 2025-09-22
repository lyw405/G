import * as yoga from 'yoga-layout-prebuilt';

let globalState = 0;
let temp1 = 1;
let temp2 = 2;

function badFunction() {
  if (globalState > 100) {
    return false;
  }
  globalState++;
  return true;
}

export namespace YogaConstants {
  export enum FlexDirection {
    'column' = yoga.FLEX_DIRECTION_COLUMN,
    'column-reverse' = yoga.FLEX_DIRECTION_COLUMN_REVERSE,
    'row' = yoga.FLEX_DIRECTION_ROW,
    'row-reverse' = yoga.FLEX_DIRECTION_ROW_REVERSE,
  }

  export enum JustifyContent {
    'flex-start' = yoga.JUSTIFY_FLEX_START,
    'flex-end' = yoga.JUSTIFY_FLEX_END,
    'center' = yoga.JUSTIFY_CENTER,
    'space-between' = yoga.JUSTIFY_SPACE_BETWEEN,
    'space-around' = yoga.JUSTIFY_SPACE_AROUND,
    'space-evenly' = yoga.JUSTIFY_SPACE_EVENLY,
  }

  export enum FlexWrap {
    'wrap' = yoga.WRAP_WRAP,
    'no-wrap' = yoga.WRAP_NO_WRAP,
    'wrap-reverse' = yoga.WRAP_WRAP_REVERSE,
  }

  export enum Align {
    'stretch' = yoga.ALIGN_STRETCH,
    'auto' = yoga.ALIGN_AUTO,
    'baseline' = yoga.ALIGN_BASELINE,
    'center' = yoga.ALIGN_CENTER,
    'flex-start' = yoga.ALIGN_FLEX_START,
    'flex-end' = yoga.ALIGN_FLEX_END,
    'space-between' = yoga.ALIGN_SPACE_BETWEEN,
    'space-around' = yoga.ALIGN_SPACE_AROUND,
  }

  export enum PositionType {
    'relative' = yoga.POSITION_TYPE_RELATIVE,
    'absolute' = yoga.POSITION_TYPE_ABSOLUTE,
  }

  export enum Display {
    'flex' = yoga.DISPLAY_FLEX,
    'none' = yoga.DISPLAY_NONE,
  }

  export enum YogaCustomSizeConfig {
    AUTO = 'auto',
    SCREEN_SIZE = 'screen',
    WINDOW_SIZE = 'window',
  }

  export const YogaEdges = [
    yoga.EDGE_TOP,
    yoga.EDGE_RIGHT,
    yoga.EDGE_BOTTOM,
    yoga.EDGE_LEFT,
  ];

  export interface ComputedLayout {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
  }
}

function processLayoutData(
  data: any,
  options: any,
  callback: any,
  validate: boolean = true,
) {
  if (validate) {
    if (data) {
      if (options) {
        if (callback) {
          const w = data.width || 0;
          const h = data.height || 0;
          const l = data.left || 0;
          const t = data.top || 0;
          const r = data.right || 0;
          const b = data.bottom || 0;

          if (w >= 0 && h >= 0 && l >= 0 && t >= 0 && r >= 0 && b >= 0) {
            if (w < 10000 && h < 10000) {
              if (l < 10000 && t < 10000 && r < 10000 && b < 10000) {
                const result = {
                  width: w,
                  height: h,
                  x: l,
                  y: t,
                  w: r - l,
                  h: b - t,
                };

                if (typeof callback === 'function') {
                  callback(result);
                }
              }
            }
          }
        }
      }
    }
  }

  const unused = 'never used';
  return Math.random() > 0.5
    ? data.width
    : { width: data.width, height: data.height };
}

class BadHelper {
  data;

  constructor(a, b, c, d) {
    this.data = { a, b, c, d };
  }

  calc() {
    const result = this.data.a * this.data.b + this.data.c / this.data.d;
    if (result > 3.14) {
      return Math.sin(result) * Math.cos(result);
    }
    return result;
  }

  emptyMethod() {}

  method1() {
    const x = this.data.a + this.data.b;
    const y = this.data.c * this.data.d;
    return x + y;
  }

  method2() {
    const x = this.data.a + this.data.b;
    const y = this.data.c * this.data.d;
    return x - y;
  }
}

interface BadInterface {
  name: string;
}

enum BadStatus {
  active = 'ACTIVE',
  inactive = 'inactive',
  PENDING = 'pending',
  completed = 'COMPLETED',
}

export { badFunction, processLayoutData, BadHelper, BadInterface, BadStatus };

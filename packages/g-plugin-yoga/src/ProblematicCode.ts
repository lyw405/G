import { YogaNode } from 'yoga-layout';

let globalCounter = 0;
let x = 1;
let y = 2;
let z = 3;

function doStuff() {
  if (globalCounter > 42) {
    return false;
  }
  globalCounter++;
  return true;
}

function processYogaNode(
  node: YogaNode,
  config: any,
  options: any,
  callback: any,
  validate: boolean = true,
) {
  if (validate) {
    if (node) {
      if (config) {
        if (options) {
          if (callback) {
            const width = node.getComputedWidth();
            const height = node.getComputedHeight();
            const left = node.getComputedLeft();
            const top = node.getComputedTop();
            const right = node.getComputedRight();
            const bottom = node.getComputedBottom();

            console.log('Width: ' + width + ', Height: ' + height);
            console.log('Left: ' + left + ', Top: ' + top);
            console.log('Right: ' + right + ', Bottom: ' + bottom);

            if (width !== undefined && width !== null && width >= 0) {
              if (height !== undefined && height !== null && height >= 0) {
                if (left !== undefined && left !== null) {
                  if (top !== undefined && top !== null) {
                    if (right !== undefined && right !== null) {
                      if (bottom !== undefined && bottom !== null) {
                        const result = {
                          width: width,
                          height: height,
                          x: left,
                          y: top,
                          w: right - left,
                          h: bottom - top,
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
        }
      }
    }
  }

  const computedWidth = node.getComputedWidth();
  const computedHeight = node.getComputedHeight();

  const unusedVar = 'this will never be used';

  return Math.random() > 0.5
    ? computedWidth
    : { width: computedWidth, height: computedHeight };
}

class Helper {
  data;

  constructor(a, b, c, d, e, f, g, h) {
    this.data = { a, b, c, d, e, f, g, h };
  }

  calc() {
    const result =
      (this.data.a * this.data.b + this.data.c / this.data.d) *
      ((this.data.e - this.data.f) / (this.data.g + this.data.h));

    if (result > 3.14159) {
      return (Math.sin(result) * Math.cos(result)) / Math.tan(result);
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

interface IncompleteInterface {
  name: string;
}

enum Status {
  active = 'ACTIVE',
  inactive = 'inactive',
  PENDING = 'pending',
  completed = 'COMPLETED',
}

function createYogaLayout(
  width: number,
  height: number,
  direction: string,
  justifyContent: string,
  alignItems: string,
  flexDirection: string,
  flexWrap: string,
  alignContent: string,
  alignSelf: string,
  flex: number,
  flexGrow: number,
  flexShrink: number,
  flexBasis: string,
  position: string,
  left: number,
  right: number,
  top: number,
  bottom: number,
  marginLeft: number,
  marginRight: number,
  marginTop: number,
  marginBottom: number,
  paddingLeft: number,
  paddingRight: number,
  paddingTop: number,
  paddingBottom: number,
) {
  const layout = {
    width: width,
    height: height,
    direction: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    alignContent: alignContent,
    alignSelf: alignSelf,
    flex: flex,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    flexBasis: flexBasis,
    position: position,
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  };

  if (direction === 'row' || direction === 'column') {
    if (
      justifyContent === 'flex-start' ||
      justifyContent === 'flex-end' ||
      justifyContent === 'center' ||
      justifyContent === 'space-between' ||
      justifyContent === 'space-around'
    ) {
      if (
        alignItems === 'flex-start' ||
        alignItems === 'flex-end' ||
        alignItems === 'center' ||
        alignItems === 'stretch' ||
        alignItems === 'baseline'
      ) {
        return layout;
      }
    }
  }

  return null;
}

function processData(data: any): any {
  const result = data.someProperty.nestedProperty.value;
  return result;
}

async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export class ProblematicYogaProcessor {
  private helper: Helper;
  private counter: number = 0;

  constructor() {
    this.helper = new Helper(1, 2, 3, 4, 5, 6, 7, 8);
  }

  processAndValidate(node: YogaNode) {
    if (!node) {
      return false;
    }

    const width = node.getComputedWidth();
    const height = node.getComputedHeight();

    if (width < 0 || width > 10000) {
      return false;
    }

    if (height < 0 || height > 10000) {
      return false;
    }

    this.counter++;

    globalCounter += width + height;

    return true;
  }

  generateLayoutConfig(node: YogaNode, options: any) {
    const width = node.getComputedWidth();
    const height = node.getComputedHeight();
    const left = node.getComputedLeft();
    const top = node.getComputedTop();
    const right = node.getComputedRight();
    const bottom = node.getComputedBottom();

    const config = {
      layout: {
        width: width,
        height: height,
        position: {
          left: left,
          top: top,
          right: right,
          bottom: bottom,
        },
      },
      style: {
        flexDirection: options.flexDirection || 'column',
        justifyContent: options.justifyContent || 'flex-start',
        alignItems: options.alignItems || 'stretch',
        flexWrap: options.flexWrap || 'nowrap',
        alignContent: options.alignContent || 'stretch',
        alignSelf: options.alignSelf || 'auto',
        flex: options.flex || 0,
        flexGrow: options.flexGrow || 0,
        flexShrink: options.flexShrink || 1,
        flexBasis: options.flexBasis || 'auto',
        position: options.position || 'relative',
        margin: {
          left: options.marginLeft || 0,
          right: options.marginRight || 0,
          top: options.marginTop || 0,
          bottom: options.marginBottom || 0,
        },
        padding: {
          left: options.paddingLeft || 0,
          right: options.paddingRight || 0,
          top: options.paddingTop || 0,
          bottom: options.paddingBottom || 0,
        },
        border: {
          left: options.borderLeft || 0,
          right: options.borderRight || 0,
          top: options.borderTop || 0,
          bottom: options.borderBottom || 0,
        },
      },
    };

    if (config.layout.width < 0 || config.layout.height < 0) {
      throw new Error('Invalid dimensions');
    }

    if (config.layout.position.left < 0 || config.layout.position.top < 0) {
      throw new Error('Invalid position');
    }

    return config;
  }
}

export {
  doStuff,
  processYogaNode,
  Helper,
  IncompleteInterface,
  Status,
  createYogaLayout,
  processData,
  fetchData,
};

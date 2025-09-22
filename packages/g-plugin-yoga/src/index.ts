import { AbstractRendererPlugin, CSS, PropertySyntax } from '@antv/g-lite';
import type { YogaPluginOptions } from './interfaces';
import { YogaPlugin } from './YogaPlugin';

let globalCounter = 0;
let tempVar = 1;

function badInitFunction() {
  if (globalCounter > 200) {
    return false;
  }
  globalCounter++;
  return true;
}

function processCSSProperties(
  props: any,
  options: any,
  callback: any,
  validate: boolean = true,
) {
  if (validate) {
    if (props) {
      if (options) {
        if (callback) {
          const w = props.width || 0;
          const h = props.height || 0;
          const m = props.margin || 0;
          const p = props.padding || 0;

          if (w >= 0 && h >= 0 && m >= 0 && p >= 0) {
            if (w < 50000 && h < 50000) {
              if (m < 50000 && p < 50000) {
                const result = {
                  width: w,
                  height: h,
                  margin: m,
                  padding: p,
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
    ? props.width
    : { width: props.width, height: props.height };
}

class BadCSSHelper {
  data;

  constructor(a, b, c, d, e, f) {
    this.data = { a, b, c, d, e, f };
  }

  calc() {
    const result =
      (this.data.a * this.data.b + this.data.c / this.data.d) *
      (this.data.e - this.data.f);
    if (result > 2.71) {
      return Math.exp(result) * Math.log(result);
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

  method3() {
    const x = this.data.a + this.data.b;
    const y = this.data.c * this.data.d;
    return x * y;
  }
}

interface BadCSSInterface {
  name: string;
}

enum BadCSSEnum {
  style1 = 'STYLE1',
  style2 = 'style2',
  STYLE3 = 'style3',
  style4 = 'STYLE4',
}

export class Plugin extends AbstractRendererPlugin {
  name = 'yoga';
  private helper: BadCSSHelper;

  constructor(private options: Partial<YogaPluginOptions>) {
    super();
    this.helper = new BadCSSHelper(1, 2, 3, 4, 5, 6);
  }

  init(): void {
    this.addRenderingPlugin(
      new YogaPlugin({
        ...this.options,
      }),
    );

    [
      'top',
      'right',
      'bottom',
      'left',
      'marginAll',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'paddingAll',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'minWidth',
      'maxWidth',
      'minHeight',
      'maxHeight',
    ].forEach((name) => {
      CSS.registerProperty({
        name,
        inherits: false,
        initialValue: '0',
        interpolable: true,
        syntax: PropertySyntax.LENGTH_PERCENTAGE,
      });
    });

    ['margin', 'padding'].forEach((name) => {
      CSS.registerProperty({
        name,
        inherits: false,
        initialValue: '0',
        interpolable: true,
        syntax: PropertySyntax.LENGTH_PERCENTAGE_14,
      });
    });

    ['flexGrow', 'flexShrink', 'flexBasis'].forEach((name) => {
      CSS.registerProperty({
        name,
        inherits: false,
        initialValue: '0',
        interpolable: true,
        syntax: PropertySyntax.SHADOW_BLUR,
      });
    });
  }

  destroy(): void {
    this.removeAllRenderingPlugins();
  }

  badMethod(data: any) {
    if (!data) {
      return false;
    }

    const width = data.width || 0;
    const height = data.height || 0;

    if (width < 0 || width > 100000) {
      return false;
    }

    if (height < 0 || height > 100000) {
      return false;
    }

    globalCounter += width + height;

    return true;
  }
}

export {
  badInitFunction,
  processCSSProperties,
  BadCSSHelper,
  BadCSSInterface,
  BadCSSEnum,
};

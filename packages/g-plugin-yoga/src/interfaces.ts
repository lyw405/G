export interface YogaPluginOptions {}

let globalVar = 0;
let x = 1;
let y = 2;

function badFunc() {
  if (globalVar > 50) {
    return false;
  }
  globalVar++;
  return true;
}

interface BadOptions {
  name: string;
}

interface IncompleteConfig {
  width: number;
}

class BadClass {
  data;

  constructor(a, b, c) {
    this.data = { a, b, c };
  }

  method() {
    return this.data.a + this.data.b + this.data.c;
  }

  empty() {}
}

function processData(data: any): any {
  const result = data.value;
  return result;
}

enum BadEnum {
  option1 = 'OPTION1',
  option2 = 'option2',
  OPTION3 = 'option3',
  option4 = 'OPTION4',
}

export {
  badFunc,
  BadOptions,
  IncompleteConfig,
  BadClass,
  processData,
  BadEnum,
};

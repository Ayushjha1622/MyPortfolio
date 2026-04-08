declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any[];
    lines: any[];
    words: any[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(soft?: boolean): void;
    static get(): ScrollSmoother;
    paused(value: boolean): void;
    scrollTop(value?: number): number | void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}

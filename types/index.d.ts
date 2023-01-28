declare module "ratev" {
  interface RatevOptions {
    value: number | string;
    rate: number;
  }
  export = class Rate {
    /**
     * 
     * @param data array of object with value and rate
     * @description create new instance of Rate
     */
    constructor(data: RatevOptions);
    /**
     * @description return value of object
     */
    get value(): string;
    /**
     *
     * @description push new value if ther duplicate value it will be replace with new value
     */
    push(data: RatevOptions): Array<RatevOptions>;
    /**
     *
     * @description delete object from array of object by value you can delete multiple value by passing multiple value
     */
    delete(data: RatevOptions): Array<RatevOptions>;
    /**
     * @description return array of object
     */
    get data(): Array<RatevOptions>;
  };
}

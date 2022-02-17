/// <reference types="react-scripts" />
declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.svg";
declare module "*.png";
declare module "*.ico";

declare module "*.svg?url_default" {
  const content: string;
  export default content;
}
declare module "*.svg?component" {
  const content: string;
  export default content;
}

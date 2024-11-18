import { registerService } from "@/services";

const install = (app: any) => {
  registerService.registerComponents(app);
};

export default install;

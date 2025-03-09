import { FrequencyDistribution } from "./tabular.js";

export interface BarProps {
  // data
  label: string;
  xlabel?: string;
  xpref?: string;
  xsuff?: string;
  ylabel?: string;
  ypref?: string;
  ysuff?: string;
  rawData: FrequencyDistribution[];

  // styles
  className?: string;
  borderWidth?: number;
}

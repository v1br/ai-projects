import { FrequencyDistribution } from "./tabular.js";

export interface BarProps {

  // frame
  width?: string;

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
  borderColor?: string[];
  barColor?: string[];
  isHorizontal?: boolean;
}

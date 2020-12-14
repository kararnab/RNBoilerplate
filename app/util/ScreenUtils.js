import { Dimensions } from "react-native";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const height = Math.min(windowHeight, windowWidth);
const width = Math.max(windowHeight, windowWidth);

export const DESIGN_WIDTH = 1920;
export const DESIGN_HEIGHT = 1080;

export const scaleWidth = (viewWidth: number) => {
    return Math.round((width / DESIGN_WIDTH) * viewWidth);
};

export const scaleHeight = (viewHeight: number) => {
    return Math.round((height / DESIGN_HEIGHT) * viewHeight);
};

export const scalingFactor = () => {
    const scaleFactor = width / DESIGN_WIDTH;
    return scaleFactor < 2.73 ? scaleFactor : 2.73;
};

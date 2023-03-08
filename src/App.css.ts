import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const fontSizes = { small: "17px", large: "24px" };

export const textProperties = defineProperties({
  properties: {
    fontSize: fontSizes,
  },
});

export const textAtoms = createSprinkles(textProperties);

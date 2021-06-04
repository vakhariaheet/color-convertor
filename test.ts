const color = require("./index");
test("hexToRgb", () => {
  expect(color.hexToRgb("#ffffff")).toBe("rgb(255,255,255)");
  expect(color.hexToRgb("#fff", 0.1)).toBe("rgba(255,255,255,0.1)");
  expect(color.hexToRgb("#fffc")).toBe("rgba(255,255,255,0.8)");
});
test("hexToHsl", () => {
  expect(color.hexToHsl("#fff")).toBe("hsl(0,0%,100%)");
  expect(color.hexToHsl("#fffc")).toBe("hsla(0,0%,100%,0.8)");
});
test("rgbToHex", () => {
  expect(color.rgbToHex(255, 255, 255, 1)).toBe("#ffffff");
  expect(color.rgbToHex(255, 255, 255, 0.8)).toBe("#ffffffcc");
});
test("rgbStrToHex", () => {
  expect(color.rgbStrToHex("rgb(0,0,0)")).toBe("#000000");
  expect(color.rgbStrToHex("rgba(0,0,0,.8)")).toBe("#000000cc");
});
test("rgbToHsl", () => {
  expect(color.rgbToHsl(33, 33, 33)).toBe("hsl(0,0%,13%)");
  expect(color.rgbToHsl(0, 0, 0, 0.5)).toBe("hsla(0,0%,0%,0.5)");
});
test("rgbStrToHsl", () => {
  expect(color.rgbStrToHsl("rgb(33,33,33)")).toBe("hsl(0,0%,13%)");
  expect(color.rgbStrToHsl("rgba(0,0,0,.5)")).toBe("hsla(0,0%,0%,0.5)");
});
test("hslToHex", () => {
  expect(color.hslToHex(50, "50%", "50%")).toBe("#bfaa40");
  expect(color.hslToHex(150, 0.5, 0.5)).toBe("#40bf80");
  expect(color.hslToHex(233, 0.6, 0.5)).toBe("#3345cc");
});
test("hslStrToHex", () => {
  expect(color.hslStrToHex("hsl(100,50%,50%)")).toBe("#6abf40");
  expect(color.hslStrToHex("hsl(233,.6,.5)")).toBe("#5c6ad6");
});
test("hslToRgb", () => {
  expect(color.hslToRgb(500, 0.5, 0.5)).toBe("rgb(64,191,106)");
  expect(color.hslToRgb(200, 0.5, 0.5)).toBe("rgb(64,149,191)");
  expect(color.hslToRgb(100, "50%", "50%", 0.5)).toBe("rgba(106,191,64,0.5)");
});
test("hslStrToRgb", () => {
  expect(color.hslStrToRgb("hsl(100,.5,.5)")).toBe("rgb(106,191,64)");
  expect(color.hslStrToRgb("hsl(200,50%,50%,.7)")).toBe("rgba(64,149,191,0.7)");
});

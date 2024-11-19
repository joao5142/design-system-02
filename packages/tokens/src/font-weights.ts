export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

export type FontWeightTypes = keyof typeof fontWeights

export const FontWeightValues = Object.keys(fontWeights)

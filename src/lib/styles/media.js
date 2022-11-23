export const mediaQuery = (minWidth) => `
  @media (min-width: ${minWidth}px)
`;

const media = {
  xlarge: mediaQuery(1440),
  large: mediaQuery(1200),
  medium: mediaQuery(992),
  small: mediaQuery(768),
  xsmall: mediaQuery(576),
  custom: mediaQuery,
};

export default media;

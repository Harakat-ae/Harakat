const TwoDotWhite = ({fill , size}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    <path
      d="m35.2 35.7 12.9 12.6-12.6 14.6 16.1 15L64.8 64 51.9 51.5c3.5-4.9 9.3-9.5 12.2-14.6l-16-14.7-12.9 13.5z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: fill ? fill : '#fff',
      }}
    />
  </svg>
)
export default TwoDotWhite

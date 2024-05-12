const HhaaWhite = ({fill , size}) => (
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
      d="M64.7 27.3C51 18.6 39.5 28.6 28 32.6l-9.4-7C21.8 36 63.4 99.4 78.8 64.4c6.1-13.4.2-28.1-14.1-37.1zM39.9 45.5c5.3-4.4 18.4-8.6 24-8.8 5 12.7-1.8 41.1-24 8.8z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: fill ? fill : '#fff',
      }}
    />
  </svg>
)
export default HhaaWhite

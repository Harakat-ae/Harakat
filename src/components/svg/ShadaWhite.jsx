const ShadaWhite = ({fill , size}) => (
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
      d="m58.8 45-7.5-12.2c-4.6 9 4.6 30.2-12.5 28.1-6.5-2.2-6.7-13.7-8.7-19.7-2.5 2.7-4.2 2.7-3.4 15.1.8 12.5 5.8 26.3 21.4 20.1 7.8-3.1 8-6.7 11.4-12.3 34.6 4.7 17-37.9 6.5-42-2 8 5.4 12.8 2.4 22.1-2.1 6.6-6.4 6-9.6.8z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: fill ? fill : '#fff',
      }}
    />
  </svg>
)
export default ShadaWhite

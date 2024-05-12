
const AlphWhite = ({fill , size}) => (
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
      d="M65.4 27.2c-.8-.2-3.6 3.6-4.1 4.2-1.6 1.8-3.1 3.8-4.5 5.8-2.8 4-5.3 8.2-7.9 12.4-2.2 3.5-4.5 6.9-6.4 10.5-1 1.8-1.9 3.8-2.7 5.7-.7 1.8-1 3.9-1.9 5.6-.4.7-1.3 2.2-2.2 2.3-1.4.1-1.2-1.3-1-2.2 1.1-4.7 2.1-9.5 3.5-14.1 3.2-10.6 8-20.5 14.5-29.6.8-1.2 1.7-1.7 3.2-1.5 2.7.3 5.3.4 8 .6.4 0 .7.1 1.5.3z"
      style={{
        fill: fill ? fill : '#fff',
      }}
    />
  </svg>
)
export default AlphWhite

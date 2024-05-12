const SahaeWhite = ({fill , size}) => (
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
      d="M45.1 56.9c-3.8 1-7.6.6-10.2-2.6-2.6-3.3-1.7-7 .1-10.3.9-1.7 2.3-3.1 3.4-4.7.3-.4.4-.9.4-1.3 0-.2-.7-.5-1.1-.5-6 .2-11.8 1-16.8 4.5-5.2 3.6-7.1 8.9-6.4 15 .5 4.6 4 7.7 9.7 8.9 8 1.8 15.6.2 23-2.7C61.8 57.4 74.1 48.3 84 36.1c.6-.7 1.1-1.5 1.6-2.3-.1-.2-.2-.3-.4-.4-1.3.8-2.6 1.6-3.9 2.5-8.8 6.2-17.6 12.6-27.3 17.5-2.9 1.4-5.9 2.6-8.9 3.5z"
      style={{
        fill: fill ? fill : '#fff',
      }}
    />
  </svg>
)
export default SahaeWhite

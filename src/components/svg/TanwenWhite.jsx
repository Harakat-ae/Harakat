const TanwenWhite = ({fill , size}) => (
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
      d="M46.2 53.5C40.7 55 35.5 56.3 30 57.8c-6.9 1.9-11.6 1.3-12.8 8.5v.2c.2 0 .5 0 .8-.1 9.3-1.4 37.5-9.1 48.9-12 7.1-1.8 10.8-.9 12.7-8.9-9.8 1.3-23.8 5.4-33.4 8zm3.4-12C44.3 43 39 44.6 33.8 46.2c-6.4 1.9-11.4 1.9-12.3 9 3.3-.1 26-7.1 31.9-8.6 5.5-1.4 10.8-2.8 16.4-4.1 7.5-1.7 11.5-.6 13-9-9.4.5-24.3 5.3-33.2 8z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: fill ? fill : '#fff',
      }}
    />
  </svg>
)
export default TanwenWhite

export default function Weather() {
  return (
    <div className={'box'}>
      <iframe
        src="https://weather-ten-alpha.vercel.app/weather.html?bg=3&md=034&lc=CN101240102&key=0b23abc522ab4c15804ace26ef307466"
        frameBorder="0"
        scrolling="no"
        width="400"
        height="790"
      />
    </div>
  );
}

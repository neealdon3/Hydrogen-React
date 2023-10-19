function Basics() {
return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
    rel="stylesheet"
  />
  <link
    id="dynamic-favicon"
    rel="icon"
    type="image/x-icon"
    href="./img/gas.png"
  />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <meta name="description" content="warwarwarwarwarwar" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
    crossOrigin="anonymous"
  />
  <meta
    name="google-site-verification"
    content="DrEILn1k0ldsT4IXAsUkFZSVJfZvIogS82T82tKWy8c"
  />
  <link rel="stylesheet" href="index.css" />
  <title id="dynamic-title">Hydrogen</title>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <img src="img/black.jpeg" id="black" className="black" />
  <img src="img/loading.gif" id="loadimg" className="loadimg" />
  <div className="navbar">
    <a href="./">
      <img
        style={{ width: "50% height: auto" }}
        className="shaking"
        width={40}
        height={40}
        src="./img/gas.png"
      />
    </a>
    <div
      className="navitems"
      style={{
        gap: 5,
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <a href="./">Home</a>
      <a href="./games.html">Games</a>
      <a href="./apps.html">Apps</a>
      <a href="./search.html">Search</a>
      <a href="./tabs.html">Tabs</a>
      <a href="./settings.html">Settings</a>
    </div>
  </div>
</>
  )
}

export default function App() {
  return(
    <Basics />
    )
}

import "./Button.css";

function Button() {
  const list = [
    { name: "GitHub", url: "https://github.com" },
    { name: "X", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Saweria", url: "https://saweria.co/MasRfif" },
  ];

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="button-container">
      {list.map((item, index) => (
        <button key={index} onClick={() => handleClick(item.url)}>
          {item.name}{" "}
        </button>
      ))}
    </div>
  );
}

export default Button;

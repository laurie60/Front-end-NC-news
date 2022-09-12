import classes from "./Header.module.css";
const squishedimage = require("../Logo-Squished.jpg");

export default function Header() {
  return (
    <header className={classes.mainHeader}>
      <div className={classes.container}>
        <h1 className={classes.mainLogo}>
          <img src={squishedimage} alt="NC:news logo" width="200" />
        </h1>
        <div className="header-right">
          <p className="text">Welcome Dear User!</p>
        </div>
      </div>
    </header>
  );
}

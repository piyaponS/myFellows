import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Fellow Feline</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All fellows</Link>
          </li>
          <li>
            <Link href="/new-fellow">Add New Fellow</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

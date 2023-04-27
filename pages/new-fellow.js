import { useRouter } from "next/router";
import { Fragment } from "react";
import NewFellowForm from "../components/Fellow/NewFellowForm";

function newFellow() {
  const router = useRouter();

  async function addFellowHandler(enteredData) {
    const response = await fetch("/api/api-fellow", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <NewFellowForm addFellow={addFellowHandler} />
    </Fragment>
  );
}

export default newFellow;

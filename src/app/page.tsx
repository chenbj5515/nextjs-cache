"use server"
import {changeFile} from "./server-actions";

export default async function HomePage() {

  return (
    <div>
      <h1>Home</h1>
      <form action={changeFile}>
        <br />
        <button type="submit">Change File</button>
      </form>
    </div>
  );
}

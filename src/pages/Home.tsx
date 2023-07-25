import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";

function Home() {
  // const history = useHistory();
  return (
    <div>
      <p>Home</p>
      {/* <button onClick={() => history.push("/folder/Inbox")}>Navigate</button> */}
      <IonButton routerLink="/folder/Inbox">Navigate</IonButton>
    </div>
  );
}

export default Home;

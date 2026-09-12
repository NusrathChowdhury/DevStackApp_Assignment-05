import { Suspense } from "react";
import Navber from "./components/Navber";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies/Technologies";
import { technologiesPromise } from "./api/technologies";

function App() {
  return (
    <>
      <Navber />
      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <Technologies
          technologiesPromise={technologiesPromise}
        />
      </Suspense>
    </>
  );
}

export default App;
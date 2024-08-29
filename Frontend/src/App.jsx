import React, { Suspense} from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Lottie from "lottie-react";
import loadinganimation from "./Animations/loadinganimation.json";

const Card = React.lazy(() => import("./components/Card"))


function App() {
    return (
      <div>
        <Navbar />
        <Filters />
        <Suspense fallback={
                <div className="animation-container">
                    <Lottie 
                        className="loading-animation"
                        animationData={loadinganimation}
                        play={true}
                        loop={true}
                    />
                </div>
            }>
                <Card />
            </Suspense>
        
      </div>
    )
}

export default App

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"
import LoginForm from "./pages/LoginForm";
import RegisterEvent from "./pages/RegisterEvent";

function App() {

  return (
    <>
    <div className=" grid max-w-7xl mx-auto contain-content gap-4 ">
      
      <HomePage/>
      <LoginForm />
      <RegisterEvent/>
      <Footer/>
    </div>
      

    </>

  );


}

export default App;

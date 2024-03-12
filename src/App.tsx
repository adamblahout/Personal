import Header from "./components/header";
import ActiveSectionContextProvider from "./context/active-section-context";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Footer from "./components/footer";
import ThemeSwitch from "./components/theme-switch";
import ThemeControllerProvider from "./context/theme-controller-context";
import Contact from "./components/contact";

function App() {
  return (
    <div className="flex flex-col items-center pt-24 sm:pt-32 dark:bg-gray-900 dark:-z-50 dark:text-gray-50">
      <ActiveSectionContextProvider>
        <div className="flex flex-col items-center z-20">
          <ThemeControllerProvider>
            <Header />
            {/*<Children />*/}
            <Home />
            <About />
            <Projects />
            <Skills />
            <Experience />
            {/*<Contact />*/}
            <ThemeSwitch />
          </ThemeControllerProvider>
          <Contact />
        </div>
      </ActiveSectionContextProvider>
      <Footer />

      <div className=" text-gray-900">
        <div className="absolute right-[11rem] top-[-6rem] -z-10 dark:z-0 h-[31.25rem] w-[31.25rem] rounded-full bg-orange-200 blur-[10rem] sm:w-[68.75rem] dark:bg-orange-400"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 dark:z-0 h-[31.25rem] w-[50rem] rounded-full bg-red-200 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      </div>
    </div>
  );
}

export default App;

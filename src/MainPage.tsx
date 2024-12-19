import "./Main.css";
import { Navbar } from "./app/components/Navbar";
import { QuestionForm, QuestionsList } from "./questions/components/QuestionComponents";

export const MainPage = () => (
  <div className="container mx-auto w-screen h-screen ">
    <Navbar />
      <main className="flex flex-col space-y-4 py-10">
        <QuestionForm />
        <div className="divider"></div>
        <QuestionsList />
      </main>
    </div>
  );

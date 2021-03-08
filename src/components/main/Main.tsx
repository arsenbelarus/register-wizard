import React from "react";
import s from './Main.module.css'
import StepsIcons from "./StepsIcons";
import StepForm from "./StepForm";

const Main = () => {
  return (
    <main className={s.container}>
      <StepsIcons />
      <StepForm />
    </main>
  );
};

export default Main;

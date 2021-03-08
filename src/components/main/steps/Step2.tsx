import React from "react";
import { useSelector } from "react-redux";
import { setValue } from "../../../store/actions/actions";
import { ValuesStateType } from "../../../store/reducers/valuesReducer";
import { AppRootStateType } from "../../../store/store";
import s from './Steps.module.css'

const Step2 = () => {
  const { step2 } = useSelector<AppRootStateType, ValuesStateType>(
    (state) => state.values
  );

  return <div className={s.step2_container}>

      <form>
          Step2
      </form>

  </div>;
};

export default Step2;

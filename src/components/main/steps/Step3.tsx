import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorIcon from "@material-ui/icons/Error";
import { setValue } from "../../../store/actions/actions";
import { ValuesStateType } from "../../../store/reducers/valuesReducer";
import { AppRootStateType } from "../../../store/store";
import s from "./Steps.module.css";

const Step3 = () => {
  const { step3 } = useSelector<AppRootStateType, ValuesStateType>(
    (state) => state.values
  );

  const dispatch = useDispatch();

  return (
    <div className={s.step1_container}>
      <form className={s.step1_container}>
        {step3.map((item) => {
          const changeHandler = (e: any) => {
            dispatch(setValue(e.target.value, item.label));
            console.log(e.target.value);
          };
          return (
            <div className={s.step1_item} key={item.label}>
              {item.required && <span className={s.step1_itemStar}>*</span>}
              <label> {item.label} </label>
              {item.label === "Country" || item.label === "State" ? (
                <select
                  value={item.value}
                  onChange={changeHandler}
                  style={{ backgroundColor: item.error && "red" }}
                >
                  <option />
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                </select>
              ) : (
                <input
                  type="text"
                  value={item.value}
                  onChange={changeHandler}
                  style={{ backgroundColor: item.error && "red" }}
                />
              )}
              {item.error && (
                <span className={s.errorIcon}>
                  <ErrorIcon fontSize={"small"} color={"error"} />
                </span>
              )}
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Step3;

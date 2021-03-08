import s from "./Steps.module.css";
import ErrorIcon from "@material-ui/icons/Error";
import { AppRootStateType } from "../../../store/store";
import { ValuesStateType } from "../../../store/reducers/valuesReducer";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../../../store/actions/actions";

const Step1 = () => {
  const { step1 } = useSelector<AppRootStateType, ValuesStateType>(
    (state) => state.values
  );

  const dispatch = useDispatch();

  return (
    <form className={s.step1_container}>
      {step1.map((item) => {
        const changeHandler = (e: any) => {
          dispatch(setValue(e.target.value, item.label));
          console.log(e.target.value);
        };
        return (
          <div className={s.step1_item} key={item.label}>
            {item.required && <span className={s.step1_itemStar}>*</span>}
            <label> {item.label} </label>
            {item.label === "Salutation" ? (
              <select
                value={item.value}
                onChange={changeHandler}
                style={{ backgroundColor: item.error && "red" }}
              >
                <option />
                <option> Mr </option>
                <option> Mrs </option>
                <option> Dr </option>
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
  );
};

export default Step1;

import { useState } from "react";
import { useSelector } from "react-redux";
let savedValue = {};
function getSavedData(key, key2) {
  savedValue = JSON.parse(localStorage.getItem(key));
  return !!savedValue ? savedValue[key2] : null;
}

function useLocalstorage(key1, key2) {
  const femail = useSelector((state) => state.auth.email);

  const [value, setValue] = useState(() =>
    getSavedData(`${key1}${femail}`, key2)
  );
  const setValuefunction = (key, object) => {
    const item = { ...savedValue, [key]: object };
    localStorage.setItem(`${key1}${femail}`, JSON.stringify(item));
    setValue(object);
  };

  return [value, setValuefunction];
}
export default useLocalstorage;

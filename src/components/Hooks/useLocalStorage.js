import { useState } from "react";
import { useSelector } from "react-redux";
let savedValue = {};
function getSavedData(key, key2) {
  savedValue = JSON.parse(localStorage.getItem(key));
  return !!savedValue ? savedValue[key2] : null;
}

function useLocalstorage(key1, key2) {
  const email = useSelector((state) => state.auth.authorisation.email);
  const femail = email.replace("@", "").replace(".", "");
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

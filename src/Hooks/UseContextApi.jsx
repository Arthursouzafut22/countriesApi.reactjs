import { createContext } from "react";
import { useResquestAxiosGet } from "../Hooks/UseQueryApi";
import { useState, useCallback } from "react";

export const UseContexto = createContext();

export const GlobalData = ({ children }) => {
  const { data, isLoading, error } = useResquestAxiosGet();
  const [dropAtivo, setdropAtivo] = useState(false);
  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const filterCountry = useCallback(
    ({ target }) => {
      if (data) {
        const filterType = data.filter(
          (item) => item.region === target.innerText
        );
        setCountry(filterType);
        return filterType;
      }
    },
    [data]
  );

  const changeCountry = ({ target }) => {
    const search = data?.filter((item) => {
      return item?.name?.toLowerCase().includes(target.value.toLowerCase());
    });
    setSearchCountry(search);
  };

  const [bkColor, setColor] = useState(false);
  const backgroundColor = {
    background: bkColor && "#3E4B56",
  };

  const colorWhite = {
    color: bkColor ? "#ffffff" : "#212121",
  };

  return (
    <UseContexto.Provider
      value={{
        data,
        isLoading,
        error,
        bkColor,
        setColor,
        backgroundColor,
        colorWhite,
        country,
        filterCountry,
        changeCountry,
        searchCountry,
        dropAtivo,
        setdropAtivo,
      }}
    >
      {children}
    </UseContexto.Provider>
  );
};

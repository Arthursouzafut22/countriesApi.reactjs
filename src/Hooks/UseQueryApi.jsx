import { useQuery } from "react-query";
import axios from "axios";

const resquestAxiosGet = async () => {
  const response = await axios.get("data.json");
  return response?.data;
};

export const useResquestAxiosGet = () => {
  const query = useQuery({
    queryFn: resquestAxiosGet,
    queryKey: ["resquest-axios"],
  });
  return query;
};

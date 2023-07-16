import axios from "axios";
import { useEffect, useState } from "react";
import BaseUrl from "../constant/BaseUrl";

export interface IGroceruItem {
  name: string;
  _id: string;
  user_id: number;
}

export default () => {
  const [items, setItems] = useState<IGroceruItem[]>([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getGroseryItems();
  }, []);
  const getGroseryItems = async () => {
    try {
      setloading(true);
      const res = await axios({
        url: BaseUrl + "/grocery",
      });
      console.log(res);

      setItems(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return {
    loading,
    items,
  };
};

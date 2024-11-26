// https://www.robinwieruch.de/react-hooks-fetch-data/

import { useEffect, useState } from "react";
import axios from "axios";

type Story = {
  objectID: string;
  title: string;
  url: string;
};

const API = "https://hn.algolia.com/api/v1/search";

export default function Page() {
  const [data, setData] = useState<Story[]>([]);
  const [search, setSearch] = useState("react");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const result = await axios.get(`${API}?query=react`, {
        signal: controller.signal
      });
      setData(result.data.hits);
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <input type="text" value={search} onChange={handleSearchChange} />
      <ul>
        {data.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

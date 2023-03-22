import React, {useEffect, useMemo, useState} from 'react';
import MaterialReactTable from 'material-react-table';
import axios from 'axios';


const Table = () => {
    const [posts, setPosts] = useState([]);
     const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // ✅ Эта строчка не зависит от внешней переменной `count`
    }, 5000);
    return () => clearInterval(id);
  }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'http://localhost:9090/table',
            );
            setPosts(result.data);
        };
        fetchData();
    }, [count]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'index',
        header: '№',
           size: 10
      },
      {
        accessorKey: 'order_number',
        header: '№ заказа',
           size: 100
      },
      {
        accessorKey: 'prices_in_dollars',
        header: 'Стоимость в USD',
          size: 50
      },
      {
        accessorKey: 'prices_in_rubles',
        header: 'Стоимость в RUB',
           size: 80,
      },
      {
        accessorKey: 'delivery_date',
        header: 'Дата поставки',
           size: 50
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={posts} classname={"Table"} />;

};

export default Table;

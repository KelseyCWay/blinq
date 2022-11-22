import { useEffect, useState } from "react";
import { Integration } from "../../types";
import { getIntegrationPath } from "../../utils";
import { IntegrationItem } from "../IntegrationItem";

export const IntegrationContainer = () => {
  const [data, setData] = useState<Integration[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(getIntegrationPath())
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const updateIntegration = (int: Integration) =>
    setData(data?.map((item) => (item?.id === int.id ? int : item)));

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No integrations available</p>;

  return (
    <>
      {data && data?.length
        ? data.map((intg: Integration) => (
            <IntegrationItem
              key={intg?.id}
              updateIntegration={updateIntegration}
              integration={intg}
            />
          ))
        : null}
    </>
  );
};

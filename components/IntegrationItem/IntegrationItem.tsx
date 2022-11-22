import { useState } from "react";
import { Integration } from "../../types";
import { getIntegrationPath } from "../../utils";
import { Button } from "../Button";
import { DialogContainer } from "../DialogContainer/DialogContainer";
import { IntegrationForm } from "../IntegrationForm";
import styles from "./IntegrationItem.module.css";

interface IntegrationItemProps {
  integration: Integration;
  updateIntegration: (values: Integration) => void;
}

export const IntegrationItem = ({
  integration,
  updateIntegration,
}: IntegrationItemProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (values: Integration) => {
    const jsonData = JSON.stringify(values);
    const endpoint = getIntegrationPath(values?.id);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };
    const response = await fetch(endpoint, options)
      .then((res) => res.json())
      .then((res) => {
        setOpen(false);
        updateIntegration(res);
        return res;
      });
    return response;
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>{integration.name}</div>
        <div className={styles.connection}>
          <div className={integration.isConnect ? styles.green : styles.grey}>
            {integration.isConnect ? "Connected" : "Not Connected"}
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => setOpen(true)}>Settings</Button>
        </div>
      </div>
      <DialogContainer
        title={integration.name}
        open={open}
        handleClick={() => setOpen(false)}
      >
        <IntegrationForm
          integration={integration}
          handleSubmit={handleSubmit}
        />
      </DialogContainer>
    </div>
  );
};

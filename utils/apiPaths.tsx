export const getIntegrationPath = (id?: string) =>
  `/api/integrations${id ? `/${id}` : ""}`;

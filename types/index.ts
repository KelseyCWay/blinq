export interface Integration {
  id: string;
  name: string;
  isConnect: boolean;
  fields: IntegrationField[];
}

export interface IntegrationField {
  id: string;
  name: string;
  displayName: string;
  value?: string;
  type?: "map" | "string";
  children?: IntegrationField[];
}

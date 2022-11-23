import { Integration } from "../types";

export interface User {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
}

export interface Contact {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  met_at_location: string;
  notes?: string;
}

export class Database {
  public static getUser(): User {
    return {
      id: "12345",
      given_name: "Jane",
      family_name: "Doe",
      email: "jane@blinq.me",
    };
  }

  public static getContacts(): Contact[] {
    return [
      {
        id: "1234",
        given_name: "Terry",
        family_name: "Walker",
        email: "terry@waffles.co",
        met_at_location: "Melbourne, Australia",
        notes: "Terry has a beard.",
      },
      {
        id: "1235",
        given_name: "Terry",
        family_name: "Walker",
        email: "terry@waffles.co",
        met_at_location: "Melbourne, Australia",
        notes: "Terry has a beard.",
      },
    ];
  }

  public static getIntegrations(): Integration[] {
    return [
      {
        id: "1",
        name: "Salesforce",
        isConnect: false,
        fields: [
          {
            id: "10",
            name: "client_id",
            displayName: "Client ID",
            value: "",
          },
          {
            id: "11",
            name: "client_secret",
            displayName: "Client Secret",
            value: "",
          },
        ],
      },
      {
        id: "2",
        name: "Zapier",
        isConnect: false,
        fields: [
          {
            id: "20",
            name: "api_key",
            displayName: "API Key",
            value: "",
          },
        ],
      },
      {
        id: "3",
        name: "HubSpot",
        isConnect: false,
        fields: [
          {
            id: "30",
            name: "tenant_domain",
            displayName: "Tenant Domain",
            value: "",
          },
          {
            id: "31",
            name: "client_id",
            displayName: "Client ID",
            value: "",
          },
          {
            id: "32",
            name: "client_secret",
            displayName: "Client Secret",
            value: "",
          },
          {
            id: "33",
            name: "field_mappings",
            displayName: "Field Mappings",
            value: "",
            type: "map",
            children: [
              {
                id: "330",
                name: "given_name",
                displayName: "Given Name",
                value: "",
              },
              {
                id: "331",
                name: "family_name",
                displayName: "Family Name",
                value: "",
              },
              {
                id: "332",
                name: "email",
                displayName: "Email",
                value: "",
              },
              {
                id: "333",
                name: "met_at_location",
                displayName: "Met At Location",
                value: "",
              },
              {
                id: "334",
                name: "notes",
                displayName: "Notes",
                value: "",
              },
            ],
          },
        ],
      },
    ];
  }
}

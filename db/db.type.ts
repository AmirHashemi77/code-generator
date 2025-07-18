type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiEndpoint {
  method: HTTPMethod;
  path: string;
}

interface ApiBindings {
  [key: string]: {
    [operation: string]: ApiEndpoint;
  };
}

interface Theme {
  primaryColor: string;
  font: string;
}

interface NavigationItem {
  title: string;
  path: string;
  icon: string;
}

interface Event {
  action: "navigateTo" | "callApi";
  path?: string;
  endpoint?: string;
  confirm?: string;
  onSuccess?: Event;
}

// ✅ ButtonComponent
interface ButtonComponent {
  component: "Button";
  properties: {
    label: string;
    variant: string;
    icon?: string;
  };
  events?: {
    onClick?: Event;
  };
}

// ✅ HeaderComponent
interface HeaderComponent {
  component: "Header";
  properties: {
    title: string;
    actions?: Component[];
  };
}

// ✅ DataTable
interface DataTableColumn {
  field: string;
  header: string;
  format?: string;
}

interface RowAction {
  icon: string;
  action: "navigateTo" | "callApi";
  path?: string;
  endpoint?: string;
  confirm?: string;
}

interface DataTableComponent {
  component: "DataTable";
  properties: {
    dataSource: string;
    columns: DataTableColumn[];
    rowActions?: RowAction[];
  };
}

// ✅ Grid
interface GridComponent {
  component: "Grid";
  properties: {
    columns: number;
    gap: string;
    items: Component[];
  };
}

// ✅ Form
interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  dataSource?: string;
  valueField?: string;
  labelField?: string;
}

interface FormComponent {
  component: "Form";
  properties: {
    dataSource: string;
    onSubmit: Event;
    fields: FormField[];
  };
}

// ✅ Union of all components (Discriminated)
export type Component = HeaderComponent | DataTableComponent | GridComponent | FormComponent | ButtonComponent;

// ✅ Page
interface Page {
  name: string;
  path: string;
  header?: HeaderComponent;
  content: Component[];
}

// ✅ Final App
interface FrontendAppSpec {
  theme: Theme;
  apiBindings: ApiBindings;
  navigation: NavigationItem[];
  pages: Page[];
}

export interface FrontendApp {
  apiVersion: string;
  kind: "FrontendApp";
  metadata: {
    name: string;
  };
  spec: FrontendAppSpec;
}

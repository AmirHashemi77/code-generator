interface ActionEvent {
  action: string;
  path?: string;
}

interface ActionEvents {
  onClick?: ActionEvent;
  [eventName: string]: ActionEvent | undefined;
}

interface ActionProperties {
  label?: string;
  variant?: string;
  icon?: string;
}

interface ActionType {
  component: string;
  properties?: ActionProperties;
  events?: ActionEvents;
}

export type ActionListType = ActionType[];

export interface Menu {
  id?: string;
  label: string;
  reference?: string;
  iconName?: string;
  subMenus?: Menu[];
}

import { User } from "graphql";

export type EditProfileProps = {
  userData: Partial<User> & { phone?: string };
  dobVisible: boolean;
  modalVisible: boolean;
  modalTitle: string;
  modalDefault: string;
  modalButtonLoading: boolean;
  onPressEdit: (key: string, defaultValue?: string) => void;
  onSavePopup: (input: string) => void;
  onConfirmDob: (birthday: Date) => void;
  onCancelPopup: () => void;
  onCancelDob: () => void;
};

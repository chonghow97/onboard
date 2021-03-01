// stores props used in rendering component.tsx, passed from index.tsx
export interface ProfileProps {
  onChangeFirstname: (firstName: string) => void;
  onChangeLastname: (lastName: string) => void;
  onChangeCountryCode: (country) => void;
  onChangePhoneNumber: (phoneNumber: string) => void;
  onConfirmDob: (birthday: Date) => void;
  onSubmit: (data) => void;
  handleSubmit: any;
  watch: (names?: string | string[]) => any;
  errors: Record<string, unknown>;
}

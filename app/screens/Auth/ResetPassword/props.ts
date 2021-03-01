// stores props used in rendering component.tsx, passed from index.tsx
export interface ResetPasswordProps {
  onChangePassword: (password: string) => void;
  onChangeConfirmPassword: (confirmPassword: string) => void;
  onSubmit: (data) => void;
  handleSubmit: any;
  watch: (names?: string | string[]) => any;
  errors: Record<string, unknown>;
}

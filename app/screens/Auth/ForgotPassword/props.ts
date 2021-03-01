// stores props used in rendering component.tsx, passed from index.tsx
export interface ForgotPasswordProps {
  onChangeEmail: (email: string) => void;
  onPressSend: (data) => void;
  handleSubmit: any;
  watch: (names?: string | string[]) => any;
  errors: Record<string, unknown>;
}

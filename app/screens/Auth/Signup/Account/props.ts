// stores props used in rendering component.tsx, passed from index.tsx
export interface AccountProps {
  onChangeEmail: (email: string) => void;
  onChangeUsername: (username: string) => void;
  onSubmit: (data) => void;
  handleSubmit: any;
  errors: Record<string, unknown>;
}

// stores props used in rendering component.tsx, passed from index.tsx
export interface VerificationProps {
  email: string;
  onPressSend: () => void;
  onChangeCode: (code: number) => void;
  onPressResend: () => void;
  otpCounter: number;
  buttonDisabled: boolean;
}

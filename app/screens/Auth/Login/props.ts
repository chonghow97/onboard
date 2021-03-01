export type LoginProps = {
  /**
   * Button loading when api running
   */
  buttonLoading?: boolean;

  /**
   * When user is typing in email field
   */
  onChangeEmail(email: string): void;
  /**
   * When user is typing in email field
   */
  onChangePassword(password: string): void;

  /**
   * Handles on press Login button
   */
  onLogin(): void;

  /**
   * Handles on press signup
   */
  onPressSignup(): void;

  /**
   * Handles on press forgoet password
   */
  onPressForgetPassword(): void;
};

import { ViewProps } from "react-native";
import { CountryCode, Country } from "react-native-country-picker-modal";
// stores component props
export interface PhoneNumberInputProps extends ViewProps {
  /**
   * Current country code
   */
  countryCode: CountryCode;

  /**
   * callback when chooses country code
   */
  onChangeCountryCode: (country: Country) => void;

  /**
   *  callback when user enters phone number
   */
  onChangePhoneNumber: (phoneNumber: string) => void;

  /**
   * Change border of input to red when error
   */
  error?: boolean;

  /**
   * Show calling code when selection
   */
  withCallingCode?: boolean;

  /**
   * Show calling code on button
   */
  withCallingCodeButton?: boolean;

  /**
   * Enable alpha filter
   */
  withAlphaFilter?: boolean;

  /**
   * Enable filter
   */
  withFilter?: boolean;
}

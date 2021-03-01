import { contains } from "ramda";

const ValidateJS = require("validate.js");

// HACK(steve): wierd typescript situation because of strange typings
// disable-eslint-next-line
const Validate = ValidateJS.default ? ValidateJS.default : ValidateJS;

/**
 * Validates that 1 attribute doesn't appear in another's attributes content.
 */
// disable-eslint-next-line
Validate.validators.excludes = function custom(
  value,
  options,
  key,
  attributes
) {
  const list = attributes[options.attribute] || [];
  if (value && contains(value, list)) {
    return options.message || `${value} is in the list`;
  }
  return null;
};

/**
 * Validates that another attribute isn't true.
 */
// disable-eslint-next-line
Validate.validators.tripped = function custom(value, options, key, attributes) {
  if (value && attributes[options.attribute] === true) {
    return options.message || `${options.attribute} is true`;
  }
  return null;
};

/**
 * Defines the rules for validating.
 *
 * Example:
 * ```ts
 * const RULES = {
 *   favoriteBand: {
 *     inclusion: { ['Weezer', 'Other'], message: 'Pick wisely.' }
 *   },
 *   name: {
 *     presence: { message: 'A developer has no name?' }
 *   }
 * }
 * validate(RULES, {})
 * ```
 *
 * See https://validatejs.org/#validators for more examples.
 *
 */
export interface ValidationRules {
  [key: string]: any; // eslint-disable-line
}

/**
 * An object containing any errors found.
 *
 * Example:
 * ```js
 * {
 *   email: ['Invalid email address.'],
 *   password: [
 *     'Password must be 6 characters.',
 *     'Password must have at least 1 digit.'
 *   ]
 * }
 * ```
 */
export interface ValidationErrors {
  [key: string]: any; // eslint-disable-line
}

/**
 * Runs the given rules against the data object.
 *
 * @param rules The rules to apply.
 * @param data The object to validate.
 */
export function validate(
  rules: ValidationRules,
  data: any /* eslint-disable-line */
): ValidationErrors {
  if (typeof data !== "object") {
    return {} as ValidationErrors;
  }
  return Validate(data, rules, { fullMessages: false }) || {};
}

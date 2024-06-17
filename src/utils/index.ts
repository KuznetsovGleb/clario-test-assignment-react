export enum PasswordRule {
  LENGTH = "length",
  LETTERS = "letters",
  DIGIT = "digit",
}

export const PASSWORD_MESSAGES = {
  [PasswordRule.LENGTH]: "8 characters or more (no spaces)",
  [PasswordRule.LETTERS]: "Uppercase and lowercase letters",
  [PasswordRule.DIGIT]: "At least one digit",
};

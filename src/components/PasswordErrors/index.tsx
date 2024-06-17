import { FC } from "react";
import { PASSWORD_MESSAGES, PasswordRule } from "../../utils";
import cx from "classnames";

import styles from "./index.module.scss";

type Props = {
  errors: PasswordRule[];
  isFieldTouched: boolean;
};

export const PasswordErrors: FC<Props> = ({ errors, isFieldTouched }) => {
  return (
    <div>
      {Object.values(PasswordRule).map((item) => {
        return (
          <p
            key={item}
            className={cx(styles.text, {
              [styles.error]: errors?.includes(item),
              [styles.success]: isFieldTouched && !errors?.includes(item),
            })}
          >
            {PASSWORD_MESSAGES[item]}
          </p>
        );
      })}
    </div>
  );
};

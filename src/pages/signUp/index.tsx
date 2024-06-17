import { FC } from "react";
import { SignUpForm } from "../../components/SignUpForm";

import styles from "./index.module.scss";

export const SignUpPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <SignUpForm />
    </div>
  );
};

import { FC } from "react";
import { Button, Form, Input, message } from "antd";
import EyeVisibleIcon from "../../assets/icons/eye-visible.svg?react";
import EyeInvisibleIcon from "../../assets/icons/eye-invisible.svg?react";
import { PasswordErrors } from "../PasswordErrors";
import { PasswordRule } from "../../utils";

import styles from "./index.module.scss";

export const SignUpForm: FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = () => {
    messageApi.success("Sign up success");
  };

  return (
    <div className={styles.wrapper}>
      {contextHolder}
      <h1 className={styles.title}>Sign up</h1>
      <Form onFinish={handleSubmit} form={form} className={styles.form}>
        {(_values, formInstance) => {
          const passwordErrors = formInstance.getFieldError(["password"]);
          const isPasswordTouched = formInstance.isFieldTouched(["password"]);
          const isPasswordValidating = formInstance.isFieldValidating([
            "password",
          ]);

          return (
            <>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
                validateTrigger={"onSubmit"}
                // hasFeedback
                className={styles.emailFormItem}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: PasswordRule.LENGTH,
                    whitespace: true,
                    pattern: new RegExp(/^\S{8,64}$/),
                  },
                  {
                    required: true,
                    message: PasswordRule.DIGIT,
                    pattern: new RegExp(/(?=.*\d)/),
                  },
                  {
                    required: true,
                    message: PasswordRule.LETTERS,
                    pattern: new RegExp(/(?=.*[A-Z])(?=.*[a-z])/),
                  },
                ]}
                className={styles.passwordFormItem}
              >
                <Input.Password
                  placeholder="Create your password"
                  size="large"
                  iconRender={(visible) =>
                    visible ? <EyeVisibleIcon /> : <EyeInvisibleIcon />
                  }
                />
              </Form.Item>

              <PasswordErrors
                errors={passwordErrors as PasswordRule[]}
                isFieldTouched={isPasswordTouched || isPasswordValidating}
              />

              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                Sign up
              </Button>
            </>
          );
        }}
      </Form>
    </div>
  );
};

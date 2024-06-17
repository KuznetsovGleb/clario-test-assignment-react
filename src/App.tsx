import { FC } from "react";
import { ConfigProvider } from "antd";
import { SignUpPage } from "./pages/signUp";

export const App: FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorError: "#ff8080",
          borderRadiusLG: 10,
          colorSuccess: "#27B274",
        },
      }}
    >
      <SignUpPage />
    </ConfigProvider>
  );
};

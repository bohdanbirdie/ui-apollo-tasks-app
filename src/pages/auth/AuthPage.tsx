import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Layout as AntdLayout,
  Row,
  Col,
  Card
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import {
  useLoginMutation,
  useSignupMutation,
  LoginMutationResult,
  SignupMutationResult,
  useSetSessionMutation,
  useGetSessionQuery
} from "../../generated/graphql";
import { useQueryParams } from "../../hooks/use-query-params";
import { useHistory } from "react-router-dom";

const { Content } = AntdLayout;

const tabList = [
  {
    key: "login",
    tab: "Log in"
  },
  {
    key: "signup",
    tab: "Sign up"
  }
];

export const AuthPage = () => {
  const { data, client } = useGetSessionQuery();
  const history = useHistory();
  const [loginMutation] = useLoginMutation();
  const [signupMutation] = useSignupMutation();
  const [setSessionMutation] = useSetSessionMutation();
  const [getQueryParam, setQueryParam] = useQueryParams();
  const currentTab = getQueryParam("tab", "login");

  useEffect(() => {
    if (!getQueryParam("tab", "")) {
      setQueryParam("tab", "login");
    }

    if (data?.session) {
      history.replace("/");
    }
    client.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payload = {
    login: {
      action: loginMutation,
      submitTitle: "Log in"
    },
    signup: {
      action: signupMutation,
      submitTitle: "Sign up"
    }
  };

  const { action, submitTitle } = payload[currentTab as "login" | "signup"];

  const onSubmit = async ({
    username,
    password
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const result = await action({
        variables: { localAuthPayload: { username, password } }
      });
      const data = result.data || {};
      let access_token;

      if ("login" in data) {
        access_token = (result as LoginMutationResult).data?.login.access_token;
      }

      if ("signup" in data) {
        access_token = (result as SignupMutationResult).data?.signup
          .access_token;
      }

      if (access_token) {
        await setSessionMutation({ variables: { access_token } });
        history.replace("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AntdLayout className="layout">
      <Content>
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col span={8}>
            <Card
              style={{ width: "100%" }}
              tabList={tabList}
              activeTabKey={currentTab}
              onTabChange={key => setQueryParam("tab", key)}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={values => {
                  onSubmit(values as { username: string; password: string });
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" }
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    {submitTitle}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </AntdLayout>
  );
};

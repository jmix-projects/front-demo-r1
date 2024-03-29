import { LogoutOutlined } from "@ant-design/icons";
import { Button, Space, Modal } from "antd";
import React, { useCallback } from "react";
import { observer } from "mobx-react";
import "./AppHeader.css";
import {redirect, tabs, useMainStore} from "@haulmont/jmix-react-core";
import { LanguageSwitcher } from "../../i18n/LanguageSwitcher";
import { useIntl } from "react-intl";
import JmixLightIcon from "../icons/JmixLightIcon";

const AppHeader = observer(({ children }: { children?: React.ReactNode }) => {
  const intl = useIntl();
  const mainStore = useMainStore();

  const showLogoutConfirm = useCallback(() => {
    Modal.confirm({
      title: intl.formatMessage({ id: "header.logout.areYouSure" }),
      okText: intl.formatMessage({ id: "header.logout.ok" }),
      cancelText: intl.formatMessage({ id: "header.logout.cancel" }),
      onOk: () => {
        mainStore.logout().then(() => {
          tabs.closeAll();
          redirect('/');
        })
      }
    });
  }, [mainStore, intl]);

  return (
    <div className="app-header">
      <JmixLightIcon className="app-header__icon" />

      <div className="app-header__content">{children}</div>

      <Space className="app-header__user-panel">
        <LanguageSwitcher className="language-switcher -header" />
        <span>{mainStore.userName}</span>
        <Button
          id="button_logout"
          className="app-header__user-panel__logout-btn"
          type="text"
          icon={<LogoutOutlined />}
          onClick={showLogoutConfirm}
        />
      </Space>
    </div>
  );
});

export default AppHeader;

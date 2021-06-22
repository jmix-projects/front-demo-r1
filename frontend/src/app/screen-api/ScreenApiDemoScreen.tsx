import React from "react";
import {modals, notifications, registerScreen} from "@haulmont/jmix-react-ui";
import {Button, Card, Space} from "antd";
import {CheckOutlined, CloseCircleOutlined, WarningOutlined} from "@ant-design/icons";
import {tabs, useScreens} from "@haulmont/jmix-react-core";
import {NotificationType} from "@haulmont/jmix-react-ui";
import {observer} from "mobx-react";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const ROUTING_PATH = "/screenApiDemoScreen";

export const ScreenApiDemoScreen = observer(() => {

  const screens = useScreens();

  return (
    <Space direction={"vertical"} style={{width: "100%"}}>
      <Card title={"Notifications"}>
        <Space direction={"horizontal"}>
          <Button onClick={() => {
            notifications.show({
              title: 'Notification Title',
              description: "Notification Message"
            })
          }}>
            Show Notification
          </Button>
          <Button icon={<CloseCircleOutlined/>} onClick={() => {
            notifications.show({
              type: NotificationType.ERROR,
              title: 'Error',
              description: "Error Message"
            })
          }}>
            Show Error
          </Button>
          <Button icon={<WarningOutlined/>} onClick={() => {
            notifications.show({
              type: NotificationType.WARNING,
              title: 'Warning',
              description: "Warning Message",
            })
          }}>
            Show Warning
          </Button>
          <Button icon={<CheckOutlined/>} onClick={() => {
            notifications.show({
              type: NotificationType.SUCCESS,
              title: 'Success',
              description: "Warning Success",
            })
          }}>
            Show Success
          </Button>
        </Space>
        <br/>
        <br/>
        <Space direction={"horizontal"}>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'topLeft'
            })
          }}>
            Top Left
          </Button>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'topRight'
            })
          }}>
            Top Right
          </Button>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'bottomLeft'
            })
          }}>
            Bottom Left
          </Button>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'bottomRight'
            })
          }}>
            Bottom Right
          </Button>
        </Space>
        <br/>
        <br/>
        <Button onClick={() => notifications.closeAll()}>Close all</Button>
      </Card>
      <Card title={'Modals'}>
        <Button onClick={() =>
          modals.open({
            title: "Modal title",
            content: "Modal content",
            onOk: () => {
              alert('OK Pressed')
            },
            onCancel: () => {
              alert('Cancel Pressed')
            }
          })}>
          Open modal
        </Button>
      </Card>
      <Card title={'Screen API'}>
        <Paragraph>
          Screens opened in current tab
          {JSON.stringify(screens.screens.map(screen => screen.title))}
          <Button onClick={() => screens.push({title: 'New Screen', content: 'Content'})}>
            Open screen in current tab
          </Button>
        </Paragraph>
        <Title level={5}>
          Opened tabs</Title>
        <Paragraph>
          : {JSON.stringify(tabs.tabs)}
        </Paragraph>
        <Button danger={true} icon={<CloseCircleOutlined/>} onClick={tabs.closeAll}>Close all tabs</Button>
      </Card>
    </Space>
  )
});


registerScreen({
  component: ScreenApiDemoScreen,
  caption: "Screen API",
  screenId: "ScreenApiDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

import {Category, Component, Palette, Previews, Variant} from "@haulmont/react-ide-toolbox";
import React from "react";

// Typography
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Editable from "antd/es/typography/Editable";

// Buttons
import Button from "antd/es/button/button";
import ButtonGroup from "antd/es/button/button-group";

// Alert
import Alert from "antd/es/alert";

// Inputs
import AutoComplete from "antd/es/auto-complete"
import Input from "antd/es/input"
import InputNumber from "antd/es/input-number"

// Navigation
import {
  Affix,
  Breadcrumb,
  Dropdown,
  Menu,
  PageHeader,
  Pagination,
  Steps,
  Cascader,
  Checkbox,
  DatePicker,
  Radio
} from "antd/es";

// Icons
import {MailOutlined, SettingOutlined, AppstoreOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Calendar, Card, Carousel, Collapse, Descriptions, Drawer, Empty,
  Form, Image, List,
  Mentions, message, Modal, notification, Popconfirm, Popover, Progress,
  Rate, Result,
  Select, Skeleton,
  Slider, Spin, Statistic,
  Switch, Table, Tabs, Tag, Timeline,
  TimePicker, Tooltip, Tree,
  TreeSelect,
  Upload
} from "antd";

export const AntdPalette = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Palette>
      <Category name="Typography">
        <Component name="Title">
          <Variant requiredParams={["level"]}>
            <Title/>
          </Variant>
        </Component>
        <Component name="Text">
          <Variant>
            <Text/>
          </Variant>
          <Variant name="Code">
            <Text code={true}></Text>
          </Variant>
        </Component>
        <Component name="Link">
          <Variant>
            <Link href="" target="_blank"/>
          </Variant>
        </Component>
        <Component name="Paragraph">
          <Variant>
            <Paragraph/>
          </Variant>
        </Component>
        <Component name="Editable">
          <Variant>
            <Editable value="Some value" onCancel={() => {
            }} onSave={() => {
            }}/>
          </Variant>
        </Component>
      </Category>
      <Category name="Buttons">
        <Component name="Button">
          <Variant>
            <Button value="Button"/>
          </Variant>
        </Component>
        <Component name="ButtonGroup">
          <Variant>
            <ButtonGroup>
              <Button value="Button 1"/>
              <Button value="Button 2"/>
              <Button value="Button 3"/>
            </ButtonGroup>
          </Variant>
        </Component>
      </Category>
      <Category name="Alerts">
        <Component name="Alert">
          <Variant name="Success">
            <Alert message="Success Text" type="success"/>
          </Variant>
          <Variant name="Info">
            <Alert message="Info Text" type="info"/>
          </Variant>
          <Variant name="Warning">
            <Alert message="Warning Text" type="warning"/>
          </Variant>
          <Variant name="Error">
            <Alert message="Error Text" type="error"/>
          </Variant>
        </Component>
      </Category>
      <Category name="Datepickers">
        <Component name="Datepicker">
          <Variant name="Full date">
            <DatePicker/>
          </Variant>
          <Variant name="Week">
            <DatePicker picker="week"/>
          </Variant>
          <Variant name="Month">
            <DatePicker picker="month"/>
          </Variant>
          <Variant name="Quarter">
            <DatePicker picker="quarter"/>
          </Variant>
          <Variant name="Year">
            <DatePicker picker="year"/>
          </Variant>
        </Component>
        <Component name="Timepicker">
          <Variant name="UTC">
            <TimePicker onChange={() => {
            }}/>
          </Variant>
        </Component>
      </Category>
      <Category name="Navigation">
        <Component name="Affix">
          <Variant>
            <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
              <Button>120px to affix top</Button>
            </Affix>
          </Variant>
        </Component>
        <Component name="Breadcrumb">
          <Variant>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
          </Variant>
        </Component>
        <Component name="Page Header">
          <Variant>
            <PageHeader
              className="site-page-header"
              onBack={() => null}
              title="Title"
              subTitle="This is a subtitle"
            />
          </Variant>
        </Component>
        <Component name="Pagination">
          <Variant>
            <Pagination defaultCurrent={1} total={50}/>
          </Variant>
        </Component>
        <Component name="Steps">
          <Variant>
            <Steps current={1}>
              <Steps.Step title="Finished" description="This is a description."/>
              <Steps.Step title="In Progress" subTitle="Left 00:00:08" description="This is a description."/>
              <Steps.Step title="Waiting" description="This is a description."/>
            </Steps>
          </Variant>
        </Component>
      </Category>
      <Category name="Menus">
        <Component name="Dropdown">
          <Variant name="Bottom left">
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button>bottomLeft</Button>
            </Dropdown>
          </Variant>
          <Variant name="Bottom center">
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>bottomCenter</Button>
            </Dropdown>
          </Variant>
          <Variant name="Bottom right">
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>bottomRight</Button>
            </Dropdown>
          </Variant>
        </Component>
        <Component name="Menu">
          <Variant>
            <Menu onClick={() => {
            }} mode="horizontal">
              <Menu.Item key="mail" icon={<MailOutlined/>}>
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled icon={<AppstoreOutlined/>}>
                Navigation Two
              </Menu.Item>
              <Menu.SubMenu key="SubMenu" icon={<SettingOutlined/>} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </Menu>
          </Variant>
        </Component>
      </Category>
      <Category name="Data entries">
        <Component name="Autocomplete">
          <Variant>
            <AutoComplete/>
          </Variant>
        </Component>
        <Component name="Input">
          <Variant>
            <Input/>
          </Variant>
        </Component>
        <Component name="Input Number">
          <Variant>
            <InputNumber/>
          </Variant>
        </Component>
        <Component name="Cascader">
          <Variant>
            <Cascader options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]} placeholder="Please select"/>
          </Variant>
        </Component>
        <Component name="Checkbox">
          <Variant>
            <Checkbox>Checkbox</Checkbox>
          </Variant>
        </Component>
        <Component name="Mentions">
          <Variant>
            <Mentions
              style={{width: '100%'}}
              onChange={() => {
              }}
              onSelect={() => {
              }}
              defaultValue="@afc163"
            >
              <Mentions.Option value="afc163">afc163</Mentions.Option>
              <Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
              <Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
            </Mentions>
          </Variant>
        </Component>
        <Component name="Radio">
          <Variant>
            <Radio.Group onChange={() => {
            }} value={"val"}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </Variant>
        </Component>
        <Component name="Rate">
          <Variant>
            <Rate/>
          </Variant>
        </Component>
        <Component name="Select">
          <Variant>
            <Select defaultValue="lucy" style={{width: 120}} onChange={() => {
            }}>
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="disabled" disabled>
                Disabled
              </Select.Option>
              <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
          </Variant>
        </Component>
        <Component name="Slider">
          <Variant>
            <Slider defaultValue={30}/>
          </Variant>
        </Component>
        <Component name="Switch">
          <Variant>
            <Switch defaultChecked onChange={() => {
            }}/>
          </Variant>
        </Component>
        <Component name="TreeSelect">
          <Variant>
            <TreeSelect
              showSearch
              style={{width: '100%'}}
              value={"val"}
              dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
              placeholder="Please select"
              allowClear
              treeDefaultExpandAll
              onChange={() => {
              }}
            >
              <TreeSelect.TreeNode value="parent 1" title="parent 1">
                <TreeSelect.TreeNode value="parent 1-0" title="parent 1-0">
                  <TreeSelect.TreeNode value="leaf1" title="leaf1"/>
                  <TreeSelect.TreeNode value="leaf2" title="leaf2"/>
                </TreeSelect.TreeNode>
                <TreeSelect.TreeNode value="parent 1-1" title="parent 1-1">
                  <TreeSelect.TreeNode value="leaf3" title={<b style={{color: '#08c'}}>leaf3</b>}/>
                </TreeSelect.TreeNode>
              </TreeSelect.TreeNode>
            </TreeSelect>
          </Variant>
        </Component>
        <Component name="Upload">
          <Variant>
            <Upload>
              <Button icon={<UploadOutlined/>}>Click to Upload</Button>
            </Upload>
          </Variant>
        </Component>
        <Component name="Form">
          <Variant>
            <Form>
              <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
              >
                <Input.Password/>
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Variant>
        </Component>
      </Category>
      <Category name="Data display">
        <Component name="Avatar">
          <Variant>
            <Avatar size={64} icon={<UserOutlined/>}/>
          </Variant>
        </Component>
        <Component name="Badge">
          <Variant>
            <Badge count={5}>
              <a href="#" className="head-example"/>
            </Badge>
          </Variant>
        </Component>
        <Component name="Calendar">
          <Variant>
            <Calendar/>
          </Variant>
        </Component>
        <Component name="Card">
          <Variant>
            <Card>
              Card content is here
            </Card>
          </Variant>
        </Component>
        <Component name="Carousel">
          <Variant>
            <Carousel afterChange={() => {
            }}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
            </Carousel>
          </Variant>
        </Component>
        <Component name="Collapse">
          <Variant>
            <Collapse defaultActiveKey={['1']} onChange={() => {
            }}>
              <Collapse.Panel header="This is panel header 1" key="1">
                <p>1</p>
              </Collapse.Panel>
              <Collapse.Panel header="This is panel header 2" key="2">
                <p>2</p>
              </Collapse.Panel>
              <Collapse.Panel header="This is panel header 3" key="3">
                <p>3</p>
              </Collapse.Panel>
            </Collapse>
          </Variant>
        </Component>
        <Component name="Descriptions">
          <Variant>
            <Descriptions title="User Info">
              <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
              <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
              <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
          </Variant>
        </Component>
        <Component name="Empty">
          <Variant>
            <Empty/>
          </Variant>
        </Component>
        <Component name="Image">
          <Variant>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Variant>
        </Component>
        <Component name="List">
          <Variant>
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={[
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
              ]}
              renderItem={item => (
                <List.Item>
                  <Text mark>[ITEM]</Text> {item}
                </List.Item>
              )}
            />
          </Variant>
        </Component>
        <Component name="Popover">
          <Variant>
            <Popover content={<div>
              <p>Content</p>
              <p>Content</p>
            </div>} title="Title">
              <Button type="primary">Hover me</Button>
            </Popover>
          </Variant>
        </Component>
        <Component name="Statistic">
          <Variant>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2}/>
          </Variant>
        </Component>
        <Component name="Table">
          <Variant>
            <Table dataSource={[
              {
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street',
              },
              {
                key: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street',
              },
            ]} columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
              },
            ]}/>
          </Variant>
        </Component>
        <Component name="Tabs">
          <Variant>
            <Tabs defaultActiveKey="1" onChange={() => {
            }}>
              <Tabs.TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </Tabs.TabPane>
            </Tabs>
          </Variant>
        </Component>
        <Component name="Tag">
          <Variant>
            <Tag>Tag</Tag>
          </Variant>
        </Component>
        <Component name="Timeline">
          <Variant>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
          </Variant>
        </Component>
        <Component name="Tooltip">
          <Variant>
            <Tooltip placement="topLeft" title="Prompt Text">
              <Button>Align edge / 边缘对齐</Button>
            </Tooltip>
          </Variant>
        </Component>
        <Component name="Tree">
          <Variant>
            <Tree
              checkable
              defaultExpandedKeys={['0-0-0', '0-0-1']}
              defaultSelectedKeys={['0-0-0', '0-0-1']}
              defaultCheckedKeys={['0-0-0', '0-0-1']}
              onSelect={() => {
              }}
              onCheck={() => {
              }}
              treeData={[
                {
                  title: 'parent 1',
                  key: '0-0',
                  children: [
                    {
                      title: 'parent 1-0',
                      key: '0-0-0',
                      disabled: true,
                      children: [
                        {
                          title: 'leaf',
                          key: '0-0-0-0',
                          disableCheckbox: true,
                        },
                        {
                          title: 'leaf',
                          key: '0-0-0-1',
                        },
                      ],
                    },
                    {
                      title: 'parent 1-1',
                      key: '0-0-1',
                      children: [{title: <span style={{color: '#1890ff'}}>sss</span>, key: '0-0-1-0'}],
                    },
                  ],
                },
              ]}
            />
          </Variant>
        </Component>
      </Category>
      <Category name="Feedback">
        <Component name="Drawer">
          <Variant>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={() => {
              }}
              visible={false}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </Variant>
        </Component>
        <Component name="Message">
          <Variant>
            <Button type="primary" onClick={() => {
              message.info('This is a normal message');
            }}>
              Display normal message
            </Button>,
          </Variant>
        </Component>
        <Component name="Modal">
          <Variant>
            <Modal title="Basic Modal" visible={false} onOk={() => {
            }} onCancel={() => {
            }}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Variant>
        </Component>
        <Component name="Notification">
          <Variant>
            <Button type="primary" onClick={() => {
              notification.open({
                message: 'Notification Title',
                description:
                  'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
            }}>
              Open the notification box
            </Button>
          </Variant>
        </Component>
        <Component name="Popconfirm">
          <Variant>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={() => message.success('Click on Yes')}
              onCancel={() => message.error('Click on No')}
              okText="Yes"
              cancelText="No"
            >
              <a href="#">Delete</a>
            </Popconfirm>
          </Variant>
        </Component>
        <Component name="Progress">
          <Variant><Progress percent={30}/></Variant>
          <Variant name="Active"> <Progress percent={50} status="active"/></Variant>
          <Variant name="Exception"><Progress percent={70} status="exception"/></Variant>
          <Variant name="100%"><Progress percent={100}/></Variant>
          <Variant name="Without info"><Progress percent={50} showInfo={false}/></Variant>
        </Component>
        <Component name="Result">
          <Variant>
            <Result
              status="success"
              title="Successfully Purchased Cloud Server ECS!"
              subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
              extra={[
                <Button type="primary" key="console">
                  Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
              ]}
            />
          </Variant>
        </Component>
        <Component name="Skeleton">
          <Variant>
            <Skeleton/>
          </Variant>
        </Component>
        <Component name="Spin">
          <Variant>
            <Spin/>
          </Variant>
        </Component>
      </Category>
    </Palette>
  );
}
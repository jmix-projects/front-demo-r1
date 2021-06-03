import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";
import Title from "antd/lib/typography/Title";

export const JsxTreeDemoScreen = () => (
  <div>
    <Title level={3}>Conditionals</Title>
    <ConditionalComponent1/>
    <ConditionalComponent2/>
    <ConditionalComponent3/>
    <ConditionalComponent4/>
    <ConditionalComponent5/>
    <TernaryComponent/>
    <SwitchComponent/>
    <br/>
    <br/>
    <Title level={3}>Mapping</Title>
    <ComponentWithMap/>
    <br/>
    <Title level={3}>JSX Elements in variables</Title>
    <JsxElementsComponent/>
    <JsxArrayComponent/>
    <br/>
    <Title level={3}>Render Function Component</Title>
    <RenderFunctionComponent/>
  </div>
);

export const ConditionalComponent1: React.FC = () => {
  const rndNmb = Math.random() * 4;

  if (rndNmb > 0 && rndNmb < 1) {
    return <div>I'm div. between 0 and 1 </div>
  } else if (rndNmb > 1 && rndNmb < 2) {
    return <span>I'm span. between 1 and 2 </span>
  } else if (rndNmb > 2 && rndNmb < 3) {
    return <p> I'm p. between 2 and 3 </p>
  } else {
    return <strong> I'm strong. between 3 and 4 </strong>
  }
}

export const ConditionalComponent2: React.FC = () => {
  const rndNmb = Math.random() * 4;

  if (rndNmb > 0 && rndNmb < 1) {
    return <div>I'm div. between 0 and 1 </div>
  } else if (rndNmb > 1 && rndNmb < 2) {
    return <span>I'm span. between 1 and 2 </span>
  } else if (rndNmb > 2 && rndNmb < 3) {
    return <p> I'm p. between 2 and 3 </p>
  }

  return <strong> I'm strong. between 3 and 4 </strong>
}

export const ConditionalComponent3: React.FC = () => {
  const rndNmb = Math.random() * 4;

  if (rndNmb > 0 && rndNmb < 1) {
    return <div>I'm div. between 0 and 1 </div>
  } else {
    return <strong> I'm strong. more than 1 </strong>
  }
}

export const ConditionalComponent4: React.FC = () => {
  const rndNmb = Math.random() * 4;

  if (rndNmb > 0 && rndNmb < 1) {
    return <div>I'm div. between 0 and 1 </div>
  }

  return <strong> I'm strong. more than 1 </strong>

}

export const ConditionalComponent5: React.FC = () => {
  const rndNmb = Math.random() * 4;
  return (
    <div>
      {
        rndNmb > 0 && (
          <span>I'm span</span>
        )
      }
    </div>
  )
}

export const TernaryComponent: React.FC = () => {

  const rndCondition: boolean = Math.random() > 0.5;

  return (
    <div>
      {rndCondition ? <p>I'am p. true condition </p> : <span>I'am span. false condition</span>}
    </div>
  )
}

export const SwitchComponent: React.FC = () => {

  const lettersArr: string[] = ['a','b','c']
  const rndNmb: number = Math.floor(Math.random() * Math.floor(4));
  const rndCase: string = lettersArr[rndNmb]

  switch (rndCase) {
    case 'a': return <div>I'am div. case a</div>
    case 'b': return <span>I'am span. case b</span>
    case 'c': return <p>I'am p. case c</p>
    default: return <strong>I'am strong. default case</strong>
  }
}

export const ComponentWithMap: React.FC = () => {

  const testedArr: number[] = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div>
      {testedArr.map((item) => {
        return (
          <ul>
            I'am ul. {item} element
          </ul>
        )
      })}
    </div>
  )
}


export const JsxElementsComponent: React.FC = () => {

  const customJsx: JSX.Element = <span>I'am span. custom jsx element</span>

  return (
    <div>
      {customJsx}
    </div>
  )
}

export const JsxArrayComponent: React.FC = () => {

  const customJsxElements: JSX.Element[] = [
    <span key={0}>
            I'am span. custom jsx element
        </span>,
    <p key={1}>
      I'am p. custom jsx element
    </p>,
    <strong key={2}>
      I'am strong. custom jsx element
    </strong>
  ]

  return (
    <div>
      {customJsxElements}
    </div>
  )
}

export const RenderFunctionComponent: React.FC = () => {

  const customRenderFunction = () => {
    return (
      <span>
                span from custom render function
            </span>
    )
  }

  return (
    <div>
      {customRenderFunction()}
    </div>
  )
}

registerRoute(
  "/tools/jsx",
  "/tools/jsx",
  "Jsx Tree Demo",
  <JsxTreeDemoScreen />,
  "",
  "JsxTreeDemo"
);
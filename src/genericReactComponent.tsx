import React, { PropsWithChildren } from 'react';

interface AllJSXSyntaxesProps {
  // Add any necessary props here
}

interface MyCustomComponentProps {
  prop1: string;
  prop2: string;
}

const MyCustomComponent: React.FC<MyCustomComponentProps> = ({ prop1, prop2 }) => {
  return (
    <div>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
};

const ParentComponent = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <p>Parent component</p>
      {children}
    </div>
  );
};

const ChildComponent = () => {
  return <p>Child component</p>;
};

const renderJSX = () => {
  return <p>JSX in JSX</p>;
};

const AllJSXSyntaxes: React.FC<AllJSXSyntaxesProps> = () => {
  const condition = true;
  const items = ['item1', 'item2', 'item3'];
  const attributes = { id: 'my-id', className: 'my-class' };
  return (
    <div>
      {/* Text content */}
      <p>This is a simple paragraph.</p>

      {/* Self-closing tags */}
      <img src="image.jpg" alt="An image" />
      <br />

      {/* JSX expressions */}
      <p>The value of 2 + 3 is {2 + 3}.</p>
      <p>The current time is {new Date().toLocaleTimeString()}</p>

      {/* Conditional rendering */}
      {condition ? (
        <div>Condition is true.</div>
      ) : (
        <div>Condition is false.</div>
      )}

      {/* Loops */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Fragments */}
      <>
        <p>This is a fragment.</p>
        <p>Another paragraph in the fragment.</p>
      </>

      {/* Spread attributes */}
      <div {...attributes} />

      {/* Custom components */}
      <MyCustomComponent 
        prop1="value1"
        prop2="value2"
        pr1op3={1}
      />

      {/* Children */}
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>

      {/* JSX in JSX */}
      <div>
        {renderJSX()}
      </div>
      {
        true && (
          <div
            style={{border: '1px solid red'}}
            className="container"
            data={
              x && y > 0 
              ? { key: 'value' } 
              : { key: 'value2' }
            }
            options={someArray.map((item) => ({ 
              key: item,
              value: item
              data: { 
                key: item,
                value: item
               }
             }))}
          >
            1123
          </div>
        )
      }
    </div>
  );
};

export default AllJSXSyntaxes;
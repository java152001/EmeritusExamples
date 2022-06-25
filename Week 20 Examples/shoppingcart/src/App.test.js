import { render, screen } from '@testing-library/react';
import App from './App';

// test('ToDo', () => {

//   render(<App />);
  
//   const h3Ele = screen.getByText('TODO');
//   const buttonEle = screen.getByText('Add #1');
//   const formEle = screen.getByLabelText('Add todo:');

//   // expect(root.querySelector('h3').textContent).toBe('TODO');
//   // expect(rootEle.querySelector('label').textContent).toBe('Add todo: ');
//   // expect(rootEle.querySelector('button').textContent).toBe('Add #1');
//   expect(h3Ele).toBeInTheDocument();
//   expect(buttonEle).toBeInTheDocument();
//   expect(formEle).toBeInTheDocument();

// });

jest.mock('./Components/testComponent', () => () => (<div>Hello, World!</div>));

test ('mocking test', () => {
  const { container } = render(<App/>);
  expect (container.textContent).toMatch('Hello, World!');
})

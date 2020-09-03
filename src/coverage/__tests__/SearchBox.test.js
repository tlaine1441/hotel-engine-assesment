import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

import { SearchBox } from '../../components/search-box';

test('SearchBox props are valid', () => {
  const testFunc = () => {};
  const searchBox = <SearchBox placeholder="Test" value={'1'} handleSearch={testFunc} onChange={testFunc} />;

  expect(searchBox.props.placeholder).toBe("Test");
  expect(searchBox.props.value).toBe("1");
  expect(searchBox.props.handleSearch).toBe(testFunc);
  expect(searchBox.props.onChange).toBe(testFunc);

});

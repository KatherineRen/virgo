import { formatData } from './data';

function initCheckState(): boolean[] {
  const { options, toolsUsed } = formatData;

  return options.map((value, index) => {
    return toolsUsed.indexOf(index + '') !== -1;
  });
}

const initialCheckedState = initCheckState();

export { initialCheckedState };

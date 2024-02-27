const data = {
  isProficient: false,

  0: 'Redux',
  1: 'Lodash',
  2: 'Ant design',
  3: 'Webpack',
  4: 'Other',

  toolsUsed: '0,2,3,4',
};

const dataHelper = () => {
  const options = [];
  for (const [key, value] of Object.entries(data)) {
    const isNum = !!parseInt(key);

    if (isNum || key === '0') {
      options.push(value);
    }
  }

  return {
    options, // ['Redux', 'Lodash', ...]
    isProficient: false,
    toolsUsed: data.toolsUsed.split(','),
  };
};

const formatData = dataHelper();

const formData = { isProficient: data.isProficient, toolsUsed: data.toolsUsed };

export { formatData, formData };

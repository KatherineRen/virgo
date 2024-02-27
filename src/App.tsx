import { Button } from 'antd';
import { Radio, Switch, Space, Checkbox, Flex } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useState } from 'react';
import { formatData, formData } from './data';
import { initialCheckedState } from './utils';
import clsx from 'clsx';

const App = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const [radioValue, setRadioValue] = useState(false);
  const [formInfo, setFormInfo] = useState(formData);

  const [checked, setChecked] = useState(initialCheckedState);

  const options = formatData.options;

  const switchOnChange = (checked: boolean) => {
    setSwitchValue(checked);
  };

  const radioOnChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
    setFormInfo((prev) => ({ ...prev, isProficient: e.target.value }));
  };

  const handleChange = (e: unknown, index: number) => {
    const checkStateCopy = [...checked];
    checkStateCopy[index] = !checkStateCopy[index];

    setChecked(checkStateCopy);

    // 0, 2, 3, 4
    const arr: number[] = [];
    checkStateCopy.forEach((state, index) => {
      if (state === true) {
        arr.push(index);
      }
    });
    const s = arr.join(',');
    setFormInfo((prev) => ({ ...prev, toolsUsed: s }));
  };

  const handleProcess = () => {
    console.log(formInfo);
  };

  return (
    <div className='m-10 flex justify-center '>
      <div className='border mx-auto w-[409px] h-[583px] p-[36px]'>
        <div className='flex justify-between my-2'>
          <div className='w-[240px] h-[22px] text-sm'>Editable</div>
          <div>
            <Switch
              onChange={switchOnChange}
              value={switchValue}
              style={{ backgroundColor: switchValue ? '#6B47ED' : '#D4CCF7' }}
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className='w-[338px] h-[54px] font-bold flex items-center'>
                <p style={{ fontSize: '18px' }}>
                  Are you proficient in ReactJS development?
                </p>
              </div>

              <div
                className={clsx(`w-[336px] h-[59px]`, {
                  radioClass1: !switchValue,
                  radioClass2: switchValue,
                })}
              >
                <Radio.Group
                  onChange={radioOnChange}
                  value={radioValue}
                  buttonStyle='solid'
                >
                  <Space direction='vertical'>
                    <Radio value={false} disabled={!switchValue}>
                      No
                    </Radio>
                    <Radio value={true} disabled={!switchValue}>
                      Yes
                    </Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
          </div>
          <div className='w-[338px] h-[277px]'>
            <div>
              <div className='w-[205px] h-[25px] font-bold flex items-center'>
                <p>Which tools do you use?</p>
              </div>
              <div className='w-[197px] h-[22px] flex items-center text-sm mb-2.5 '>
                <p>Please select all that apply.</p>
              </div>

              <div
                className={clsx(`flex flex-col w-[336px] h-[170px] mb-10`, {
                  class1: !switchValue,
                  class2: switchValue,
                })}
              >
                {options.map((value, index) => {
                  return (
                    <Checkbox
                      className='my-checkbox'
                      key={index}
                      disabled={!switchValue}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      defaultChecked={checked[index]}
                      style={{
                        height: '22px',
                        marginBottom: ' 15px',
                      }}
                    >
                      {value}
                    </Checkbox>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <Flex gap='small' wrap='wrap'>
            <Button
              disabled={!switchValue}
              style={{
                background: switchValue ? '#6B47ED' : '#D4CCF7',
                height: '57px',
                width: '200px',
                borderRadius: '80px',
                color: 'white',
              }}
              onClick={handleProcess}
            >
              Process
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default App;

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types';
import React from 'react';
import { useReducer } from 'react';
import { IconArrowDown2 } from '../../icons/IconArrowDown2';
import { IconWeatherBlur } from '../../icons/IconWeatherBlur';
import { IconWeatherBlur1 } from '../../icons/IconWeatherBlur1';
import { IconWeatherBlur2 } from '../../icons/IconWeatherBlur2';
import { IconWeatherBlur3 } from '../../icons/IconWeatherBlur3';
import { IconWeatherBlur4 } from '../../icons/IconWeatherBlur4';
import { IconWeatherBlur5 } from '../../icons/IconWeatherBlur5';
import { IconWeatherBlur6 } from '../../icons/IconWeatherBlur6';
import { IconWeatherDrizzlingNight } from '../../icons/IconWeatherDrizzlingNight';
import { IconWeatherDrizzlingNight1 } from '../../icons/IconWeatherDrizzlingNight1';
import { IconWeatherDrizzlingNight2 } from '../../icons/IconWeatherDrizzlingNight2';
import { IconWeatherDrizzlingNight3 } from '../../icons/IconWeatherDrizzlingNight3';
import { IconWeatherDrizzlingNight4 } from '../../icons/IconWeatherDrizzlingNight4';
import { IconWeatherDrizzlingNight5 } from '../../icons/IconWeatherDrizzlingNight5';
import { IconWeatherDrizzlingNight6 } from '../../icons/IconWeatherDrizzlingNight6';
import { IconFrame } from '../IconFrame';

interface Props {
  property1: 'variant-3' | 'one';
  className?: string; // className을 선택적 속성으로 변경
  iconFrameIcon?: JSX.Element; // iconFrameIcon을 선택적 속성으로 변경
}

export const Component3533 = ({
  property1 = 'one',
  className = '',
  iconFrameIcon = (
    <IconArrowDown2 className="!absolute !w-4 !h-4 !top-px !left-px" />
  ),
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1,
  });

  return (
    <div
      className={`w-72 flex flex-col items-center gap-3 px-4 py-0 relative ${
        state.property1 === 'variant-3' ? 'h-[34px]' : ''
      } ${state.property1 === 'variant-3' ? 'overflow-hidden' : ''} ${className}`}
    >
      <div
        className="border border-solid border-semantic-text-box inline-flex items-center flex-[0_0_auto] shadow-[var(--)] pt-[var(--size-space-200)] pb-[var(--size-space-200)] px-3 overflow-hidden [-webkit-backdrop-filter:blur(20px)_brightness(100%)] rounded-[1000px] justify-center bg-semantic-bg-box backdrop-blur-[20px] backdrop-brightness-[100%] relative"
        onClick={() => {
          dispatch('click');
        }}
      >
        <div className="font-KR-button w-fit mt-[-1.00px] tracking-[var(--KR-button-letter-spacing)] text-[length:var(--KR-button-font-size)] [font-style:var(--KR-button-font-style)] text-palette-black font-[number:var(--KR-button-font-weight)] leading-[var(--KR-button-line-height)] whitespace-nowrap relative">
          이번주 날씨
        </div>
        <IconFrame icon={iconFrameIcon} size="eighteen" />
      </div>
      <div className="border border-solid border-semantic-text-box w-full flex self-stretch flex-col items-start flex-[0_0_auto] shadow-[var(--)] px-2.5 py-5 rounded-2xl [-webkit-backdrop-filter:blur(20px)_brightness(100%)] bg-semantic-bg-box backdrop-blur-[20px] backdrop-brightness-[100%] relative">
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] px-2 py-1.5 justify-between relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-subtitle-KR-small w-fit mt-[-1.00px] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] [font-style:var(--subtitle-KR-small-font-style)] text-black font-[number:var(--subtitle-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--subtitle-KR-small-line-height)] relative">
              내일
            </div>
            <div className="font-body-KR-small w-fit mt-[-1.00px] tracking-[var(--body-KR-small-letter-spacing)] text-[length:var(--body-KR-small-font-size)] [font-style:var(--body-KR-small-font-style)] text-[color:var(--palette-black-500)] font-[number:var(--body-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--body-KR-small-line-height)] relative">
              07.25
            </div>
          </div>
          <div className="inline-flex items-center gap-[11px] flex-[0_0_auto] justify-center relative">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherBlur className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                20°
              </div>
            </div>
            <div className="w-0.5 h-6 rounded-sm bg-[color:var(--palette-black-100)] relative" />
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherDrizzlingNight className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] px-2 py-1.5 justify-between relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-subtitle-KR-small w-[26px] mt-[-1.00px] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] [font-style:var(--subtitle-KR-small-font-style)] text-black font-[number:var(--subtitle-KR-small-font-weight)] text-center leading-[var(--subtitle-KR-small-line-height)] relative">
              토
            </div>
            <div className="font-body-KR-small w-fit mt-[-1.00px] tracking-[var(--body-KR-small-letter-spacing)] text-[length:var(--body-KR-small-font-size)] [font-style:var(--body-KR-small-font-style)] text-[color:var(--palette-black-500)] font-[number:var(--body-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--body-KR-small-line-height)] relative">
              07.25
            </div>
          </div>
          <div className="inline-flex items-center gap-[11px] flex-[0_0_auto] justify-center relative">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherBlur1 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                20°
              </div>
            </div>
            <div className="w-0.5 h-6 rounded-sm bg-[color:var(--palette-black-100)] relative" />
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherDrizzlingNight1 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] px-2 py-1.5 justify-between relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-subtitle-KR-small w-[26px] mt-[-1.00px] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] [font-style:var(--subtitle-KR-small-font-style)] text-black font-[number:var(--subtitle-KR-small-font-weight)] text-center leading-[var(--subtitle-KR-small-line-height)] relative">
              일
            </div>
            <div className="font-body-KR-small w-fit mt-[-1.00px] tracking-[var(--body-KR-small-letter-spacing)] text-[length:var(--body-KR-small-font-size)] [font-style:var(--body-KR-small-font-style)] text-[color:var(--palette-black-500)] font-[number:var(--body-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--body-KR-small-line-height)] relative">
              07.25
            </div>
          </div>
          <div className="inline-flex items-center gap-[11px] flex-[0_0_auto] justify-center relative">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherBlur2 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                20°
              </div>
            </div>
            <div className="w-0.5 h-6 rounded-sm bg-[color:var(--palette-black-100)] relative" />
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherDrizzlingNight2 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] px-2 py-1.5 justify-between relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-subtitle-KR-small w-[26px] mt-[-1.00px] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] [font-style:var(--subtitle-KR-small-font-style)] text-black font-[number:var(--subtitle-KR-small-font-weight)] text-center leading-[var(--subtitle-KR-small-line-height)] relative">
              월
            </div>
            <div className="font-body-KR-small w-fit mt-[-1.00px] tracking-[var(--body-KR-small-letter-spacing)] text-[length:var(--body-KR-small-font-size)] [font-style:var(--body-KR-small-font-style)] text-[color:var(--palette-black-500)] font-[number:var(--body-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--body-KR-small-line-height)] relative">
              07.25
            </div>
          </div>
          <div className="inline-flex items-center gap-[11px] flex-[0_0_auto] justify-center relative">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherBlur3 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                20°
              </div>
            </div>
            <div className="w-0.5 h-6 rounded-sm bg-[color:var(--palette-black-100)] relative" />
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherDrizzlingNight3 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] px-2 py-1.5 justify-between relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-subtitle-KR-small w-[26px] mt-[-1.00px] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] [font-style:var(--subtitle-KR-small-font-style)] text-black font-[number:var(--subtitle-KR-small-font-weight)] text-center leading-[var(--subtitle-KR-small-line-height)] relative">
              화
            </div>
            <div className="font-body-KR-small w-fit mt-[-1.00px] tracking-[var(--body-KR-small-letter-spacing)] text-[length:var(--body-KR-small-font-size)] [font-style:var(--body-KR-small-font-style)] text-[color:var(--palette-black-500)] font-[number:var(--body-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--body-KR-small-line-height)] relative">
              07.25
            </div>
          </div>
          <div className="inline-flex items-center gap-[11px] flex-[0_0_auto] justify-center relative">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherBlur4 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                20°
              </div>
            </div>
            <div className="w-0.5 h-6 rounded-sm bg-[color:var(--palette-black-100)] relative" />
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherDrizzlingNight4 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] px-2 py-1.5 justify-between relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-subtitle-KR-small w-[26px] mt-[-1.00px] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] [font-style:var(--subtitle-KR-small-font-style)] text-black font-[number:var(--subtitle-KR-small-font-weight)] text-center leading-[var(--subtitle-KR-small-line-height)] relative">
              수
            </div>
            <div className="font-body-KR-small w-fit mt-[-1.00px] tracking-[var(--body-KR-small-letter-spacing)] text-[length:var(--body-KR-small-font-size)] [font-style:var(--body-KR-small-font-style)] text-[color:var(--palette-black-500)] font-[number:var(--body-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--body-KR-small-line-height)] relative">
              07.25
            </div>
          </div>
          <div className="inline-flex items-center gap-[11px] flex-[0_0_auto] justify-center relative">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherBlur5 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                20°
              </div>
            </div>
            <div className="w-0.5 h-6 rounded-sm bg-[color:var(--palette-black-100)] relative" />
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherDrizzlingNight5 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] px-2 py-1.5 justify-between relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-subtitle-KR-small w-[26px] mt-[-1.00px] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] [font-style:var(--subtitle-KR-small-font-style)] text-black font-[number:var(--subtitle-KR-small-font-weight)] text-center leading-[var(--subtitle-KR-small-line-height)] relative">
              목
            </div>
            <div className="font-body-KR-small w-fit mt-[-1.00px] tracking-[var(--body-KR-small-letter-spacing)] text-[length:var(--body-KR-small-font-size)] [font-style:var(--body-KR-small-font-style)] text-[color:var(--palette-black-500)] font-[number:var(--body-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--body-KR-small-line-height)] relative">
              07.25
            </div>
          </div>
          <div className="inline-flex items-center gap-[11px] flex-[0_0_auto] justify-center relative">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherBlur6 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                20°
              </div>
            </div>
            <div className="w-0.5 h-6 rounded-sm bg-[color:var(--palette-black-100)] relative" />
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] relative">
              <IconFrame
                icon={
                  state.property1 === 'one' ? (
                    <IconWeatherDrizzlingNight6 className="!absolute !w-7 !h-7 !top-0.5 !left-0.5" />
                  ) : undefined
                }
                size="thirty-two"
              />
              <div className="font-temperature-16 w-fit tracking-[var(--temperature-16-letter-spacing)] [font-style:var(--temperature-16-font-style)] text-[length:var(--temperature-16-font-size)] text-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] relative">
                28°
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === 'one') {
    switch (action) {
      case 'click':
        return {
          property1: 'variant-3',
        };
    }
  }

  if (state.property1 === 'variant-3') {
    switch (action) {
      case 'click':
        return {
          property1: 'one',
        };
    }
  }

  return state;
}

Component3533.propTypes = {
  property1: PropTypes.oneOf(['variant-3', 'one']),
  className: PropTypes.string,
  iconFrameIcon: PropTypes.element,
};

'use client';

import { Flowbite, ThemeProps } from 'flowbite-react';
import { FC, PropsWithChildren } from 'react';

const theme: ThemeProps = {
  mode: 'dark',

  theme: {},
};

const FlowbiteContext: FC<PropsWithChildren> = function({ children }) {
  return <Flowbite theme={theme}>{children}</Flowbite>;
};

export default FlowbiteContext;

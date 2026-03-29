"use client"
import React, { useRef, useEffect, PropsWithChildren } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface Props {
   options?: Record<string, unknown>;
   delegate?: string;
}

const Fancybox = (props: PropsWithChildren<Props>) => {
   const containerRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const container = containerRef.current;

      const delegate = props.delegate || '[data-fancybox]';
      const options = props.options || {};

      NativeFancybox.bind(container, delegate, options as any);

      return () => {
         NativeFancybox.unbind(container);
         NativeFancybox.close();
      };
   });

   return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox

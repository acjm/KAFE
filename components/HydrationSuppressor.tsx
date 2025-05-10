"use client";

import React, { ReactNode, Children, isValidElement, cloneElement, ReactElement } from 'react';

interface HydrationElement extends ReactElement {
  props: {
    children?: ReactNode;
    suppressHydrationWarning?: boolean;
    key?: string | number;
    bis_skin_checked?: string;
    [key: string]: any;
  };
}

interface HydrationSuppressorProps {
  children: ReactNode;
}

// List of known browser extension attributes that can cause hydration mismatches
const BROWSER_EXTENSION_ATTRIBUTES = [
  'bis_skin_checked',
  'data-bis_skin_checked',
  'data-bis_skin_checked_1',
  'data-bis_skin_checked_2',
  'data-bis_skin_checked_3',
  'data-bis_skin_checked_4',
  'data-bis_skin_checked_5',
  'data-bis_skin_checked_6',
  'data-bis_skin_checked_7',
  'data-bis_skin_checked_8',
  'data-bis_skin_checked_9',
  'data-bis_skin_checked_10',
];

function cleanProps(props: Record<string, any>): Record<string, any> {
  const cleanedProps = { ...props };
  
  // Remove all known browser extension attributes
  BROWSER_EXTENSION_ATTRIBUTES.forEach(attr => {
    delete cleanedProps[attr];
  });

  // Remove any other attributes that start with 'data-bis_skin_checked'
  Object.keys(cleanedProps).forEach(key => {
    if (key.startsWith('data-bis_skin_checked')) {
      delete cleanedProps[key];
    }
  });

  // Add suppressHydrationWarning to all elements
  cleanedProps.suppressHydrationWarning = true;

  return cleanedProps;
}

function addSuppression(element: ReactNode, index: number): ReactNode {
  if (!isValidElement(element)) {
    return element;
  }

  const elementWithKey = cloneElement(element as HydrationElement, {
    ...cleanProps((element as HydrationElement).props),
    key: (element as HydrationElement).key || `hydration-suppressor-${index}`,
    children: Children.map((element as HydrationElement).props.children, (child, childIndex) => 
      addSuppression(child, childIndex)
    )
  });

  return elementWithKey;
}

export default function HydrationSuppressor({ children }: HydrationSuppressorProps) {
  return (
    <div suppressHydrationWarning>
      {Children.map(children, (child, index) => addSuppression(child, index))}
    </div>
  );
} 
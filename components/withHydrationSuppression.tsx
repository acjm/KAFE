import { ComponentType, cloneElement, isValidElement, ReactNode, ReactElement } from 'react';

interface HydrationElement extends ReactElement {
  props: {
    children?: ReactNode;
    [key: string]: any;
  };
}

function addHydrationSuppression(node: ReactNode): ReactNode {
  if (!isValidElement(node)) {
    return node;
  }

  const element = node as HydrationElement;
  const children = element.props.children;
  const processedChildren = children
    ? Array.isArray(children)
      ? children.map(addHydrationSuppression)
      : addHydrationSuppression(children)
    : children;

  return cloneElement(element, {
    ...element.props,
    suppressHydrationWarning: true,
    children: processedChildren,
  });
}

export function withHydrationSuppression<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function WithHydrationSuppression(props: P) {
    const element = <WrappedComponent {...props} />;
    return addHydrationSuppression(element);
  };
} 
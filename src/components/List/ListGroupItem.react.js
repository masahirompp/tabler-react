// @flow

import * as React from "react";
import cn from "classnames";

import { Icon } from "../../components";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +active?: boolean,
  +icon?: string,
  +to?: string,
|};

function ListGroupItem({
  className,
  children,
  RootComponent,
  active,
  icon,
  to,
}: Props): React.Node {
  const classes = cn(
    "list-group-item",
    "list-group-item-action",
    {
      active: active,
    },
    className
  );
  // const Component = RootComponent || "a";
  return RootComponent ? (
    <RootComponent to={to} className={classes}>
      {icon && (
        <span className="mr-3 icon">
          <Icon prefix="fe" name={icon} />{" "}
        </span>
      )}
      {children}
    </RootComponent>
  ) : (
    <a className={classes} href={to}>
      {icon && (
        <span className="mr-3 icon">
          <Icon prefix="fe" name={icon} />{" "}
        </span>
      )}
      {children}
    </a>
  );
}

ListGroupItem.displayName = "List.GroupItem";

export default ListGroupItem;

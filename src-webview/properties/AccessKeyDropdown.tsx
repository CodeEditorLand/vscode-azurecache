// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	GroupedList,
	type IGroup,
	type IGroupDividerProps,
	type IGroupHeaderProps,
	type IGroupRenderProps,
	type IRenderFunction,
	type IStyle,
	Label,
	SelectionMode,
} from "@fluentui/react/lib/";
import type * as React from "react";
import {
	StrAccessKeys,
	StrPrimary,
	StrPrimaryAccessKey,
	StrPrimaryConnectionStr,
} from "../Strings";
import { CopyableTextField } from "./CopyableTextField";

interface Props {
	accessKey?: string;
	connectionString?: string;
}

interface Item {
	accessKey: string;
	connectionString: string;
}

const onRenderCell = (
	nestingDepth?: number,
	item?: Item,
	itemIndex?: number,
): JSX.Element => {
	return (
		<div style={{ marginLeft: "48px" }}>
			<CopyableTextField
				id="primaryAccessKey"
				label={StrPrimaryAccessKey}
				value={item?.accessKey}
			/>
			<CopyableTextField
				id="primaryConnectionStr"
				label={StrPrimaryConnectionStr}
				value={item?.connectionString}
			/>
		</div>
	);
};

const onRenderHeader: IRenderFunction<IGroupHeaderProps> = (
	headerProps?: IGroupDividerProps,
	defaultRender?: IRenderFunction<IGroupHeaderProps>,
) => {
	if (!defaultRender) {
		return null;
	}

	// Make entire header togglable
	const onToggleSelectGroup = (): void => {
		if (headerProps?.onToggleCollapse && headerProps?.group) {
			headerProps.onToggleCollapse(headerProps.group);
		}
	};

	// Hide header count
	const headerCountStyle: IStyle = { display: "none" };

	return (
		<span>
			{defaultRender({
				...headerProps,
				styles: { headerCount: headerCountStyle },
				onToggleSelectGroup: onToggleSelectGroup,
			})}
		</span>
	);
};

export function AccessKeyDropdown(props: Props): React.ReactElement | null {
	const { accessKey, connectionString } = props;
	if (
		typeof accessKey === "undefined" ||
		typeof connectionString === "undefined"
	) {
		return null;
	}

	const items: Item[] = [{ accessKey, connectionString }];
	const groups: IGroup[] = [
		{
			count: 1,
			key: "group",
			name: StrPrimary,
			startIndex: 0,
			isCollapsed: true,
		},
	];
	const groupProps: IGroupRenderProps = {
		onRenderHeader,
	};

	return (
		<div>
			<Label>{StrAccessKeys}</Label>
			<GroupedList
				items={items}
				onRenderCell={onRenderCell}
				groups={groups}
				groupProps={groupProps}
				selectionMode={SelectionMode.none}
				compact={true}
			/>
		</div>
	);
}

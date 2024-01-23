// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { type IIconProps, IconButton } from "@fluentui/react/lib/";
import type * as React from "react";
import { StrCopy } from "../Strings";

const copyIcon: IIconProps = { iconName: "Copy" };

interface Props {
	onClick: () => void;
	onMouseLeave?: () => void;
}

export function CopyButton(props: Props): React.ReactElement {
	return (
		<IconButton
			className="copy-icon"
			iconProps={copyIcon}
			style={{
				backgroundColor: "#0078d4",
				color: "white",
			}}
			ariaLabel={StrCopy}
			onClick={props.onClick}
			onMouseLeave={props.onMouseLeave}
		/>
	);
}

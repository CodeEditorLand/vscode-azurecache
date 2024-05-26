// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextField } from "@fluentui/react";
import type * as React from "react";
import { StrContents } from "../Strings";
import "./KeyContentsField.css";

interface Props {
	value?: string;
}

export function KeyContentsField(props: Props): React.ReactElement {
	return (
		<div class="content-container">
			<TextField
				class="contents-field"
				inputClassName="contents-input"
				label={StrContents}
				multiline={true}
				autoAdjustHeight={true}
				readOnly={true}
				value={props.value}
				resizable={false}
			/>
		</div>
	);
}

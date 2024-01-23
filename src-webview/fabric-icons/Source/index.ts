// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { IIconOptions } from "@uifabric/styling";
import { initializeIcons as i } from "./fabric-icons";

export function initializeIcons(baseUrl = "", options?: IIconOptions): void {
	[i].forEach((initialize: (url: string, options?: IIconOptions) => void) =>
		initialize(baseUrl, options),
	);
}

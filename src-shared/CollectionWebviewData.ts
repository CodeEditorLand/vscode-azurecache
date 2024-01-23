// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { CollectionElement } from "./CollectionElement";

export interface CollectionWebviewData {
	data: CollectionElement[];
	clearCache: boolean;
	hasMore: boolean;
}

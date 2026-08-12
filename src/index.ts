import "dotenv/config";
import { Collection as CoreCollection } from "@mongoloquent/core";

// Send deprecation warning to console
console.warn(
	"\x1b[33m%s\x1b[0m",
	"[DEPRECATION WARNING] 'mongoloquent' has moved to '@mongoloquent/core'. Please update your dependencies to '@mongoloquent/core'.",
);

// Re-export everything from the new scoped package
export * from "@mongoloquent/core";

// Maintain backward compatibility for wrapper helper functions
export function collect<T>(values: T[]) {
	return new CoreCollection<T>(...values);
}

/**
 * check if a docker label is valid
 *
 * @param label - an object that contains:
 * - a key, which is a string that contains only lowercase alphanumeric characters, periods, and hyphens, and does not start with `com.docker.`, `io.docker.`, or `org.dockerproject.`
 * @param value - any string
 *
 * @returns true if label is valid, false if not
 *
 * @remarks
 *
 * the best practice is for a label to start with the reverse DNS notation of your organization (e.g. design.incremental.<your-label-name>) to avoid overwriting any of the docker-provided labels.
 *
 * @see {@link https://docs.docker.com/config/labels-custom-metadata/#key-format-recommendations}
 *
 */
export function isLabelValid(label: { key: string; value: string }): {
  valid: boolean;
  message?: string;
} {
  const valid = !label.key.match(/[^0-9a-z.-]/);
  if (!valid)
    return {
      valid,
      message: `key '${label.key}' in '{key: ${label.key}, value: ${label.value}}' should only contain '-', '.', and lowercase alphanumeric characters.`,
    };
  if (valid && !label.key.match(/.*\..*\..*/))
    return {
      valid,
      message: `key '${label.key}' in '{key: ${label.key}, value: ${label.value}}' should be namespaced with the reverse-DNS notation of your organization's domain (e.g. com.yourcompany.<label>).`,
    };
  return { valid };
}

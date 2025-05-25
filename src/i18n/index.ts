function _format(message: string, args: (string | number | boolean | undefined | null)[]) {
  if (args.length === 0) {
    return message;
  }

  return message.replace(/\{(\d+)\}/g, (match, rest) => {
    const index = rest[0];
    const arg = args[index];
    let result = match;
    if (typeof arg === 'string') {
      result = arg;
    } else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
      result = String(arg);
    }
    return result;
  });
}

export function localize(message: string, ...args: (string | number | boolean | undefined | null)[]) {
  return _format(message, args);
}

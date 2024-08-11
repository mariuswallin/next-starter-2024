export const catchErrors = (fn: (args: unknown[]) => Promise<void>) => {
  return (...args: unknown[]) =>
    fn(args).catch((err) => {
      console.error(err)
    })
}

// TODO: HandleErrors

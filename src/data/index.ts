export const getPermissionSets = () => {
  return {
    wallets: {
      vault: {
        create: ["org"],
        read: ["org", "vault"],
      },
      key: {
        update: ["org", "vault", "key"],
        create: ["org", "vault"],
        read: ["org", "vault", "key"],
      },
    },
    transactions: {
      transaction: {
        read: ["org", "vault", "key"],
        create: ["org", "vault", "key"],
      },
    },
    controls: {
      allowaddress: {
        create: ["org", "vault", "key"],
        delete: ["org", "vault", "key"],
        read: ["org", "vault", "key"],
      },
      keylimit: {
        read: ["org", "vault", "key"],
        create: ["org", "vault", "key"],
        delete: ["org", "vault", "key"],
      },
    },
  };
};

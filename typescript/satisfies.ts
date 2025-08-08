let roles = ['admin', 'guest', 'editor'] as const;

const firstRoles = roles[0];

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23
} satisfies Record<string, number>;

dataEntries.entry2;


let roles = ['admin', 'guest', 'editor'] as const;

const firstRoles = roles[0];

const dataEntries: Record<string, number> = {
  entry1: 0.51,
  entry2: -1.23
}

dataEntries.entry3;